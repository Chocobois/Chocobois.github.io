import { NavBar } from "../components/NavBar"
import { nanoid } from 'nanoid';
import Link from "next/link";
import moment from "moment";

type ListDocsProps = {
    articles: {
        name: string,
        date: string,
        id: string,
        href: string
    }[]
}

export default function ListDocs({articles}: ListDocsProps) {
    return (<>
        <h1 className="text-5xl">Articles</h1>
        <NavBar></NavBar>
        <div className="flex flex-col gap-2 r">{
            articles.map((data) => (
                <Link key={data.id} href={`articles/${data.href}`}>
                <div className='rounded bg-green-800 p-2 pt-1 pb-1 flex justify-between'>
                    <p>{data.name}</p>
                    <p>{moment(data.date, "YYYY-MM-DD").format("MMMM Do YYYY")}</p>
                </div>
                </Link>
            ))
        }</div>
    </>)
}

export const getStaticProps = async () => {
    const fs = await import('fs');
    const files = fs.readdirSync('./articles')
        .filter((file) => file.endsWith('mdx'));
    const modules = await Promise.all(
        files.map((file) => import(`../../articles/${file}`))
    );
    const articles = modules.map((mod, index) => {
        const file = files[index] as string;
        return {
            name: mod.name,
            date: mod.date,
            id: nanoid(),
            href: file.substring(0, file.length - 4)
        }
    }).sort((a, b) => a.date > b.date ? -1 : 1);

    return {
        props: {
            articles: articles
        }
    }
}
