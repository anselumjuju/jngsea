import { client as sanityClient } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

export async function GET() {
  const query = groq`*[_type == "featuredArticle"][0]{
    article->{
      _id,
      title,
      "slug": slug.current,
      description,
      image,
    }
  }`;

  try {
    const articles = await sanityClient.fetch(query);
    return NextResponse.json({ data: articles, status: 200 });
  } catch (err) {
    console.error('Error fetching recent articles:', err);
    return NextResponse.json({ message: 'Failed to fetch recent articles', error: err }, { status: 500 });
  }
}
