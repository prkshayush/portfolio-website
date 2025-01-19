
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const username = process.env.NEXT_ADMIN_USERNAME!;
const password = process.env.NEXT_ADMIN_PASSWORD!;
const secret = process.env.NEXT_JWT_SECRET!;

// login function
export async function POST(request: Request) {
    const { username: inputUsername, password: inputPassword } = await request.json();

    if (inputUsername === username && inputPassword === password) {
        const token = jwt.sign({ username }, secret, { expiresIn: "2h" });
        return NextResponse.json({
            message: "Login successful"},
            {
                headers: {
                    "Set-Cookie": `token=${token}; HttpOnly; Path=/; Max-Age=3600`
                }
            });
    }

    return NextResponse.json({message: "Invalid Credentials"}, { status: 401})
}

// validate session
export async function GET(request: Request){
    const token = request.headers.get("cookie")?.split("=")[1];
    if (token) {
        try {
            jwt.verify(token, secret);
            return NextResponse.json({authenticated: true});
        } catch (error) {
            return NextResponse.json({message: "Unauthorized"}, {status: 401})
        }
    }
    return NextResponse.json({message: "Invalid Token recieved"}, {status : 401});
}

// logout handler
export async function DELETE() {
  return NextResponse.json(
    { message: "Logged out" },
    { headers: { "Set-Cookie": `token=; HttpOnly; Path=/; Max-Age=0` } }
  );
}