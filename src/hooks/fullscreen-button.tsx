import { useFullScreenHandle, FullScreenHandle } from "react-full-screen";

export function useFullScreenButton(): [FullScreenHandle, () => JSX.Element] {
    const handle = useFullScreenHandle();
    const button = () => (<button 
        onClick={() => {
            handle.enter();
            screen.orientation.lock("landscape").catch(() => {});
        }}
        className="font-bold text-white bg-green-600 hover:bg-green-500 disabled:bg-slate-600 disabled:hover:bg-slate-500 disabled:cursor-not-allowed rounded px-4 py-2 transition-colors">
            <i className='fa-solid fa-expand pr-3' />
            Fullscreen
    </button>);
    return [handle, button];
}
