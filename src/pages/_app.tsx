import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import MDXProviderChoco from "@/components/mdx-provider-choco";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);
config.autoAddCss = false;

const MyApp: AppType = ({ Component, pageProps }) => {
  return (<>
    <Head>
      <link rel="shortcut icon" href="/favico.png" />
    </Head>
    <div className="text-stone-100 bg-stone-200 bg-opacity-10 container mx-auto p-8 rounded flex-1">
        <MDXProviderChoco>
          <Component {...pageProps} />
        </MDXProviderChoco>
    </div>
  </>);
};

export default MyApp;
