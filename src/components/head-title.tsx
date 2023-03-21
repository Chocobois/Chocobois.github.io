import Head from "next/head";

type TitleProps = {
    children?: string;
}

export const Title = ({children}: TitleProps) => {
    return <Head>
        <title>Chocobois{ children ? ` - ${children}` : ''}</title>
    </Head>
};