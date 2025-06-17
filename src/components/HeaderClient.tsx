"use client";

import React from "react";
import { Header } from "./Header";

export const HeaderClient = () => {
  const handleLogin = () => {
    console.log("Login clicked");
    // Here you would implement login logic
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    // Here you would implement logout logic
  };

  const handleCreateAccount = () => {
    console.log("Create account clicked");
    // Here you would implement account creation logic
  };

  return (
    <Header 
      user={{ name: "Movie Lover" }}
      onLogin={handleLogin}
      onLogout={handleLogout}
      onCreateAccount={handleCreateAccount}
    />
  );
};
