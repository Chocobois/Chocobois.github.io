import { useFullScreenHandle, FullScreenHandle } from "react-full-screen";

export function useFullScreenButton(): [FullScreenHandle, () => JSX.Element] {
    const handle = useFullScreenHandle();
    const button = () => (<button 
        onClick={handle.enter} 
        className="font-bold bg-green-600 hover:bg-green-500 rounded p-2 transition-colors">
            Fullscreen
    </button>);
    return [handle, button];
}
