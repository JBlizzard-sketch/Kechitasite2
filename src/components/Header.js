import Link from 'next/link'

export default function Header(){ return (
  <header className="bg-white shadow sticky top-0 z-50">
    <div className="container flex items-center justify-between py-4">
      <Link href="/"><a className="flex items-center gap-3"><img src="/images/logo.svg" alt="Kechita logo" className="h-10"/><span className="font-bold text-lg text-brand">Kechita</span></a></Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/services"><a className="hover:text-brand">Services</a></Link>
        <Link href="/products"><a className="hover:text-brand">Products</a></Link>
        <Link href="/industries"><a className="hover:text-brand">Industries</a></Link>
        <Link href="/blog"><a className="hover:text-brand">Blog</a></Link>
        <Link href="/contact"><a className="bg-brand text-white px-4 py-2 rounded">Get a Quote</a></Link>
      </nav>
    </div>
  </header>
)}