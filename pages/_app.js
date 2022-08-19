import '../styles/globals.css'
import '@aws-amplify/ui-react/styles.css'
import { SessionProvider } from "next-auth/react";

export default function MyApp({Component, pageProps: {session, ...pageProps}}) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return <SessionProvider session={session}>getLayout(<Component {...pageProps} />)</SessionProvider>
}