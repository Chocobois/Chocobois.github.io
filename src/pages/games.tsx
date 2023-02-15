import { NavBar } from "../components/NavBar";
import { GameCard } from "../components/GameCard";

import games from '../data/games.json';

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
        </div>
    </>);
}
