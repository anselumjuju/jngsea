import { client as sanityClient } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const id = (await params).id;
  const query = groq`*[_type == "article" && _id == $id]`;

  try {
    const articles = await sanityClient.fetch(query, { id });
    return NextResponse.json({ data: articles, status: 200 });
  } catch (err) {
    console.error('Error fetching recent articles:', err);
    return NextResponse.json({ message: 'Failed to fetch recent articles', error: err }, { status: 500 });
  }
}
