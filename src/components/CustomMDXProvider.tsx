import { MDXProvider } from '@mdx-js/react';
import { ReactNode } from 'react';
import SyntaxHighlighter from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable";

const Highlighter: any = SyntaxHighlighter;

type CustomMDXProvider = {
    children: ReactNode
}

export default function CustomMDXProvider({ children }: CustomMDXProvider) {
    return (<>
        <MDXProvider components={{
                code: ({className, children, ...props}) => {
                    const text = String(children).trim();
                    const regexpAt = /@(\w+) (.+)/;
                    const split = text.split(regexpAt) as any;
                    const match = className?.match(/language-(\w+)/) || '';
                    const file = (split.findIndex((el: string) => el == 'file')+1);
                    const desc = (split.findIndex((el: string) => el == 'desc')+1);
                    const highlighted = (<>
                        <div className="flex justify-between gap-8 prose max-w-none ml-2 mr-2">
                            <p className="m-0 text-slate-300">{desc != split.length-1 ? split[desc] : ''}</p>
                            <p className="m-0 text-stone-500">{file != split.length-1 ? split[file] : ''}</p>
                        </div>
                        <Highlighter 
                            className={`not-prose rounded m-2`}
                            language={match[1]}
                            showLineNumbers={true}
                            children={split[split.length-1].trim()}
                            style={theme}
                            {...props} 
                        />
                    </>);
                    return highlighted;
                }
            }}>
            {children}
        </MDXProvider>
    </>);
}