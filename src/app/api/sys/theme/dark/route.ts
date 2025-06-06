import { NextResponse } from "next/server";

export async function GET() {
    const data = {
        "fontColor": ""
    };
    return NextResponse.json(data);
}
