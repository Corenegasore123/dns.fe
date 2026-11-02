import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

type PaginationProps = {
  page: number;
  totalPages: number;
  hrefFor: (page: number) => string;
};

// Up to 4 consecutive pages around the current one, plus first/last with ellipses (e.g. 1 2 3 4 … 25)
function pageWindow(page: number, total: number): (number | '…')[] {
  let start = Math.max(1, page - 1);
  const end = Math.min(total, start + 3);
  start = Math.max(1, end - 3);
  const items: (number | '…')[] = [];
  if (start > 1) items.push(1);
  if (start > 2) items.push('…');
  for (let i = start; i <= end; i++) items.push(i);
  if (end < total - 1) items.push('…');
  if (end < total) items.push(total);
  return items;
}

const base = 'h-9 min-w-9 px-2.5 sm:px-3 inline-flex items-center justify-center gap-1 rounded-md border text-xs sm:text-sm transition-colors';
const idle = `${base} border-gray-200 text-gray-700 hover:border-[#47A15E] hover:text-[#47A15E]`;
const disabled = `${base} border-gray-100 text-gray-300 pointer-events-none`;

const Pagination = ({ page, totalPages, hrefFor }: PaginationProps) => {
  if (totalPages <= 1) return null;
  const NavLink = ({ to, label, children }: { to: number; label: string; children: React.ReactNode }) =>
    to < 1 || to > totalPages || to === page ? (
      <span className={disabled} aria-disabled="true" aria-label={label}>{children}</span>
    ) : (
      <Link href={hrefFor(to)} className={idle} aria-label={label}>{children}</Link>
    );

  return (
    <nav aria-label="Pagination" className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
      <NavLink to={1} label="First page">
        <ChevronsLeft className="w-4 h-4" /><span className="hidden sm:inline">First</span>
      </NavLink>
      <NavLink to={page - 1} label="Previous page">
        <ChevronLeft className="w-4 h-4" /><span className="hidden sm:inline">Back</span>
      </NavLink>
      {pageWindow(page, totalPages).map((item, i) =>
        item === '…' ? (
          <span key={`gap-${i}`} className="h-9 min-w-9 inline-flex items-center justify-center text-gray-400">…</span>
        ) : item === page ? (
          <span key={item} aria-current="page" className={`${base} border-[#1a1a1a] bg-[#1a1a1a] text-white font-semibold`}>{item}</span>
        ) : (
          <Link key={item} href={hrefFor(item)} className={idle}>{item}</Link>
        ),
      )}
      <NavLink to={page + 1} label="Next page">
        <span className="hidden sm:inline">Next</span><ChevronRight className="w-4 h-4" />
      </NavLink>
      <NavLink to={totalPages} label="Last page">
        <span className="hidden sm:inline">Last</span><ChevronsRight className="w-4 h-4" />
      </NavLink>
    </nav>
  );
};

export default Pagination;
