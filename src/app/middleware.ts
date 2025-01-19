import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

const secret = process.env.NEXT_SECRET_JWT!;

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/admin")) {
        const token = request.headers.get("cookie")?.split("=")[1];
        if (token) {
            try {
                jwt.verify(token, secret);
                return NextResponse.next();
            } catch (error) {
                return NextResponse.json(new URL("/login", request.url));
            }
        }
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"]
}