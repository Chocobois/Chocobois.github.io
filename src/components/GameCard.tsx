import Link from "next/link";
import { gameSafeUrl } from "../util/game-safe-url";
import games from '../data/games.json';
type GameDescription = typeof games[number];

export function GameCard(game: GameDescription) {
    return (<>
        <Link href={`games/${gameSafeUrl(game.name)}`}>
            <div className='flex flex-col w-64 p-2 rounded bg-orange-700'>
                <div>
                    <img src={game.thumb} />
                </div>
                <div>
                    <p className='font-bold'>{game.name}</p>
                    <p>{game.description}</p>
                </div>
            </div>
        </Link>
    </>);
}