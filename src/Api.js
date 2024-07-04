const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const addUser = async (user) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  return response.json();
};

export const updateUser = async (user) => {
  const response = await fetch(`${API_URL}/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  return response.json();
};
