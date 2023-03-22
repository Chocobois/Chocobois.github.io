import bois from '#/bois.json';

const brandLookup = {
    twitter: {
        name: (at: string) => `Twitter: ${at}`,
        url: (at: string) => `https://twitter.com/${at}`,
        icon: () => <i className='fa-brands fa-twitter' />
    },
    kofi: {
        name: (at: string) => `Ko-fi: ${at}`,
        url: (at: string) => `https://ko-fi.com/${at}`,
        icon: () => <i className='fa-solid fa-mug-saucer' />,
    },
    patreon: {
        name: (at: string) => `Patreon: ${at}`,
        url: (at: string) => `https://www.patreon.com/${at}`,
        icon: () => <i className='fa-brands fa-patreon' />,
    },
    github: {
        name: (at: string) => `GitHub: ${at}`,
        url: (at: string) => `https://github.com/${at}`,
        icon: () => <i className='fa-brands fa-github' />,
    },
    soundcloud: {
        name: (at: string) => `SoundCloud: ${at}`,
        url: (at: string) => `https://soundcloud.com/${at}`,
        icon: () => <i className='fa-brands fa-soundcloud' />,
    },
    bandcamp: {
        name: (at: string) => `Bandcamp: ${at}`,
        url: (at: string) => `https://${at}.bandcamp.com/`,
        icon: () => <i className='fa-brands fa-bandcamp' />,
    },
}

const brand = (key: string) => brandLookup[key as keyof typeof brandLookup];

type ContributorProps = {
    who: string
    role?: string
}

type BoiProps = {
    display?: string
    socials?: keyof typeof brandLookup;
    globals?: string[]
}

function Contributor({who, role}: ContributorProps) {
    const {display, socials, globals} = (bois[who.toLowerCase() as keyof typeof bois] || {}) as BoiProps;
    return (<>
        <div className='flex justify-between flex-wrap items-center not-prose p-1 pl-2 pr-2 even:bg-black even:bg-opacity-20'>
            <p className="font-semibold text-xl flex items-center"><>{display || who}{role && <span className='text-xs text-slate-300'>&nbsp;{`- ${role}`}</span>}</></p>
            <div className='flex gap-2 justify-end flex-1'><>
                {globals && globals.map((url) => 
                    <a key={`${display}-${url}`} 
                    className="bg-slate-800 p-1 pl-2 pr-2 rounded hover:bg-slate-700 transition-colors aspect-square" 
                    title={url} href={url}><i className="fa-solid fa-globe"></i></a>
                )}
                {socials && Object.entries(socials).map(([key, value]) => 
                        <a key={`${key}-${value}`} 
                        className="bg-slate-800 p-1 pl-2 pr-2 rounded hover:bg-slate-700 transition-colors aspect-square" 
                        title={brand(key).name(value)} href={brand(key).url(value)}>
                            {brand(key).icon()}
                        </a>
                )}
            </></div>
        </div>
    </>);
}

type ContributorsProps = {
    color: string,
    contributors: string[]
    roles: any
}

export function Contributors({color, contributors, roles}: ContributorsProps) {
    return <div style={{backgroundColor: color}} className="text-white rounded mt-4">{
        contributors.map((name) => 
            <Contributor key={name} who={name} role={roles?.[name]}/>
        )
    }</div>
}
