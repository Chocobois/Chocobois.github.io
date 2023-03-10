import { useState } from 'react';
import { FullScreen, FullScreenHandle } from "react-full-screen";

interface GameFrameProps {
    aspectRatio?: `${number}/${number}`
    source: string
    cover?: string
    className?: string
    fullscreenHandle?: FullScreenHandle
}

export const GameFrame = ({
        source,
        cover,
        aspectRatio = '16/9', 
        fullscreenHandle,
        className = ''
    }: GameFrameProps ) => {

    const [enabled, setEnabled] = useState(false);

    const iframe = <iframe src={source} className='h-full w-full'></iframe>;
    const gameFrame = (fullscreenHandle ? 
        <FullScreen className='h-full w-full' handle={fullscreenHandle}>{iframe}</FullScreen> : iframe
    );

    return (<>
        <div 
            className={`bg-slate-900 overflow-hidden relative flex justify-center items-center rounded ${className}`} 
            style={{aspectRatio: aspectRatio}}>
            {
                enabled ? 
                    gameFrame :
                    <>
                        {cover && <img src={cover} alt="Game banner" className='object-cover opacity-50 h-full'></img>}
                        <button 
                            className='absolute font-bold bg-orange-600 hover:bg-orange-500 rounded p-2 transition-colors' 
                            onClick={() => setEnabled(true)}>
                            Click to start
                        </button>
                    </>
            }
        </div>
    </>);
}