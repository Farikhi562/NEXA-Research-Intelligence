import { Card } from '../components/ui/Card'
import { PageHeader } from '../components/ui/PageHeader'
import { Badge } from '../components/ui/Badge'

const FIELDS = ['LLM provider', 'LLM model', 'Embedding provider', 'Embedding model']

export default function Settings() {
  return (
    <>
      <PageHeader title="Settings" description="Application and AI provider configuration." />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="AI provider" action={<Badge tone="amber">Not connected</Badge>}>
          <div className="space-y-4 p-4">
            {FIELDS.map((f) => (
              <label key={f} className="block text-sm">
                <span className="mb-1 block font-medium text-slate-700">{f}</span>
                <input disabled value="Not configured" readOnly className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-slate-500" />
              </label>
            ))}
            <p className="text-xs text-slate-500">
              API keys are never entered or stored in the browser. They will be read from the backend <code className="rounded bg-slate-100 px-1">.env</code> file (see <code className="rounded bg-slate-100 px-1">.env.example</code>) starting in Phase 3.
            </p>
          </div>
        </Card>
        <Card title="Application">
          <dl className="divide-y divide-slate-100 text-sm">
            {[['Version', '0.1.0 (frontend foundation)'], ['Theme', 'Light (only option for now)'], ['Backend API', 'Not implemented'], ['Authentication', 'Not implemented']].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 px-4 py-3">
                <dt className="text-slate-600">{k}</dt>
                <dd className="text-right font-medium text-slate-900">{v}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </div>
    </>
  )
}
