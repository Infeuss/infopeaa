import { NextResponse } from 'next/server';
export const runtime = "edge";

export async function POST(request: Request) {
  // Handle CORS
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  // Your existing redirect logic
  let response = NextResponse.redirect(new URL('/posts/deploying-next-apps', request.url), 307);
  
  // Add CORS headers to the response
  response.headers.set('Access-Control-Allow-Origin', '*');
  return response;
}

export async function GET(request: Request) {
  return new NextResponse('Hello, Next.js!', {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}