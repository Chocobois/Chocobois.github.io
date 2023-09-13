import "@/styles/globals.css";
import "@/styles/chocoicon.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; 

import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import MDXProviderChoco from "@/components/mdx-provider-choco";
import { Title } from "@/components/head-title";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (<>
    <Title />
    <Head>
      <link rel="shortcut icon" href="/favico.png" />
    </Head>
    <div className="text-stone-100 bg-stone-200 bg-opacity-10 container mx-auto p-2 sm:p-2 md:p-8 rounded flex-1">
        <MDXProviderChoco>
          <Component {...pageProps} />
        </MDXProviderChoco>
    </div>
  </>);
};

export default MyApp;
