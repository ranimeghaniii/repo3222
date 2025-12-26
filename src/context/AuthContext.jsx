import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = (userData) => {
    // In a real app, you'd verify credentials with a backend
    // For this mock, we just assume login is successful if user exists
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsLoggedIn(true);
    return true; // Indicate success
  };

  const register = (userData) => {
    // In a real app, you'd send this to a backend for user creation
    // For this mock, we just store it as the current user
    const existingUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
    const userExists = existingUsers.some(u => u.username === userData.username || u.email === userData.email);

    if (userExists) {
      return false; // User with this username/email already exists
    }

    const newUser = { ...userData, id: Date.now().toString() };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('registered_users', JSON.stringify(updatedUsers));
    
    // Auto-login after successful registration
    login(newUser); 
    return true; // Indicate success
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
