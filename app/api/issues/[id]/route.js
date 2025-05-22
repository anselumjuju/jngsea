import { client as sanityClient } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const id = (await params).id;
  const query = groq`*[_type == "issue" && _id == $id]`;

  try {
    const issues = await sanityClient.fetch(query, { id });
    return NextResponse.json({ data: issues, status: 200 });
  } catch (err) {
    console.error('Error fetching issues:', err);
    return NextResponse.json({ message: 'Failed to fetch issues', error: err }, { status: 500 });
  }
}
