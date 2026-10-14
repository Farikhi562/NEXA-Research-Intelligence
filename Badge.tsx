import type { ReactNode } from 'react'
import type { DocStatus } from '../../types'

type Tone = 'green' | 'blue' | 'amber' | 'red' | 'slate'
const TONES: Record<Tone, string> = {
  green: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  blue: 'bg-brand-50 text-brand-700 ring-brand-600/20',
  amber: 'bg-amber-50 text-amber-800 ring-amber-600/30',
  red: 'bg-red-50 text-red-700 ring-red-600/20',
  slate: 'bg-slate-100 text-slate-700 ring-slate-500/20',
}

export function Badge({ tone = 'slate', children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span className={`inline-flex items-center whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${TONES[tone]}`}>
      {children}
    </span>
  )
}

export function MockBadge() {
  return <Badge tone="amber">Mock data</Badge>
}

const STATUS_MAP: Record<DocStatus, { tone: Tone; label: string }> = {
  processed: { tone: 'green', label: 'Processed' },
  processing: { tone: 'blue', label: 'Processing' },
  queued: { tone: 'slate', label: 'Queued' },
  failed: { tone: 'red', label: 'Failed' },
  local: { tone: 'amber', label: 'Selected locally (not uploaded)' },
}

export function StatusBadge({ status }: { status: DocStatus }) {
  const s = STATUS_MAP[status]
  return <Badge tone={s.tone}>{s.label}</Badge>
}
