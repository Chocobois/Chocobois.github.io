export default function MdxPre({children, ...props}: JSX.IntrinsicElements['pre']) {
    return (<pre className='m-0 p-1' {...props}>{children}</pre>);
}
