import { client as sanityClient } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { slug } = await params;
  const query = groq`
    *[_type == "volume" && slug.current == $slug][0]{
      _id,
      name,
      "slug": slug.current,
      year,
      _createdAt
    }  
  `;

  try {
    const volumes = await sanityClient.fetch(query, { slug });
    return NextResponse.json({ data: volumes, status: 200 });
  } catch (err) {
    console.error('Error fetching volumes', err);
    return NextResponse.json({ message: 'Failed to fetch volumes', error: err }, { status: 500 });
  }
}
