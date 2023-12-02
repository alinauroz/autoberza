import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const decodedString = decodeURIComponent(rawBody);

  // Split the parameters
  const params = decodedString.split('&');

  // Create an object to store the key-value pairs
  const parsedData: any = {};

  // Populate the object with key-value pairs
  params.forEach((param) => {
    const [key, value] = param.split('=');
    parsedData[key] = value;
  });

  // Log the parsed data as key-value pairs
  for (const key in parsedData) {
    console.log(`${key}: ${parsedData[key]}`);
  }
}
