export default function ProductCard({ p }){
  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h3 className="font-semibold">{p.title}</h3>
      <p className="text-sm text-slate-600 mt-2"><strong>{p.duration}</strong> — {p.desc}</p>
      <div className="mt-3"><a href="/contact" className="text-green-700 font-semibold">Apply</a></div>
    </div>
  )
}
