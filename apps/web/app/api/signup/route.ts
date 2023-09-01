import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "db";
import User from "db/models/user";
connectDB()
.then()
.catch(err => console.log("err: ", err))

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;
        // Check is user exist
        const user = await User.findOne({email});
        if (user) {
            return NextResponse.json({error: "user already exists"}, {status: 400})
        }
        const newUser = new User({email, password});
        await newUser.save();

        return NextResponse.json({
            message: `${email} account created successfully, Please log in`,
            success: true
        }, {status: 200});
    } catch (error) {
        return NextResponse.json({error: error}, {status: 500})
    }
}

export function GET(request: NextRequest) {
    return NextResponse.json({masg: "Hello..."})
}