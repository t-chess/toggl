import { createTE, deleteTE, getAllTEs, updateTe } from '@/serverCalls/timeEntries'
import { revalidatePath } from 'next/cache'
import { generateUrl } from '@/app/utils/generate_urls'
import Server from 'next/server';

export async function GET() {
  return await getAllTEs()
}

export async function POST(request: Request) {
  const json = await request.json()
  const res = await createTE(json)
  if (res.ok) {
    revalidatePath(generateUrl('/time-entries'))
  }

  const data = await res.json()
  return Server.NextResponse.json({ data })
}
export async function PUT(request: Request) {
  const json = await request.json()
  const res = await updateTe(json)
  if (res.ok) {
    revalidatePath(generateUrl('/time-entries'))
  }

  const data = await res.json()
  return Server.NextResponse.json({ data })
}

export async function DELETE(request:Request) {
  const json = await request.json();
  const res = await deleteTE(json);
  if (res.ok) {
    revalidatePath(generateUrl('/time-entries'))
  }
  const data = await res.json()
  return Server.NextResponse.json({ data })
}