import Link from "next/link";

export default function About() {
    return (<>
        <div>
            <h1 className="text-5xl">About</h1>
            <div className="flex gap-8 text-blue-300 font-bold mt-4 mb-4">
                <Link href="/">Go back home</Link>
            </div>
        </div>
    </>);
}