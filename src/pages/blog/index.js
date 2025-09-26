import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { blog } from '../../lib/content'

export default function Blog(){ return (
  <div>
    <Head><title>Blog — Kechita</title></Head>
    <Header />
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Kechita Blog</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {blog.map(b=> (
          <article key={b.slug} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold"><Link href={'/blog/'+b.slug}><a>{b.title}</a></Link></h3>
            <p className="text-sm text-slate-500 mt-2">{b.date}</p>
            <p className="mt-2 text-sm text-slate-600">{b.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
    <Footer />
  </div>
)}