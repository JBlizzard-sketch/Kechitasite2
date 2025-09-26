export default function ServiceGrid({ items }){
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      {items.map(s=> <div key={s.id} className="bg-white p-4 rounded shadow"><h3 className="font-semibold">{s.title}</h3><p className="text-sm text-slate-600 mt-2">{s.desc}</p></div>)}
    </div>
  )
}
