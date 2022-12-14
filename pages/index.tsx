import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Sidebar */}
        <Sidebar />
        {/* Center */}
      </main>
      <footer>{/* Player */}</footer>
    </div>
  )
}

export default Home
