import { useRouter } from "next/router";

export default function MdxImage({src, ...props}: JSX.IntrinsicElements["img"]) {
    const router = useRouter();
    return (<img src={`${router.asPath}/${src}`} {...props}></img>);
}
