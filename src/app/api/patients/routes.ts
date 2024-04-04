import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(
        {
            id: 1,
            name: "Damião Filho",
            email:  "damiao@gmail.com",
            phone: "84 99874-3641",
            birthdate: "15/06/2001"
        }
    )
}

export async function POST(request: Request) {
    const data = await request.json()
    return NextResponse.json({
        data,
        message: "Paciente adicionado com sucesso"
    })
}