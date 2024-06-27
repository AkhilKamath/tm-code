import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios'

export async function POST(request: NextRequest) {
  const { emailId } = await request.json();

  try {
    const response = await axios.post(`${process.env.EMAIL_SERVICE_ENDPOINT}/emails/send`, { emailId })
    console.log(response.data)

    console.log('eeeee')

    return NextResponse.json({ data: response.data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
