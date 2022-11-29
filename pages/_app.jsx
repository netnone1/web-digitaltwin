import '../styles/globals.css'

// Components
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

// Font
import { Prompt } from '@next/font/google'
const prompt = Prompt({ weight: '200', subsets: ['prompt'] })

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={prompt.className}>
      <Header />
        <div className='m-3'>
          <Component {...pageProps} />
        </div>
      <Footer />
    </main>

  )
}