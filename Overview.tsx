import { CheckCircle2, FileText, FolderOpen, MessageSquare, Upload } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { MOCK_ACTIVITY, MOCK_COLLECTIONS, MOCK_DOCUMENTS, MOCK_QUERY_COUNT } from '../data/mock'
import { Card } from '../components/ui/Card'
import { PageHeader } from '../components/ui/PageHeader'
import { MockBadge } from '../components/ui/Badge'
import { LinkButton } from '../components/ui/Button'
import { MockBanner } from '../components/ui/MockBanner'
import DocumentsTable from '../components/DocumentsTable'
import { formatDateTime } from '../lib/format'
import type { DocStatus } from '../types'

function Metric({ label, value, icon: Icon }: { label: string; value: number; icon: LucideIcon }) {
  return (
    <Card>
      <div className="flex items-center justify-between p-4">
        <div>
          <p className="text-sm text-slate-600">{label}</p>
          <p className="mt-1 text-3xl font-semibold tabular-nums text-slate-900">{value}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-50 text-brand-600">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
      </div>
    </Card>
  )
}

const STAGES: { status: DocStatus; label: string; bar: string }[] = [
  { status: 'processed', label: 'Processed', bar: 'bg-emerald-500' },
  { status: 'processing', label: 'Processing', bar: 'bg-brand-600' },
  { status: 'queued', label: 'Queued', bar: 'bg-slate-400' },
  { status: 'failed', label: 'Failed', bar: 'bg-red-500' },
]

export default function Overview() {
  const docs = MOCK_DOCUMENTS
  const processed = docs.filter((d) => d.status === 'processed').length
  const recent = [...docs].sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt)).slice(0, 5)

  return (
    <>
      <PageHeader
        title="Overview"
        description="NEXA Research Intelligence lets you upload PDFs, organize research collections, and ask questions answered with verifiable page citations."
        actions={
          <>
            <LinkButton to="/documents" variant="secondary"><Upload className="h-4 w-4" aria-hidden />Upload Document</LinkButton>
            <LinkButton to="/chat"><MessageSquare className="h-4 w-4" aria-hidden />Start Research</LinkButton>
          </>
        }
      />
      <MockBanner>Demo data: all figures below are illustrative. The backend (upload, indexing, RAG) is not implemented yet.</MockBanner>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Metric label="Total Documents" value={docs.length} icon={FileText} />
        <Metric label="Processed Documents" value={processed} icon={CheckCircle2} />
        <Metric label="Collections" value={MOCK_COLLECTIONS.length} icon={FolderOpen} />
        <Metric label="Research Queries" value={MOCK_QUERY_COUNT} icon={MessageSquare} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2" title="Recent Documents" action={<MockBadge />}>
          <DocumentsTable docs={recent} />
        </Card>
        <Card title="Document Processing Overview" action={<MockBadge />}>
          <ul className="space-y-4 p-4">
            {STAGES.map((s) => {
              const n = docs.filter((d) => d.status === s.status).length
              return (
                <li key={s.status}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-slate-700">{s.label}</span>
                    <span className="font-medium tabular-nums text-slate-900">{n}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className={`h-2 rounded-full ${s.bar}`} style={{ width: `${(n / docs.length) * 100}%` }} />
                  </div>
                </li>
              )
            })}
          </ul>
        </Card>
      </div>

      <Card className="mt-6" title="Recent Activity" action={<MockBadge />}>
        <ul className="divide-y divide-slate-100">
          {MOCK_ACTIVITY.slice(0, 5).map((a) => (
            <li key={a.id} className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
              <span className="min-w-0 truncate text-slate-800">{a.message}</span>
              <span className="shrink-0 text-xs text-slate-500">{formatDateTime(a.at)}</span>
            </li>
          ))}
        </ul>
      </Card>
    </>
  )
}
