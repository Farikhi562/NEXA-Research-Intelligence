import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { NAV } from './nav'

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-slate-900/50 lg:hidden" onClick={onClose} aria-hidden />}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-navy-900 text-slate-300 transition-transform lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}
        aria-label="Primary"
      >
        <div className="flex h-14 items-center justify-between border-b border-white/10 px-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-600 text-sm font-bold text-white">N</div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">NEXA</p>
              <p className="text-[11px] text-slate-400">Research Intelligence</p>
            </div>
          </div>
          <button onClick={onClose} className="rounded p-1 text-slate-400 hover:text-white lg:hidden" aria-label="Close navigation">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Workspace</p>
          <ul className="space-y-0.5">
            {NAV.slice(0, 4).map(({ to, label, icon: Icon, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} onClick={onClose} className={({ isActive }) => `flex items-center gap-3 rounded-md px-2.5 py-2 text-sm transition-colors ${isActive ? 'bg-navy-700 font-medium text-white shadow-[inset_3px_0_0_#0972d3]' : 'hover:bg-navy-800 hover:text-white'}`}>
                  <Icon className="h-4 w-4" aria-hidden />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="my-4 border-t border-white/10" />
          <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">System</p>
          <ul className="space-y-0.5">
            {NAV.slice(4).map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <NavLink to={to} onClick={onClose} className={({ isActive }) => `flex items-center gap-3 rounded-md px-2.5 py-2 text-sm transition-colors ${isActive ? 'bg-navy-700 font-medium text-white shadow-[inset_3px_0_0_#0972d3]' : 'hover:bg-navy-800 hover:text-white'}`}>
                  <Icon className="h-4 w-4" aria-hidden />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-white/10 px-4 py-3 text-[11px] text-slate-500">v0.1.0 · Frontend foundation</div>
      </aside>
    </>
  )
}
