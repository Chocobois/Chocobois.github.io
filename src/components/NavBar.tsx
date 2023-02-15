import Links from '../data/nav.json';
import Link from 'next/link';

export function NavBar() {
    return (<div className="flex gap-8 text-blue-300 font-bold mt-4 mb-4">
        {Links.map(({href, text}, index)=><Link className="hover:text-blue-200 transition-colors" key={index} href={href}>{text}</Link>)}
    </div>);
}