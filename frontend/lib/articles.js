const STRAPI_URL = process.env.STRAPI_URL;

// Helper function to GET the articles from Strapi
async function fetchArticlesApi() {
  const requestUrl = `${STRAPI_URL}/articles`;
  const response = await fetch(requestUrl);
  return await response.json();
}

// Helper function to GET a single article from Strapi
async function fetchArticleApi(slug) {
  const requestUrl = `${STRAPI_URL}/articles/?filters[slug][$eq]=${slug}`;
  const response = await fetch(requestUrl);
  return await response.json();
}

// Helper function to GET a single article from Strapi which is in draft state
async function fetchArticlePreviewApi(slug) {
  const requestUrl = `${STRAPI_URL}/articles?publicationState=preview&filters[slug][$eq]=${slug}`;
  const response = await fetch(requestUrl);
  return await response.json();
}

export { fetchArticlesApi, fetchArticleApi, fetchArticlePreviewApi };