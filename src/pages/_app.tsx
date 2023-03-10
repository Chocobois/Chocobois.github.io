import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import CustomMDXProvider from "@/components/CustomMDXProvider";

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (<>
    <Head>
      <link rel="shortcut icon" href="/favico.png" />
    </Head>
    <div className="text-stone-100 bg-stone-200 bg-opacity-10 container mx-auto p-8 rounded flex-1">
        <CustomMDXProvider>
          <Component {...pageProps} />
        </CustomMDXProvider>
    </div>
  </>);
};

export default MyApp;
