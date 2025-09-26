import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { industries } from '../lib/content'

export default function Industries(){ return (
  <div>
    <Head><title>Industries — Kechita</title>
<meta name="description" content="Industries we serve including market vendors and boda boda riders." />
<meta property="og:title" content="Industries — Kechita" />
<meta property="og:description" content="Industries we serve including market vendors and boda boda riders." />
<meta property="og:image" content="/images/hero-large.svg" />
<link rel="icon" href="/favicon.svg" />
<link rel="manifest" href="/manifest.json" />

</Head>
    <Header />
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Industries we serve</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {industries.map((i,idx)=> <div key={idx} className="bg-white p-4 rounded shadow"><h3 className="font-semibold">{i}</h3></div>)}
      </div>
    </main>
    <Footer />
  </div>
)}