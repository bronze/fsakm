import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

import '@/styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

{
  /* <MyApp /> */
}
