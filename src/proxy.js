import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";


export async function proxy(request) {

    // console.log(request, "request")

    const session = await auth.api.getSession({
        headers: await headers()
    })

    // const isLoggedIn = false;
    if (session) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/signup', request.url))
}

export const config = {
    matcher: ['/alltiles','/tiles/:path*']
}