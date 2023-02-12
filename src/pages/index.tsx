import { useFullScreenButton } from "../hooks/useFullscreenButton";
import { GameFrame } from "../components/GameFrame";
import { NavBar } from "../components/NavBar";

export default function Home() {
    const [handle, FullScreenButton] = useFullScreenButton();

    return (<>
        <h1 className="text-5xl">Chocobois</h1>
        <NavBar />
        <GameFrame
            fullscreenHandle={handle}
            source="uprooting" 
            className="drop-shadow-lg"
            cover="https://github.com/Chocobois/uprooting/blob/main/screenshots/final/0%20rerooted%20but%20before%20the%20title.png?raw=true"
        />
        <FullScreenButton />
    </>);
}