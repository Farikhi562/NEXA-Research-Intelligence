// MOCK DATA — demonstration only. Replace with API calls once the backend exists (Phase 3+).
import type { ActivityItem, Collection, DocumentItem } from '../types'

export const MOCK_DOCUMENTS: DocumentItem[] = [
  { id: 'd1', name: 'transformer-architectures-survey.pdf', type: 'PDF', sizeBytes: 4_820_000, uploadedAt: '2026-10-12T09:14:00Z', status: 'processed', mock: true },
  { id: 'd2', name: 'rag-evaluation-benchmarks.pdf', type: 'PDF', sizeBytes: 2_310_000, uploadedAt: '2026-10-11T14:02:00Z', status: 'processed', mock: true },
  { id: 'd3', name: 'vector-databases-comparison.pdf', type: 'PDF', sizeBytes: 1_740_000, uploadedAt: '2026-10-10T08:41:00Z', status: 'processing', mock: true },
  { id: 'd4', name: 'flood-management-jakarta-bkt.pdf', type: 'PDF', sizeBytes: 6_950_000, uploadedAt: '2026-10-09T16:30:00Z', status: 'processed', mock: true },
  { id: 'd5', name: 'prompt-engineering-guide.pdf', type: 'PDF', sizeBytes: 980_000, uploadedAt: '2026-10-08T11:20:00Z', status: 'queued', mock: true },
  { id: 'd6', name: 'scanned-lecture-notes.pdf', type: 'PDF', sizeBytes: 12_400_000, uploadedAt: '2026-10-07T19:05:00Z', status: 'failed', mock: true },
  { id: 'd7', name: 'llm-agents-overview.pdf', type: 'PDF', sizeBytes: 3_150_000, uploadedAt: '2026-10-05T10:48:00Z', status: 'processed', mock: true },
]

export const MOCK_COLLECTIONS: Collection[] = [
  { id: 'c1', name: 'LLM & RAG Research', description: 'Papers on retrieval, evaluation, and agents.', docCount: 4, updatedAt: '2026-10-12T09:14:00Z' },
  { id: 'c2', name: 'Urban Hydrology', description: 'Flood management and canal studies.', docCount: 1, updatedAt: '2026-10-09T16:30:00Z' },
  { id: 'c3', name: 'Course Materials', description: 'Lecture notes and reading lists.', docCount: 2, updatedAt: '2026-10-07T19:05:00Z' },
]

export const MOCK_ACTIVITY: ActivityItem[] = [
  { id: 'a1', at: '2026-10-12T09:15:00Z', kind: 'index', message: 'Indexed transformer-architectures-survey.pdf', status: 'success' },
  { id: 'a2', at: '2026-10-11T14:10:00Z', kind: 'query', message: 'Research query in "LLM & RAG Research"', status: 'success' },
  { id: 'a3', at: '2026-10-10T08:42:00Z', kind: 'index', message: 'Processing vector-databases-comparison.pdf', status: 'running' },
  { id: 'a4', at: '2026-10-09T16:31:00Z', kind: 'upload', message: 'Uploaded flood-management-jakarta-bkt.pdf', status: 'success' },
  { id: 'a5', at: '2026-10-07T19:06:00Z', kind: 'error', message: 'Text extraction failed for scanned-lecture-notes.pdf', status: 'failed' },
  { id: 'a6', at: '2026-10-06T13:00:00Z', kind: 'collection', message: 'Created collection "Course Materials"', status: 'success' },
]

export const MOCK_QUERY_COUNT = 47
