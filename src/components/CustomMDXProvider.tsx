import { MDXProvider } from '@mdx-js/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import SyntaxHighlighter from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable";
import { useCopyToClipboard } from 'usehooks-ts';

const Highlighter: any = SyntaxHighlighter;

type CustomMDXProvider = {
    children: ReactNode
}

export default function CustomMDXProvider({ children }: CustomMDXProvider) {
    return (<>
        <MDXProvider components={{
                code: ({className, children, ...props}) => {
                    const [value, copy] = useCopyToClipboard();
                    const text = String(children).trim();
                    const regexpAt = /@(\w+) (.+)/;
                    const split = text.split(regexpAt) as any;
                    const match = className?.match(/language-(\w+)/) || '';
                    const file = (split.findIndex((el: string) => el == 'file')+1);
                    const desc = (split.findIndex((el: string) => el == 'desc')+1);
                    const line = Number(split[(split.findIndex((el: string) => el == 'line')+1)]);
                    const trimmedCode = split[split.length-1].trim();
                    const highlighted = (<div className='relative overflow-hidden'>
                        <div className="flex justify-between gap-8 prose max-w-none ml-2 mr-2">
                            <p className="m-0 text-slate-300">{desc != split.length-1 ? split[desc] : ''}</p>
                            <p className="m-0 text-stone-500">{file != split.length-1 ? split[file] : ''}</p>
                        </div>
                        <Highlighter 
                            className={`not-prose rounded m-2`}
                            language={match[1]}
                            showLineNumbers={true}
                            children={trimmedCode}
                            style={theme}
                            startingLineNumber={Number(line) || 1}
                            {...props} 
                        />
                        <button className={`absolute right-2 bottom-0 p-2 transition-colors select-none font-bold hover:text-blue-200 ${value && 'focus:text-green-300'}`}
                            onClick={() => copy(trimmedCode)}>
                                Copy
                        </button>
                    </div>);
                    return highlighted;
                },
                img: ({src, alt}) => {
                    const router = useRouter();
                    return (<img src={`${router.asPath}/${src}`} alt={alt}></img>);
                }
            }}>
            {children}
        </MDXProvider>
    </>);
}