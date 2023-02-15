interface GameCardProps {
    thumb: string,
    name: string,
    description: string
}

export function GameCard({thumb, name, description}: GameCardProps) {
    return (<>
        <div className='flex flex-col w-64 p-2 rounded bg-orange-700'>
            <div>
                <img src={thumb} />
            </div>
            <div>
                <p className='font-bold'>{name}</p>
                <p>{description}</p>
            </div>
        </div>
    </>);
}