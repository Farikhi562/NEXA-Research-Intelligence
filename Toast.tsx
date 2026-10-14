import { createContext, useCallback, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { AlertCircle, CheckCircle2, Info } from 'lucide-react'

type Kind = 'success' | 'error' | 'info'
interface ToastItem { id: number; kind: Kind; message: string }
const Ctx = createContext<(kind: Kind, message: string) => void>(() => {})

export const useToast = () => useContext(Ctx)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([])
  const push = useCallback((kind: Kind, message: string) => {
    const id = Date.now() + Math.random()
    setItems((s) => [...s, { id, kind, message }])
    setTimeout(() => setItems((s) => s.filter((t) => t.id !== id)), 5000)
  }, [])
  const ICON = { success: CheckCircle2, error: AlertCircle, info: Info }
  const COLOR = { success: 'text-emerald-600', error: 'text-red-600', info: 'text-brand-600' }
  return (
    <Ctx.Provider value={push}>
      {children}
      <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex w-[calc(100%-2rem)] max-w-sm flex-col gap-2" role="status" aria-live="polite">
        {items.map((t) => {
          const Icon = ICON[t.kind]
          return (
            <div key={t.id} className="pointer-events-auto flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-lg">
              <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${COLOR[t.kind]}`} aria-hidden />
              <p className="text-sm text-slate-800">{t.message}</p>
            </div>
          )
        })}
      </div>
    </Ctx.Provider>
  )
}
