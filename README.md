# NEXA Research Intelligence

Platform AI Research Assistant berbasis RAG: unggah PDF, kelola koleksi riset, ajukan pertanyaan, dan dapatkan jawaban dengan kutipan sumber serta nomor halaman yang dapat diverifikasi.

> **Status: Phase 1 (frontend foundation) ditulis, belum diverifikasi dengan build.** Belum ada backend, database, vector search, atau integrasi LLM. Lihat [PROJECT_STATUS.md](PROJECT_STATUS.md).

## Stack frontend
React 18 · TypeScript · Vite 5 · Tailwind CSS 3 · React Router 6 · Lucide React. Komponen UI ditulis sendiri (belum memakai shadcn/ui).

## Menjalankan
```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # tsc --noEmit
npm run build      # typecheck + build produksi
```

## Fitur UI yang tersedia
- Layout console: sidebar dark navy (drawer di mobile), topbar dengan breadcrumb, pencarian, status layanan, avatar demo
- Halaman: Overview, Documents, AI Research Chat, Collections, Activity Logs, Settings (semua rute berfungsi)
- Documents: pencarian, filter status, validasi PDF (tipe dan batas 50 MB) saat memilih file, empty state, toast
- Chat: input, daftar pesan, panel Sources, empty state

## Yang masih mock / belum diimplementasikan
- Seluruh data dokumen, koleksi, aktivitas, dan angka metrik adalah **mock** (`frontend/src/data/mock.ts`) dan ditandai di UI
- File yang dipilih tidak diunggah ke mana pun; hanya muncul di daftar selama tab terbuka
- Chat tidak memanggil AI: setiap pertanyaan dijawab pemberitahuan bahwa backend belum terhubung
- Tidak ada autentikasi, backend API, parsing PDF, embeddings, vector search, maupun RAG (Phase 3–6)
- Tombol/pengaturan provider AI di Settings hanya placeholder nonaktif; API key tidak pernah diminta di frontend

## Konfigurasi
Salin `.env.example` ke `.env` (dipakai backend mulai Phase 3). Jangan commit `.env`.

## Roadmap
0 Inspeksi & Git ✔ · 1 Frontend foundation (kode ada, build belum diverifikasi) · 2 Document UI · 3 Backend · 4 PDF ingestion · 5 Vector search · 6 RAG chat · 7 Integrasi & polish
