import { GetStaticProps } from "next";
import { lazy, Suspense } from "react";
import { NavBar } from "@/components/NavBar";
import { GetFromCategory } from '@/util/content-lister';
import { MDXProvider } from '@mdx-js/react';
import SyntaxHighlighter from "react-syntax-highlighter";
import monokai from "react-syntax-highlighter/dist/cjs/styles/hljs/monokai";

const Highlighter: any = SyntaxHighlighter;

type ArticleProps = {page: string, name: string};

export default function Article({page, name}: ArticleProps) {
    const MDX = lazy(() => import(`#/articles/${page}.mdx`));

    return (<>
        <h1 className="text-5xl">{name}</h1>
        <NavBar></NavBar>
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
                            style={monokai}
                            {...props} 
                        />
                    </>);
                    return highlighted;
                }
            }}>
            <Suspense>
                <div className="prose dark:prose-invert max-w-none">
                    <MDX/>
                </div>
            </Suspense>
        </MDXProvider>
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
