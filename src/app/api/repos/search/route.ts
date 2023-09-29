import { NextResponse } from "next/server";

async function searchRepos(owner: string | null) {
  if (owner?.length === 0) {
    return [];
  }

  const response = await fetch(`https://api.github.com/search/repositories?q=user:${owner}+org:${owner}`);
  const { items } = await response.json();

  return items;
}

export async function GET(request: any) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  const repos = await searchRepos(query);
  return NextResponse.json(repos);
}
