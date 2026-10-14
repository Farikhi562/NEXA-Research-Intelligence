import { FlaskConical } from 'lucide-react'

export function MockBanner({ children }: { children?: string }) {
  return (
    <div className="mb-6 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      <FlaskConical className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <p>{children ?? 'Demonstration data. Nothing on this page comes from a real backend yet.'}</p>
    </div>
  )
}
