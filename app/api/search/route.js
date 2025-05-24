import { client as sanityClient } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');

  if (!query) return NextResponse.json({ error: 'Missing query param' }, { status: 400 });

  const searchQuery = groq`
    *[_type == "article" && title match "*" + $query + "*"]{
      _id,
      title,
      description,
      image,
      "volume": volume -> {
        _id,
        name,
        _createdAt,
        "slug": slug.current,
        year
      }, 
      "issue": issue -> {
        _id,
        name,
        "slug": slug.current,
        _createdAt,
        "volume": volume -> {
          _id,
          name,
          "slug": slug.current,
          year
        },
      },
      "slug": slug.current,
    }
  `;

  try {
    const articles = await sanityClient.fetch(searchQuery, { query });
    return NextResponse.json({ data: articles, status: 200 });
  } catch (err) {
    console.error('Search API error:', err);
    return NextResponse.json({ message: 'Failed to fetch articles', error: err }, { status: 500 });
  }
}
