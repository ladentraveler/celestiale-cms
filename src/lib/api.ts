import type { StrapiResponse, BlogPost } from '../types/strapi';

const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://your-strapi-url';

export async function fetchPosts(page = 1, pageSize = 10) {
  const response = await fetch(
    `${STRAPI_URL}/api/posts?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }

  const data: StrapiResponse<BlogPost> = await response.json();
  return data;
}

export async function fetchPostBySlug(slug: string) {
  const response = await fetch(
    `${STRAPI_URL}/api/posts?filters[slug][$eq]=${slug}&populate=*`
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.statusText}`);
  }

  const data: StrapiResponse<BlogPost> = await response.json();
  return data.data[0];
}