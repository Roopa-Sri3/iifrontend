import { useState, useEffect } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated by looking at local storage
    const storedAuth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(storedAuth === "true");
  }, []);

  const signIn = () => {
    // Simulate signing in by setting the flag in local storage
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  const signOut = () => {
    // Simulate signing out by removing the flag from local storage
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    signIn,
    signOut,
  };
}
