import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { products } from '../lib/content'

export default function Products(){ return (
  <div>
    <Head><title>Products — Kechita</title>
<meta name="description" content="Loan products tailored for micro-entrepreneurs." />
<meta property="og:title" content="Products — Kechita" />
<meta property="og:description" content="Loan products tailored for micro-entrepreneurs." />
<meta property="og:image" content="/images/hero-large.svg" />
<link rel="icon" href="/favicon.svg" />
<link rel="manifest" href="/manifest.json" />

</Head>
    <Header />
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Loan Products</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {products.map(p=> <ProductCard key={p.id} p={p} />)}
      </div>
    </main>
    <Footer />
  </div>
)}