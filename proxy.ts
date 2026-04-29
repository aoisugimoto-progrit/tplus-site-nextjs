import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const basicAuth = request.headers.get('authorization');
  const url = request.nextUrl;

  // 環境変数からパスワードを取得（Vercelで設定）
  const validPassword = process.env.PASSWORD || 'defaultpassword';
  const validUsername = 'user';

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    if (user === validUsername && pwd === validPassword) {
      return NextResponse.next();
    }
  }

  url.pathname = '/api/auth';

  return NextResponse.rewrite(url, {
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
    status: 401,
  });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
