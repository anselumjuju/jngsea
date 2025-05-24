import { client as sanityClient } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

export async function GET() {
  const query = groq`
    *[_type == 'featuredArticle'][0]{
      "_id": article->_id,
      "title": article->title,
      "description": article->description,
      "image": article->image,
      "slug": article->slug.current,
      "pdf": article->pdf.asset->url,

      "volume": article->volume->{
        _id,
        name,
        _createdAt,
        "slug": slug.current,
        year
      },

      "issue": article->issue->{
        _id,
        name,
        "slug": slug.current,
        _createdAt,
        "volume": volume->{
          _id,
          name,
          "slug": slug.current,
          year
        },
      },
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
