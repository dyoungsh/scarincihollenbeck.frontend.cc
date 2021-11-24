import {
  attorneyBySlugQuery,
  attorneyNewsEventsQuery,
  attorneyFirmBlogQuery,
  attorneySlugsQuery,
} from './graphql-queries';

const API_URL = process.env.BASE_GRAPHQL_API_URL;

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers.Authorization = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

/** Get the attorneys bio data base on their slug */
export async function attorneyBySlug(slug) {
  const data = await fetchAPI(attorneyBySlugQuery, {
    variables: { slug },
  });
  return data.attorneyProfileBy;
}

// /** Get all the news/events based on the attorneys name */
// export async function attorneyNewsEvents(name) {
//   const data = await fetchAPI(attorneyNewsEventsQuery,
//     {
//       variables: { name },
//     }
//   )
//   return data.posts
// }

// /** Get all the attorneys blog posts */
// export async function attorneyFirmBlog(id) {
//   const data = await fetchAPI(attorneyFirmBlogQuery,
//     {
//       variables: { id },
//     }
//   )
//   return data.posts
// }

// /** Get all the slugs for attorney profiles */
// export async function attorneySlugs() {
//   const data = await fetchAPI(attorneySlugsQuery);

//   return data.attorneyProfiles?.edges
// }
