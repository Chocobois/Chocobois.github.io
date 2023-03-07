import { NavBar } from "@/components/NavBar";
import { GameFrame } from "@/components/GameFrame";
import { useFullScreenButton } from "@/hooks/useFullscreenButton";
import { GetFromCategory } from "@/util/content-lister";
import { lazy, Suspense } from "react";

interface GamesProps {
    game: {
        name: string
        date: string
        source: string
        cover: string
        href: string
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
    />);
    
    return (<>
        <div>
            <h1 className="text-5xl">{game.name}</h1>
            <NavBar />
            <Suspense>
                <MDX Game={gameFrame} FullScreenButton={<FullScreenButton />}/>
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
    const {
        name,
        date,
        source,
        cover
    } = await import(`#/games/${file}.mdx`);

    return {
        props: {
            game: {
                name,
                date,
                source,
                cover,
                href: file
            }
        }
    }
}