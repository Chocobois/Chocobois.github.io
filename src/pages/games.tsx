import { NavBar } from "@/components/NavBar";
import { GameCard } from "@/components/GameCard";
import { GetFromCategory } from "@/util/content-lister";
import { SyncPublicDirectory } from "@/util/copy-images";
import { nanoid } from "nanoid";

type GamesProps = {
    games: {
        name: string
        date: string
        description: string
        thumb: string
        source: string
        cover: string
        id: string
        href: string
        color: string
    }[]
}

export default function Games({ games }: GamesProps) {
    return (<>
        <div>
            <h1 className="text-5xl">Games</h1>
            <NavBar />
            <div className="flex flex-wrap gap-8">
                {games.map((game) => 
                    <GameCard key={game.id} game={game} />
                )}
            </div>
        </div>
    </>);
}

export const getStaticProps = async () => {
    const files = GetFromCategory('games');
    await SyncPublicDirectory('games', files);

    const modules = await Promise.all(
        files.map((file) => import(`#/games/${file}.mdx`))
    );

    const games = modules.map(({meta}, index) => {
        const {name, date, description, thumb, source, cover, color} = meta;
        return {
            name, date, description, thumb, source, cover, color,
            id: nanoid(),
            href: files[index] as string
        }
    }).sort((a, b) => a.date > b.date ? -1 : 1);

    return {
        props: {
            games
        }
    }
}