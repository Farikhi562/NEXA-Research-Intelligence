export type DocStatus = 'processed' | 'processing' | 'queued' | 'failed' | 'local'

export interface DocumentItem {
  id: string
  name: string
  type: 'PDF'
  sizeBytes: number
  uploadedAt: string // ISO
  status: DocStatus
  mock: boolean
}

export interface Collection {
  id: string
  name: string
  description: string
  docCount: number
  updatedAt: string
}

export interface ActivityItem {
  id: string
  at: string
  kind: 'upload' | 'index' | 'query' | 'collection' | 'error'
  message: string
  status: 'success' | 'running' | 'failed'
}
