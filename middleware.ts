import { NextResponse} from "next/server";
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest){ 
  const response = NextResponse.next();
  if(request.method === "POST"){
    response.headers.set("x-request-method", "POST");
    const formData = await request.formData();
    formData.forEach((value, key) => {
      response.headers.set(`x-form-${key}`, value as string);
    });
  }
  return response;
}

export const config = {
    matcher: [
      "/posts/:path*",
    ],
}