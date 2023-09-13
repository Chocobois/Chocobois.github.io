import bois from '#/bois.json';

const brandLookup = {
    twitter: {
        name: (at: string) => `Twitter: ${at}`,
        color: () => "#21A6FF",
        url: (at: string) => `https://twitter.com/${at}`,
        icon: () => <i className='fa-brands fa-twitter' />
    },
    kofi: {
        name: (at: string) => `Ko-fi: ${at}`,
        color: () => "#FF5E5B",
        url: (at: string) => `https://ko-fi.com/${at}`,
        icon: () => <i className='icon-kofi' />,
    },
    patreon: {
        name: (at: string) => `Patreon: ${at}`,
        color: () => "#FF424D",
        url: (at: string) => `https://www.patreon.com/${at}`,
        icon: () => <i className='fa-brands fa-patreon' />,
    },
    github: {
        name: (at: string) => `GitHub: ${at}`,
        color: () => "#AB3DD3",
        url: (at: string) => `https://github.com/${at}`,
        icon: () => <i className='fa-brands fa-github' />,
    },
    soundcloud: {
        name: (at: string) => `SoundCloud: ${at}`,
        color: () => "#FF3300",
        url: (at: string) => `https://soundcloud.com/${at}`,
        icon: () => <i className='fa-brands fa-soundcloud' />,
    },
    bandcamp: {
        name: (at: string) => `Bandcamp: ${at}`,
        color: () => "#3399B2",
        url: (at: string) => `https://${at}.bandcamp.com/`,
        icon: () => <i className='icon-bandcamp' />,
    },
    itch: {
        name: (at: string) => `Itch: ${at}`,
        color: () => "#FA5C5C",
        url: (at: string) => `https://${at}.itch.io/`,
        icon: () => <i className='fa-brands fa-itch-io' />,
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
    const {display, socials, globals} = (bois[who.toLowerCase() as keyof typeof bois] || {}) as unknown as BoiProps;
    return (<>
        <div className='flex justify-between flex-wrap items-center not-prose p-1 pl-2 pr-2 even:bg-black even:bg-opacity-20'>
            <p className="font-semibold text-xl flex items-center"><>{display || who}{role && <span className='text-xs text-white/70 translate-y-0.5'>&nbsp;{`– ${role}`}</span>}</></p>
            <div className='flex gap-2 justify-end flex-1'><>
                {globals && globals.map((url) => 
                    <a key={`${display}-${url}`} 
                    className="bg-slate-800 rounded hover:bg-slate-700 active:translate-y-px transition-colors aspect-square h-9 grid place-items-center brand-button" 
                    title={url} href={url}><i className="fa-solid fa-globe"></i></a>
                )}
                {socials && Object.entries(socials).map(([key, value]) => 
                        <a key={`${key}-${value}`} 
                        className="bg-slate-800 rounded hover:bg-slate-700 active:translate-y-px transition-colors aspect-square h-9 grid place-items-center brand-button" 
                        title={brand(key).name(value)} href={brand(key).url(value)} style={{["--brandColor" as any]: brand(key).color()}}>
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
