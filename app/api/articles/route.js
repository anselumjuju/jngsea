import { client as sanityClient } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

export async function GET() {
  const query = groq`
    *[_type=='article']{
      _id,
      "doi": DOI,
      "issn": ISSN,
      title,
      abstract,
      image,
      author,
      description,
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
      "pdf": pdf.asset -> url,
      _createdAt,
    }
  `;

  try {
    const articles = await sanityClient.fetch(query);
    return NextResponse.json({ data: articles, status: 200 });
  } catch (err) {
    console.error('Error fetching recent articles:', err);
    return NextResponse.json({ message: 'Failed to fetch recent articles', error: err }, { status: 500 });
  }
}
