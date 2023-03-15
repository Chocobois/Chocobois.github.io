import { readdirSync } from 'fs';

type Categories = 'articles' | 'games';

export function GetFromCategory(category: Categories) {
    return readdirSync(`./content/${category}`)
        .filter((file) => file.endsWith('mdx'))
        .map((name) => name.substring(0, name.length - 4));
}
