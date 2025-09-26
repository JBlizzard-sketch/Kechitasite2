import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ServiceGrid from '../components/ServiceGrid'
import ProductCard from '../components/ProductCard'
import { services, products, testimonials } from '../lib/content'
import Testimonial from '../components/Testimonial'

export default function Home(){
  return (
    <div>
      <Head><title>Kechita — Fast micro-loans for entrepreneurs</title>
<meta name="description" content="Kechita empowers small businesses with fast micro-loans, M-Pesa repayments, and business support." />
<meta property="og:title" content="Kechita — Fast micro-loans for entrepreneurs" />
<meta property="og:description" content="Kechita empowers small businesses with fast micro-loans, M-Pesa repayments, and business support." />
<meta property="og:image" content="/images/hero-large.svg" />
<link rel="icon" href="/favicon.svg" />
<link rel="manifest" href="/manifest.json" />

</Head>
      <Header />
      <Hero title="Fast micro-loans to grow your hustle" subtitle="Kechita empowers small businesses with quick capital, M-Pesa repayments, and business support." />
      <main className="container py-12">
        <section>
          <h2 className="text-2xl font-bold">Our services</h2>
          <ServiceGrid items={services} />
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Loan products</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {products.map(p=> <ProductCard key={p.id} p={p} />)}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Community stories</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {testimonials.map((t,idx)=> <Testimonial key={idx} t={t} />)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
