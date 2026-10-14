import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { BookOpen, MessageSquare, Send, TriangleAlert } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { PageHeader } from '../components/ui/PageHeader'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { EmptyState } from '../components/ui/EmptyState'

interface Msg { id: number; role: 'user' | 'system'; text: string }

export default function Chat() {
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [text, setText] = useState('')
  const endRef = useRef<HTMLDivElement>(null)
  useEffect(() => { endRef.current?.scrollIntoView({ block: 'end' }) }, [msgs])

  function send(e: FormEvent) {
    e.preventDefault()
    const t = text.trim()
    if (!t) return
    const id = Date.now()
    setMsgs((s) => [
      ...s,
      { id, role: 'user', text: t },
      { id: id + 1, role: 'system', text: 'The AI backend is not connected yet. Your question was not processed and no documents were searched.' },
    ])
    setText('')
  }

  return (
    <>
      <PageHeader title="AI Research Chat" description="Ask questions about your documents and get answers with page-level citations." actions={<Badge tone="amber">AI backend not connected</Badge>} />
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="flex min-h-[28rem] flex-col lg:col-span-2">
          <div className="flex-1 overflow-y-auto" aria-live="polite">
            {msgs.length === 0 ? (
              <EmptyState
                icon={MessageSquare}
                title="Start a research conversation"
                description="Once the backend is available: upload PDFs, wait for processing, then ask a question. Answers will cite the source document and page. For now, this interface is a preview only."
              />
            ) : (
              <ul className="space-y-3 p-4">
                {msgs.map((m) => (
                  <li key={m.id} className={m.role === 'user' ? 'flex justify-end' : 'flex'}>
                    {m.role === 'user' ? (
                      <p className="max-w-[85%] rounded-lg bg-brand-600 px-3.5 py-2 text-sm text-white">{m.text}</p>
                    ) : (
                      <p className="flex max-w-[85%] items-start gap-2 rounded-lg border border-amber-300 bg-amber-50 px-3.5 py-2 text-sm text-amber-900">
                        <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />{m.text}
                      </p>
                    )}
                  </li>
                ))}
                <div ref={endRef} />
              </ul>
            )}
          </div>
          <form onSubmit={send} className="flex gap-2 border-t border-slate-200 p-3">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Ask a question about your documents…"
              aria-label="Your question"
              className="min-w-0 flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
            <Button type="submit" disabled={!text.trim()}><Send className="h-4 w-4" aria-hidden /><span className="hidden sm:inline">Send</span></Button>
          </form>
        </Card>
        <Card title="Sources">
          <EmptyState icon={BookOpen} title="No sources yet" description="Cited passages with document names and page numbers will appear here after retrieval is implemented." />
        </Card>
      </div>
    </>
  )
}
