import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { sendEmailId } = await request.json();

  try {
    const response = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sendEmailId }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to send email' }, { status: response.status });
    }

    const result = await response.json();
    return NextResponse.json({ message: result.message });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
