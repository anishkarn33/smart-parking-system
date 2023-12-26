export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    // TODO: Add more robust checks here if needed (like token expiration)
    return !!token;
  };
  