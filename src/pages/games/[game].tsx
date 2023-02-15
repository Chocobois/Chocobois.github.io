import { NavBar } from "../../components/NavBar";

import games from '../../data/games.json';
import { GetStaticProps } from "next";
import { GameFrame } from "../../components/GameFrame";
import { useFullScreenButton } from "../../hooks/useFullscreenButton";

type GameDescription = typeof games[number]

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

const safeurl = (game: GameDescription) => game.name.replaceAll(' ', '-').toLowerCase();

export async function getStaticPaths() {
    return {
        paths: games.map((game) => {
            return { 
                params: { game: safeurl(game) }
            }
        }),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<{ game: GameDescription }> = async ({params}) => {

    const game = games.find((game) => safeurl(game) == params?.game) as GameDescription;
    
    return {
        props: {
            game: game
        }
    }
}