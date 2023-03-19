import { MDXProvider } from '@mdx-js/react';
import { ReactNode } from 'react';
import img from './mdx/img';
import code from './mdx/code';
import pre from './mdx/pre';

type MDXProviderChocoProps = {
    children: ReactNode
}

export default function MDXProviderChoco({ children }: MDXProviderChocoProps) {
    return (<>
        <MDXProvider components={{ img, pre, code }}>
            {children}
        </MDXProvider>
    </>);
}
