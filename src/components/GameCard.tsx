import Link from "next/link";
import { useRef } from "react";
import { useEffectOnce } from "usehooks-ts";
import Tilt, { HTMLVanillaTiltElement } from 'vanilla-tilt';
import { isMobile } from 'react-device-detect';

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
        color: string
    }
}

export function GameCard({game}: GameCardProps) {
    const cardRef = useRef<HTMLAnchorElement & HTMLVanillaTiltElement>(null);

    useEffectOnce(() => {
        const card = cardRef.current as HTMLVanillaTiltElement;
        Tilt.init(card, {
            reverse: !isMobile,
            scale: 1.05,
            perspective: 2000,
            gyroscope: true
        });
    });

    return (<>
        <Link href={`games/${game.href}`} className="flex flex-col w-64 p-2 rounded shadow-lg shadow-slate-800 select-none min-h-[23em]" style={{backgroundColor: game.color, transformStyle: "preserve-3d"}} ref={cardRef}>
            <div className="aspect-thumb p-1" style={{transform: "translateZ(20px)"}}>
                <img className="object-cover w-full h-full rounded shadow shadow-slate-800" src={`./games/${game.href}/${game.thumb}`} />
            </div>
            <div className="p-2" style={{transform: "translateZ(15px)"}}>
                <p className='font-bold text-xl'>{game.name}</p>
                <p>{game.description}</p>
            </div>
        </Link>
    </>);
}