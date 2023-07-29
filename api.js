import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/photos';

export const getUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    // For simplicity, let's only keep the first 10 users from the response
    const users = response.data.slice(0, 10).map(user => ({
      id: user.id,
      avatar: user.url,
      email: user.email,
    }));
    return users;
  } catch (error) {
    throw error;
  }
};
