import Link from "next/link";
import { gameSafeUrl } from "../util/game-safe-url";
import games from '../data/games.json';
type GameDescription = typeof games[number];

interface GameCardProps {
    game: GameDescription
}

export function GameCard({game}: GameCardProps) {
    return (<>
        <Link href={`games/${gameSafeUrl(game.name)}`} className="flex flex-col w-64 p-2 rounded shadow-lg bg-emerald-700 select-none">
            <div className="aspect-thumb shadow">
                <img className="object-cover w-full h-full rounded" src={game.thumb} />
            </div>
            <div className="p-2">
                <p className='font-bold text-xl'>{game.name}</p>
                <p>{game.description}</p>
            </div>
        </Link>
    </>);
}