import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Prefix a public asset path with the current base URL (for GitHub Pages)
export function publicUrl(path: string): string {
  const base = (import.meta as any).env?.BASE_URL || (window as any).__vite_base__ || "/"
  if (!path) return base
  if (path.startsWith("http://") || path.startsWith("https://")) return path
  if (path.startsWith("/")) return base.replace(/\/$/, "") + path
  return base + path
}
