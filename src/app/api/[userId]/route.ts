import { NextResponse } from "next/server"
import { usePathname } from "next/navigation"

export async function GET(req: Request, { params: { userId } }: { params: { userId: string } }) {
  return NextResponse.json({ name: `${userId} - John Doe` })
}
