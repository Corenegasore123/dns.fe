import 'server-only';
import type { Product } from '../data/products';

// Server-side calls to the DNS API (dns.be). Always fresh, so dashboard edits show up immediately.
const API_URL = process.env.API_URL ?? 'http://localhost:4000';

export type Paginated<T> = { items: T[]; total: number; page: number; pageSize: number; totalPages: number };

export class ApiUnavailableError extends Error {}

async function get<T>(path: string, query?: Record<string, string | number | boolean | undefined>): Promise<T | null> {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value !== undefined && value !== '') params.set(key, String(value));
  }
  const qs = params.toString();
  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}${qs ? `?${qs}` : ''}`, { cache: 'no-store', signal: AbortSignal.timeout(8000) });
  } catch (error) {
    throw new ApiUnavailableError(`API unreachable: ${(error as Error).message}`);
  }
  if (res.status === 404) return null;
  if (!res.ok) throw new ApiUnavailableError(`API ${path} responded ${res.status}`);
  return (await res.json()) as T;
}

export function listProducts(query: { category?: string; q?: string; page?: number; pageSize?: number; featured?: boolean }) {
  return get<Paginated<Product>>('/products', query) as Promise<Paginated<Product>>;
}

export function getProduct(slug: string) {
  return get<Product>(`/products/${encodeURIComponent(slug)}`);
}

export async function getRelatedProducts(slug: string, limit: number) {
  return (await get<Product[]>(`/products/${encodeURIComponent(slug)}/related`, { limit })) ?? [];
}
