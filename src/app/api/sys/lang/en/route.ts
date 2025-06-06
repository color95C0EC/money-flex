import { NextResponse } from "next/server";

export async function GET() {
    const data = {
        "ui.cancel": "Cancel"
    };
    return NextResponse.json(data);
}
