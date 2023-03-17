import { NavBar } from "@/components/nav-bar"
import { nanoid } from 'nanoid';
import Link from "next/link";
import moment from "moment";
import { GetFromCategory } from '@/util/content-lister';

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
        <div className="flex flex-col gap-2">{
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
    const files = GetFromCategory('articles');
    const modules = await Promise.all(
        files.map((file) => import(`#/articles/${file}.mdx`))
    );

    const articles = modules.map(({name, date}, index) => {
        return {
            name: name,
            date: date,
            id: nanoid(),
            href: files[index] as string
        }
    }).sort((a, b) => a.date > b.date ? -1 : 1);

    return {
        props: {
            articles
        }
    }
}
