export default function MdxCode({children, ...props}: JSX.IntrinsicElements['code']) {
    console.log("pre", children)
    return (<span className='font-mono bg-slate-900 pl-1 pr-1 rounded' {...props}>{children}</span>);
}
