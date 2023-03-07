import Link from "next/link";

interface GameCardProps {
    game: {
        name: string
        date: string
        description: string
        thumb: string
        source: string
        cover: string
        id: string
        href: string
    }
}

export function GameCard({game}: GameCardProps) {
    return (<>
        <Link href={`games/${game.href}`} className="flex flex-col w-64 p-2 rounded shadow-lg bg-emerald-700 select-none">
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