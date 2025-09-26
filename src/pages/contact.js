import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){ return (
  <div>
    <Head><title>Contact — Kechita</title>
<meta name="description" content="Contact Kechita for loan applications and support." />
<meta property="og:title" content="Contact — Kechita" />
<meta property="og:description" content="Contact Kechita for loan applications and support." />
<meta property="og:image" content="/images/hero-large.svg" />
<link rel="icon" href="/favicon.svg" />
<link rel="manifest" href="/manifest.json" />

</Head>
    <Header />
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Contact & Apply</h1>
      <form name="loan-request" method="POST" data-netlify="true" action="/.netlify/functions/submit-to-supabase" netlify-honeypot="bot-field" className="mt-6 bg-white p-6 rounded shadow">
        <input type="hidden" name="form-name" value="loan-request" />
        <p style={{display:'none'}}><label>Don't fill this out: <input name="bot-field" /></label></p>
        <div className="grid md:grid-cols-2 gap-4">
          <input name="name" placeholder="Full name" required className="p-3 border rounded" />
          <input name="phone" placeholder="Phone / M-Pesa" required className="p-3 border rounded" />
          <select name="product" className="p-3 border rounded">
            <option value="">Choose loan product</option>
            <option value="boresha">Boresha Biashara</option>
            <option value="inua">Inua Biashara</option>
          </select>
          <input name="town" placeholder="Town / Area" className="p-3 border rounded" />
        </div>
        <textarea name="message" placeholder="Tell us about your needs" className="w-full p-3 border rounded mt-4" rows="4"></textarea>
        <div className="mt-4 flex gap-3">
          <button className="bg-brand text-white px-6 py-2 rounded" type="submit">Submit request</button>
          <a href="tel:+254700000000" className="text-slate-700 self-center">Call us: +254 700 000 000</a>
        </div>
      </form>
    </main>
    <Footer />
  </div>
)}