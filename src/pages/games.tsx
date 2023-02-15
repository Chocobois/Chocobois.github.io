import { NavBar } from "../components/NavBar";
import { GameCard } from "../components/GameCard";

import games from '../data/games.json';

export default function Games() {
    return (<>
        <div>
            <h1 className="text-5xl">Games</h1>
            <NavBar />
            {games.map((game) => 
                <GameCard thumb={game.thumb} name={game.name} description={game.description} />
            )}
        </div>
    </>);
}
