import {AppProps} from "next/app";
import {Inter} from "next/font/google";
import {ReactNode} from "react";

import "@/styles/global.css";

const inter = Inter({subsets: ["latin"]});

type Props = AppProps & {
  Component: {getLayout?(page: ReactNode): ReactNode};
};

export default function App({Component, pageProps}: Props) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return <div className={inter.className}>{getLayout(<Component {...pageProps} />)}</div>;
}
