import { NavBar } from "@/components/nav-bar";
import { GameFrame } from "@/components/game-frame";
import { useFullScreenButton } from "@/hooks/fullscreen-button";
import { GetFromCategory } from "@/util/content-lister";
import { lazy, Suspense } from "react";
import { Contributors } from "@/components/contributors";
import { Title } from "@/components/head-title";

interface GamesProps {
    game: {
        name: string
        date: string
        source: string
        cover: string
        href: string
        contributors: string[]
        color: string
        roles: Object
    }
}

export default function Games({game}: GamesProps) {
    const [handle, FullScreenButton] = useFullScreenButton();
    const MDX = lazy(() => import(`#/games/${game.href}.mdx`));

    const gameFrame = (<GameFrame
        fullscreenHandle={handle}
        source={game.source}
        className="drop-shadow-lg"
        cover={game.cover}
        href={game.href}
    />);

    return (<>
        <Title>{game.name}</Title>
        <div>
            <h1 className="text-5xl">{game.name}</h1>
            <NavBar />
            <Suspense>
                <div className="prose prose-invert max-w-none">
                    <MDX 
                        Game={gameFrame} 
                        FullScreenButton={<FullScreenButton />} 
                        Contributors={<Contributors 
                            color={game.color} 
                            contributors={game.contributors}
                            roles={game.roles} />
                        }
                    />
                </div>
            </Suspense>
        </div>
    </>);
}

export async function getStaticPaths() {
    const files = GetFromCategory('games');
    return {
        paths: files.map((path) => ({ 
            params: { game: path }
        })),
        fallback: false
    }
}

export const getStaticProps = async ({params}: any) => {
    const file = (`${params?.game}`);
    const { meta } = await import(`#/games/${file}.mdx`);
    const { name, date, source, cover, contributors, color, roles = {} } = meta;
    return {
        props: {
            game: {
                name,
                date,
                source,
                cover,
                contributors,
                color,
                roles,
                href: file
            }
        }
    }
}