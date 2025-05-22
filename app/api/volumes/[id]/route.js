import { client as sanityClient } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const id = (await params).id;

  const query = groq`*[_type == "volume" && _id == $id][0]`;

  try {
    const volumes = await sanityClient.fetch(query, { id });
    return NextResponse.json({ data: volumes, status: 200 });
  } catch (err) {
    console.error('Error fetching volumes', err);
    return NextResponse.json({ message: 'Failed to fetch volumes', error: err }, { status: 500 });
  }
}
