export function withBase(path) {
  if (!path.startsWith('/')) {
    throw new Error(`Asset paths must start with a leading slash. Received: ${path}`)
  }

  return new URL(path, import.meta.env.BASE_URL).href
}
