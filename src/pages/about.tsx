import { Title } from "@/components/head-title";
import { NavBar } from "@/components/nav-bar";

export default function About() {
    return (<>
        <Title>The bois</Title>
        <div>
            <h1 className="text-5xl">About</h1>
            <NavBar />
            <p className="">Chocobois is a group of many creative individuals who all work together to make games for gamejams.</p>
            <p>Add some info about the teams history here pls.</p>
        </div>
    </>);
}