// User service for API calls
const API_URL = '/api/users';

export const getUser = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

export const updateUser = async (id, data, token) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
