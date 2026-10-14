import { Activity, FileText, FolderOpen, LayoutDashboard, MessageSquare, Settings } from 'lucide-react'

export const NAV = [
  { to: '/', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/documents', label: 'Documents', icon: FileText },
  { to: '/chat', label: 'AI Research Chat', icon: MessageSquare },
  { to: '/collections', label: 'Collections', icon: FolderOpen },
  { to: '/activity', label: 'Activity Logs', icon: Activity },
  { to: '/settings', label: 'Settings', icon: Settings },
]
