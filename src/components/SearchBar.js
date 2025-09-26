import { useState } from 'react'

export default function SearchBar({ onSearch }){
  const [q, setQ] = useState('')
  return (
    <div className="flex gap-2">
      <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search products or services" className="p-2 border rounded flex-1"/>
      <button onClick={()=>onSearch(q)} className="bg-brand text-white px-3 rounded">Search</button>
    </div>
  )
}
