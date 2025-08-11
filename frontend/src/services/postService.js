// Post service for API calls
const API_URL = '/api/posts';

export const getPosts = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createPost = async (post, token) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(post),
  });
  return res.json();
};
