const API_URL = 'http://localhost:4000/api'; // Backend URL

// Get all scholarships
export const getScholarships = async () => {
  const response = await fetch(`${API_URL}/scholarships`);
  return response.json();
};

// Search scholarships by name
export const searchScholarships = async (query) => {
  const response = await fetch(`${API_URL}/scholarships/search?query=${query}`);
  return response.json();
};

// Login user
// api.js
export const loginUser = async (userData) => {
  try {
    const response = await fetch('http://localhost:4000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData), // Ensure userData is correctly formatted
    });

    if (!response.ok) {
      const errorData = await response.json(); // Parse error response
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.msg}`);
    }

    return response.json(); // Return the response data
  } catch (err) {
    console.error('Login failed:', err);
    throw err; // Re-throw the error to handle it in the component
  }
};