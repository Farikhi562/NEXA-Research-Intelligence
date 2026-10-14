# PROJECT_STATUS

| Fase | Status |
|---|---|
| 0 Inspeksi proyek, Git, GitHub | Selesai (commit `42acb3f`; push dari mesin pengguna belum dikonfirmasi) |
| 1 Frontend foundation | Kode selesai ditulis; **build belum diverifikasi** (lihat bawah) |
| 2 Document management UI | Belum |
| 3 Backend foundation | Belum |
| 4 PDF ingestion | Belum |
| 5 Vector search | Belum |
| 6 RAG chat | Belum |
| 7 Integrasi & polish | Belum |

## Phase 1: yang dikerjakan
- `frontend/`: konfigurasi Vite + React + TS + Tailwind, layout (Sidebar, Topbar, AppLayout), komponen UI (Badge, Card, Button, PageHeader, EmptyState, Toast, MockBanner), DocumentsTable
- 6 halaman berfungsi via React Router; data mock terpusat di `src/data/mock.ts`

## Pengujian
- `npm install`, `npm run build`, `npm run dev`: **TIDAK dijalankan** (lingkungan tanpa jaringan, dependensi tidak bisa diinstal)
- Satu-satunya pemeriksaan: `tsc --noEmit --ignoreConfig` (TypeScript 6.0.3) tanpa `@types/react`, `react-router-dom`, `lucide-react`. Hasil: 0 error sintaks asli; 356 diagnostik lain semuanya berasal dari modul/tipe yang tidak terpasang (TS2307, TS7026, TS7006, dst.) dan tidak bisa menilai kebenaran tipe
- UI belum pernah dirender, jadi tampilan, responsivitas, dan kontras belum diperiksa secara visual
- Tidak ada `package-lock.json` (belum bisa dibuat tanpa `npm install`)

## Deployment (Vercel)
- `frontend/vercel.json` ditambahkan (Vite, output `dist`, rewrite SPA ke `/index.html` agar refresh di nested route tidak 404)
- Setting Vercel: Root Directory `frontend`, production branch `main`
- Status: **belum ter-deploy**. Lingkungan tanpa jaringan, tanpa kredensial GitHub/Vercel; build produksi belum pernah dijalankan

## Belum selesai / risiko
- Kemungkinan perlu perbaikan kecil saat `npm run build` pertama (error tipe yang baru muncul dengan dependensi lengkap)
- shadcn/ui tidak dipakai; komponen dibuat manual
- Loading state belum diperlukan karena belum ada operasi asinkron

## Langkah berikutnya
1. Di laptop: `cd frontend && npm install && npm run build && npm run dev`; kirim error jika ada
2. Push ke `main` (jangan force push)
3. Phase 2: Document management UI (upload interface lebih lengkap, filter, status pemrosesan)
