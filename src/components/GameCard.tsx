import Link from "next/link";
import { gameSafeUrl } from "../util/game-safe-url";
import games from '../data/games.json';
type GameDescription = typeof games[number];

interface GameCardProps {
    game: GameDescription
}

export function GameCard({game}: GameCardProps) {
    return (<>
        <Link href={`games/${gameSafeUrl(game.name)}`} className="flex flex-col w-64 p-2 rounded bg-orange-700">
            <div>
                <img src={game.thumb} />
            </div>
            <div>
                <p className='font-bold'>{game.name}</p>
                <p>{game.description}</p>
            </div>
        </Link>
    </>);
}