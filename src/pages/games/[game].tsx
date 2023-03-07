import { NavBar } from "@/components/NavBar";

import games from '@/data/games.json';
import { GetStaticProps } from "next";
import { GameFrame } from "@/components/GameFrame";
import { useFullScreenButton } from "@/hooks/useFullscreenButton";
import { gameSafeUrl } from "@/util/game-safe-url";

type GameDescription = typeof games[number];

interface GamesProps {
    game: GameDescription
}

export default function Games({game}: GamesProps) {
    const [handle, FullScreenButton] = useFullScreenButton();

    return (<>
        <div>
            <h1 className="text-5xl">{game.name}</h1>
            <NavBar />
            <GameFrame
                fullscreenHandle={handle}
                source={game.source}
                className="drop-shadow-lg"
                cover={game.cover}
            />
            <FullScreenButton />
        </div>
    </>);
}

export async function getStaticPaths() {
    return {
        paths: games.map((game) => ({ 
            params: { game: gameSafeUrl(game.name) }
        })),
        fallback: false
    }
}

type GameStaticProps = GetStaticProps<{game: GameDescription}>;
export const getStaticProps: GameStaticProps = async ({params}) => {
    const game = games.find(
        (game) => gameSafeUrl(game.name) == params?.game
    ) as GameDescription;
    return {
        props: {
            game: game
        }
    }
}