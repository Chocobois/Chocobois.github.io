import {copy, emptyDirSync} from 'fs-extra';

export function SyncPublicDirectory(dir: string, paths: string[]) {
    emptyDirSync(`./public/${dir}/`);
    return Promise.allSettled(paths.map((path) => 
        copy(`./content/${dir}/${path}`, `./public/${dir}/${path}`)
    ));
}