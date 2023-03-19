import { useCopyToClipboard } from "usehooks-ts";
import SyntaxHighlighter from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable";

const Highlighter: any = SyntaxHighlighter;

export default function MdxPre({className, children, ...props}: JSX.IntrinsicElements['pre']) {
    const [value, copy] = useCopyToClipboard();

    const content = (children as JSX.Element).props as JSX.ElementChildrenAttribute & { className: string};
    const match = content.className?.match(/language-(\w+)/) || '';
    const regexpAt = /@(\w+) (.+)/;
    const split = String(content.children).trim().split(regexpAt);
    const file = (split.findIndex((el: string) => el == 'file')+1);
    const desc = (split.findIndex((el: string) => el == 'desc')+1);
    const line = Number(split[(split.findIndex((el: string) => el == 'line')+1)]);
    const trimmedCode = String(split[split.length-1]).trim();

    return (<>
        <div className='relative overflow-hidden bg-slate-900 rounded mb-2'>
            <div className="flex justify-between gap-8 prose max-w-none pl-2 pr-2">
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
            <button className={`absolute right-2 bottom-0 p-2 transition-colors select-none 
                                font-bold hover:text-blue-200 ${value && 'focus:text-green-300'}`}
                onClick={() => copy(trimmedCode)}>
                Copy
            </button>
        </div>
    </>);
}
