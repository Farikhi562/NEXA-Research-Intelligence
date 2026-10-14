import { useState } from 'react'
import type { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search } from 'lucide-react'
import { NAV } from './nav'
import { Badge } from '../ui/Badge'

export default function Topbar({ onMenu }: { onMenu: () => void }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [q, setQ] = useState('')
  const current = NAV.find((n) => (n.to === '/' ? pathname === '/' : pathname.startsWith(n.to)))

  function submit(e: FormEvent) {
    e.preventDefault()
    const v = q.trim()
    navigate(v ? `/documents?q=${encodeURIComponent(v)}` : '/documents')
  }

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-slate-200 bg-white px-4 sm:px-6">
      <button onClick={onMenu} className="rounded p-1.5 text-slate-600 hover:bg-slate-100 lg:hidden" aria-label="Open navigation">
        <Menu className="h-5 w-5" />
      </button>
      <nav aria-label="Breadcrumb" className="hidden min-w-0 items-center gap-1.5 text-sm sm:flex">
        <span className="text-slate-500">NEXA</span>
        <span className="text-slate-300">/</span>
        <span className="truncate font-medium text-slate-900">{current?.label ?? 'Overview'}</span>
      </nav>
      <form onSubmit={submit} role="search" className="relative ml-auto w-full max-w-xs sm:max-w-sm">
        <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search documents…"
          aria-label="Search documents"
          className="w-full rounded-md border border-slate-300 bg-slate-50 py-1.5 pl-8 pr-3 text-sm placeholder:text-slate-400"
        />
      </form>
      <div className="hidden md:block">
        <Badge tone="amber">Backend not connected</Badge>
      </div>
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-800 text-xs font-semibold text-white" title="Demo user (no authentication yet)">
        DU
      </div>
    </header>
  )
}
