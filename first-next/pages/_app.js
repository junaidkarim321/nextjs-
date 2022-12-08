import '../styles/globals.css'
import Navbar from './componetes/Nvabar'
function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />

  </>
}

export default MyApp
