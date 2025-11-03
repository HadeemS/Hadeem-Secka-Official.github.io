export function withBase(path = '') {
  const base = import.meta.env.BASE_URL ?? '/'
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  const trimmedPath = path.startsWith('/') ? path.slice(1) : path

  if (!trimmedPath) {
    return normalizedBase || '/'
  }

  if (!normalizedBase || normalizedBase === '.') {
    return `/${trimmedPath}`
  }

  return `${normalizedBase}/${trimmedPath}`
}
