import { NavBar } from "@/components/NavBar";
import { GameCard } from "@/components/GameCard";
import { Fireworks } from '@fireworks-js/react'
import games from '@/data/games.json';

export default function Games() {
    return (<>
        <div>
            <h1 className="text-5xl">Games</h1>
            <NavBar />
            <div className="flex flex-wrap gap-8">
                {games.map((game) => 
                    <GameCard game={game} />
                )}
            </div>
            <Fireworks 
                options={{
                rocketsPoint: {
                    min: 0,
                    max: 100,
                }
                }}
                className="top-0 left-0 w-full h-full fixed pointer-events-none">
            </Fireworks>
        </div>
    </>);
}
