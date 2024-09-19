// AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
  updateUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Check local storage for user data on initial rendering
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('user_id', userData.id);
    localStorage.setItem('user', JSON.stringify(userData));
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
  };

  // update user information in context state and localStorage
  const updateUser = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
