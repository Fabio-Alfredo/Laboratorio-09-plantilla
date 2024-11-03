import React, { createContext, useState, useEffect } from "react";
//importar los utils necesarios para el contexto

const AuthContext = createContext();

const AuthProvider = ({ children }) => {


  return (
    <AuthContext.Provider value={{ /*handleSaveToken, removeToken, handleSaveUser, token, isLoading, user*/ }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
