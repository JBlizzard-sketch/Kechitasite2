import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { blog } from '../../lib/content'

export async function getStaticPaths(){ return { paths: blog.map(b=>({ params:{ slug: b.slug }})), fallback:false } }
export async function getStaticProps({ params }){ const post = blog.find(b=> b.slug===params.slug); return { props:{ post } } }

export default function Post({ post }){ return (
  <div>
    <Head><title>{post.title} — Kechita</title></Head>
    <Header />
    <main className="container py-12">
      <article className="prose lg:prose-xl">
        <h1>{post.title}</h1>
        <p className="text-sm text-slate-500">{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.excerpt + '<p>Read the full article in production.</p>' }} />
      </article>
    </main>
    <Footer />
  </div>
)}