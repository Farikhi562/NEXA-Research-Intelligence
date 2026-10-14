import { useRef, useState } from 'react'
import type { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FileSearch, Upload } from 'lucide-react'
import { MOCK_DOCUMENTS } from '../data/mock'
import type { DocStatus, DocumentItem } from '../types'
import { Card } from '../components/ui/Card'
import { PageHeader } from '../components/ui/PageHeader'
import { Button } from '../components/ui/Button'
import { EmptyState } from '../components/ui/EmptyState'
import { MockBanner } from '../components/ui/MockBanner'
import { useToast } from '../components/ui/Toast'
import DocumentsTable from '../components/DocumentsTable'

const MAX_BYTES = 50 * 1024 * 1024

export default function Documents() {
  const toast = useToast()
  const fileRef = useRef<HTMLInputElement>(null)
  const [params, setParams] = useSearchParams()
  const q = params.get('q') ?? ''
  const [status, setStatus] = useState<'all' | DocStatus>('all')
  const [docs, setDocs] = useState<DocumentItem[]>(MOCK_DOCUMENTS)

  const filtered = docs.filter(
    (d) => d.name.toLowerCase().includes(q.toLowerCase()) && (status === 'all' || d.status === status),
  )

  function onPick(e: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? [])
    e.target.value = ''
    const added: DocumentItem[] = []
    for (const f of files) {
      const isPdf = f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf')
      if (!isPdf) { toast('error', `"${f.name}" was rejected: only PDF files are supported.`); continue }
      if (f.size > MAX_BYTES) { toast('error', `"${f.name}" exceeds the 50 MB limit.`); continue }
      added.push({ id: `local-${Date.now()}-${f.name}`, name: f.name, type: 'PDF', sizeBytes: f.size, uploadedAt: new Date().toISOString(), status: 'local', mock: false })
    }
    if (added.length) {
      setDocs((s) => [...added, ...s])
      toast('info', `${added.length} PDF(s) selected. Backend processing is not available yet, so nothing was uploaded or indexed.`)
    }
  }

  return (
    <>
      <PageHeader
        title="Documents"
        description="Manage the PDFs in your research library."
        actions={
          <>
            <input ref={fileRef} type="file" accept="application/pdf,.pdf" multiple className="hidden" onChange={onPick} />
            <Button onClick={() => fileRef.current?.click()}><Upload className="h-4 w-4" aria-hidden />Upload Document</Button>
          </>
        }
      />
      <MockBanner>Listed documents are demo data. Files you select stay in this browser tab only and are not sent anywhere.</MockBanner>
      <Card>
        <div className="flex flex-col gap-3 border-b border-slate-200 p-4 sm:flex-row">
          <input
            value={q}
            onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {})}
            placeholder="Search by name…"
            aria-label="Search documents by name"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm sm:max-w-xs"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as 'all' | DocStatus)}
            aria-label="Filter by status"
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            <option value="all">All statuses</option>
            <option value="processed">Processed</option>
            <option value="processing">Processing</option>
            <option value="queued">Queued</option>
            <option value="failed">Failed</option>
            <option value="local">Selected locally</option>
          </select>
        </div>
        {filtered.length ? (
          <DocumentsTable docs={filtered} />
        ) : (
          <EmptyState
            icon={FileSearch}
            title="No documents found"
            description="No documents match your search or filter. Clear the filters, or upload a PDF to get started."
            action={<Button variant="secondary" onClick={() => { setParams({}); setStatus('all') }}>Clear filters</Button>}
          />
        )}
      </Card>
    </>
  )
}
