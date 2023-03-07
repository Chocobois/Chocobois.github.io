import { GetStaticProps } from "next";
import { lazy, Suspense } from "react";
import { NavBar } from "@/components/NavBar";

type SlugProps = {page: string, name: string};

export default function Slug({page, name}: SlugProps) {
    const MDX = lazy(() => import(`../../../articles/${page}.mdx`));

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
    const fs = await import('fs');
    const files = fs.readdirSync('./articles')
        .filter((file) => file.endsWith('mdx'));
    return {
        paths: files.map(name => ({
            params: {
                slug: name.substring(0, name.length-4)
            }
        })),
        fallback: true,
    }
}

type PageStaticProps = GetStaticProps<SlugProps>;
export const getStaticProps: PageStaticProps = async ({params}) => {
    const file = (`${params?.slug}`);
    const mdx = await import(`../../../articles/${file}.mdx`);
    return {
        props: {
            page: file,
            name: mdx.name
        }
    }
}
