import bois from '#/bois.json';

type ContributorProps = {
    who: string
}

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

export function Contributor({who}: ContributorProps) {
    const boi = bois[who.toLowerCase() as keyof typeof bois] || {};

    return (<>
        <div className='flex justify-between flex-wrap items-center not-prose p-1 pl-2 pr-2 even:bg-black even:bg-opacity-20'>
            <p className="font-semibold text-xl">{boi.display || who}<wbr /></p>
            <div className='flex gap-2 justify-end flex-1'>{
            boi.socials && Object.entries(boi.socials).map(([key, value]) => 
                <a key={`${key}-${value}`} className="bg-slate-800 p-1 pl-2 pr-2 rounded hover:bg-slate-700 transition-colors" title={brand(key).name(value)} href={brand(key).url(value)}>
                    {brand(key).icon()}
                </a>
            )}</div>
        </div>
    </>);
}
