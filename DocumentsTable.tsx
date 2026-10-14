import { FileText } from 'lucide-react'
import type { DocumentItem } from '../types'
import { formatBytes, formatDate } from '../lib/format'
import { StatusBadge } from './ui/Badge'

export default function DocumentsTable({ docs }: { docs: DocumentItem[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-4 py-2.5 font-medium">Name</th>
            <th className="px-4 py-2.5 font-medium">Type</th>
            <th className="px-4 py-2.5 font-medium">Size</th>
            <th className="px-4 py-2.5 font-medium">Uploaded</th>
            <th className="px-4 py-2.5 font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {docs.map((d) => (
            <tr key={d.id} className="hover:bg-slate-50">
              <td className="px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <FileText className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
                  <span className="max-w-[18rem] truncate font-medium text-slate-900" title={d.name}>{d.name}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-slate-600">{d.type}</td>
              <td className="px-4 py-3 text-slate-600">{formatBytes(d.sizeBytes)}</td>
              <td className="px-4 py-3 text-slate-600">{formatDate(d.uploadedAt)}</td>
              <td className="px-4 py-3"><StatusBadge status={d.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
