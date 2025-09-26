export default function Testimonial({ t }){
  return (
    <blockquote className="bg-white p-4 rounded shadow">
      <p className="italic">"{t.quote}"</p>
      <footer className="mt-2"><strong>{t.name}</strong> — <span className="text-sm text-slate-500">{t.title}</span></footer>
    </blockquote>
  )
}
