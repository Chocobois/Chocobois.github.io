import { GetStaticProps } from "next";
import { lazy, Suspense } from "react";
import { NavBar } from "@/components/NavBar";
import { GetFromCategory } from '@/util/content-lister';
import CustomMDXProvider from "@/components/CustomMDXProvider";

type ArticleProps = {page: string, name: string};

export default function Article({page, name}: ArticleProps) {
    const MDX = lazy(() => import(`#/articles/${page}.mdx`));

    return (<>
        <h1 className="text-5xl">{name}</h1>
        <NavBar></NavBar>
        <Suspense>
            <div className="prose dark:prose-invert max-w-none">
                <MDX/>
            </div>
        </Suspense>
    </>);
}

export async function getStaticPaths() {
    const files = GetFromCategory('articles');

    return {
        paths: files.map(name => ({
            params: {
                article: name
            }
        })),
        fallback: true,
    }
}

type PageStaticProps = GetStaticProps<ArticleProps>;
export const getStaticProps: PageStaticProps = async ({params}) => {
    const file = (`${params?.article}`);
    const mdx = await import(`#/articles/${file}.mdx`);
    return {
        props: {
            page: file,
            name: mdx.name
        }
    }
}
