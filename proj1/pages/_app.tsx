import '../styles/globals.css'

// wrapper around every other page.
// useful for header, footer, auth and states etc

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
