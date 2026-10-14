import { useState } from 'react'
import { FolderOpen, FolderSearch } from 'lucide-react'
import { MOCK_COLLECTIONS } from '../data/mock'
import { Card } from '../components/ui/Card'
import { PageHeader } from '../components/ui/PageHeader'
import { MockBadge } from '../components/ui/Badge'
import { EmptyState } from '../components/ui/EmptyState'
import { MockBanner } from '../components/ui/MockBanner'
import { formatDate } from '../lib/format'

export default function Collections() {
  const [q, setQ] = useState('')
  const list = MOCK_COLLECTIONS.filter((c) => `${c.name} ${c.description}`.toLowerCase().includes(q.toLowerCase()))
  return (
    <>
      <PageHeader title="Collections" description="Group related documents into research collections." />
      <MockBanner>Collections are demo data. Creating and editing collections arrives with the backend.</MockBanner>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search collections…"
        aria-label="Search collections"
        className="mb-4 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm sm:max-w-xs"
      />
      {list.length ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((c) => (
            <Card key={c.id}>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-50 text-brand-600"><FolderOpen className="h-5 w-5" aria-hidden /></div>
                  <MockBadge />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">{c.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{c.description}</p>
                <p className="mt-3 text-xs text-slate-500">{c.docCount} documents · Updated {formatDate(c.updatedAt)}</p>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card><EmptyState icon={FolderSearch} title="No collections found" description="No collection matches your search." /></Card>
      )}
    </>
  )
}
