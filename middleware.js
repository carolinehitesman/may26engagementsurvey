export function middleware(request) {
  const authHeader = request.headers.get('authorization')

  if (authHeader && authHeader.startsWith('Basic ')) {
    const base64 = authHeader.split(' ')[1]
    const decoded = atob(base64)
    const password = decoded.split(':').slice(1).join(':')
    if (password === 'PropelCrew26') {
      return
    }
  }

  return new Response('Access denied', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Propel Brief"',
    },
  })
}

export const config = {
  matcher: '/(.*)',
}
