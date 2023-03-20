import bois from '#/bois.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ContributorProps = {
    who: string
}

const brandLookup = {
    twitter: {
        name: (at: string) => `Twitter: ${at}`,
        url: (at: string) => `https://twitter.com/${at}`,
        icon: () => <FontAwesomeIcon icon={["fab", "twitter"]} />
    },
    kofi: {
        name: (at: string) => `Ko-fi: ${at}`,
        url: (at: string) => `https://ko-fi.com/${at}`,
        icon: () => <FontAwesomeIcon icon="mug-saucer" />,
    },
    patreon: {
        name: (at: string) => `Patreon: ${at}`,
        url: (at: string) => `https://www.patreon.com/${at}`,
        icon: () => <FontAwesomeIcon icon={["fab", "patreon"]} />,
    },
    github: {
        name: (at: string) => `GitHub: ${at}`,
        url: (at: string) => `https://github.com/${at}`,
        icon: () => <FontAwesomeIcon icon={["fab", "github"]} />,
    },
    soundcloud: {
        name: (at: string) => `SoundCloud: ${at}`,
        url: (at: string) => `https://soundcloud.com/${at}`,
        icon: () => <FontAwesomeIcon icon={["fab", "soundcloud"]} />,
    },
    bandcamp: {
        name: (at: string) => `Bandcamp: ${at}`,
        url: (at: string) => `https://${at}.bandcamp.com/`,
        icon: () => <FontAwesomeIcon icon={["fab", "bandcamp"]} />,
    },
}

const brand = (key: string) => brandLookup[key as keyof typeof brandLookup];

export function Contributor({who}: ContributorProps) {
    const boi = bois[who.toLowerCase() as keyof typeof bois] || {};

    const social = boi.socials && Object.entries(boi.socials).map(([key, value]) => 
        <a key={`${key}-${value}`} className="bg-slate-800 p-1 pl-2 pr-2 rounded hover:bg-slate-700 transition-colors" title={brand(key).name(value)} href={brand(key).url(value)}>
            {brand(key).icon()} {value}
        </a>
    );

    return (<>
        <div className='flex justify-between items-center not-prose p-1 pl-2 pr-2'>
            <p className="font-semibold text-xl">{boi.display || who}</p>
            <div className='flex justify-between gap-2'>{social}</div>
        </div>
    </>);
}
