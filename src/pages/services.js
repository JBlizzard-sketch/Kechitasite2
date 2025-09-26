import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ServiceGrid from '../components/ServiceGrid'
import { services } from '../lib/content'

export default function Services(){ return (
  <div>
    <Head><title>Services — Kechita</title>
<meta name="description" content="Our services for small businesses." />
<meta property="og:title" content="Services — Kechita" />
<meta property="og:description" content="Our services for small businesses." />
<meta property="og:image" content="/images/hero-large.svg" />
<link rel="icon" href="/favicon.svg" />
<link rel="manifest" href="/manifest.json" />

</Head>
    <Header />
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <ServiceGrid items={services} />
    </main>
    <Footer />
  </div>
)}