export default function Hero({ title, subtitle }) {
  return (
    <section className="bg-gradient-to-r from-green-50 to-white py-16">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand">{title}</h1>
          <p className="mt-4 text-slate-600">{subtitle}</p>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="bg-brand text-white px-6 py-3 rounded-lg font-bold">Apply Now — Quick decision</a>
            <a href="/products" className="border border-brand text-brand px-5 py-3 rounded-lg">View Loan Options</a>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="bg-white p-4 rounded shadow"><h4 className="font-bold">4K+</h4><p className="text-sm text-slate-500">Borrowers supported</p></div>
            <div className="bg-white p-4 rounded shadow"><h4 className="font-bold">Instant</h4><p className="text-sm text-slate-500">Decision in minutes</p></div>
          </div>
        </div>
        <div><img src="/images/hero.jpg" alt="Market vendors" className="rounded-lg shadow"/></div>
      </div>
    </section>
  )
}
