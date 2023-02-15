import { useFullScreenButton } from "../hooks/useFullscreenButton";
import { GameFrame } from "../components/GameFrame";
import { NavBar } from "../components/NavBar";

export default function Home() {

    return (<>
        <h1 className="text-5xl">Chocobois</h1>
        <NavBar />
    </>);
}