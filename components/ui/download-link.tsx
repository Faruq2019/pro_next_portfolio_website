import Link from 'next/link'

export default function DownloadLink({ href, className }: { href: string; className?: string }) {
  return (
    <Link
      href={href}
      target='_blank'
      download
      className={`inline-block px-4 py-2 rounded-[1.75rem] bg-white dark:bg-black text-black dark:text-white border border-neutral-200 dark:border-slate-800 hover:bg-neutral-100 dark:hover:bg-slate-900 transition-colors ${className ?? ''}`}
    >
      Download Resume
    </Link>
  )
}

