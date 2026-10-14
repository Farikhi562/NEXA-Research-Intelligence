import { MOCK_ACTIVITY } from '../data/mock'
import { Card } from '../components/ui/Card'
import { PageHeader } from '../components/ui/PageHeader'
import { Badge, MockBadge } from '../components/ui/Badge'
import { MockBanner } from '../components/ui/MockBanner'
import { formatDateTime } from '../lib/format'

const TONE = { success: 'green', running: 'blue', failed: 'red' } as const

export default function ActivityLogs() {
  return (
    <>
      <PageHeader title="Activity Logs" description="Timeline of uploads, indexing jobs, and research queries." />
      <MockBanner>These entries are demonstration data, not real system logs. Real logs will be recorded by the backend.</MockBanner>
      <Card title="Recent activity" action={<MockBadge />}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-2.5 font-medium">Time</th>
                <th className="px-4 py-2.5 font-medium">Type</th>
                <th className="px-4 py-2.5 font-medium">Event</th>
                <th className="px-4 py-2.5 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_ACTIVITY.map((a) => (
                <tr key={a.id} className="hover:bg-slate-50">
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600">{formatDateTime(a.at)}</td>
                  <td className="px-4 py-3 capitalize text-slate-600">{a.kind}</td>
                  <td className="px-4 py-3 text-slate-900">{a.message}</td>
                  <td className="px-4 py-3"><Badge tone={TONE[a.status]}>{a.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  )
}
