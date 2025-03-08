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
  }else if(request.method === "GET"){
     if(request.nextUrl.pathname === "/redirect"){
        const referer = request.headers.get("referer");
        if(referer){
          let refererObj = new URL(referer);
          let sortAlias = refererObj.pathname.replaceAll("/","");
          if(sortAlias.length > 0) return response;
        }
       // return NextResponse.redirect(new URL("/",request.url),{status : 301})
     }
  }
  return response;
}

export const config = {
    matcher: [
      "/posts/:path*",
      "/redirect",
    ],
}

