import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About(){ return (
  <div>
    <Head><title>About Kechita</title>
<meta name="description" content="About Kechita and our mission." />
<meta property="og:title" content="About Kechita" />
<meta property="og:description" content="About Kechita and our mission." />
<meta property="og:image" content="/images/hero-large.svg" />
<link rel="icon" href="/favicon.svg" />
<link rel="manifest" href="/manifest.json" />

</Head>
    <Header />
    <main className="container py-12">
      <h1 className="text-3xl font-bold">About Kechita</h1>
      <p className="mt-4 text-slate-600">Kechita was born to make small, responsible capital available to market vendors, boda boda riders, artisans and small retailers. We combine quick loan decisions with mobile money repayment and practical business advice.</p>
    </main>
    <Footer />
  </div>
)}