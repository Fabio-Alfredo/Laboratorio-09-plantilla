import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Header = ({user}) => {
    
  //usar el contexto para obtener la funcion de remover token
  //implementar la funcion de remover token en el boton de logout


  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-blue-600 text-white py-4 px-4 md:px-12 shadow-md z-10 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Posts PW 2024</h1>

        <div className="flex items-center space-x-4">
          <img
            src={user.photo}
            alt="Foto de perfil"
            className="w-10 h-10 rounded-full hover:animate-bounce cursor-pointer "
          />
          <div className="flex w-fit items-center h-fit flex-col">
            <span className="text-lg font-medium">{user.username}</span>
            <button
              
              className="border border-red-500 transition ease-out hover:translate-y-1 hover:scale-110 bg-white hover:bg-red-600 hover:text-white text-red-500 w-20 py-0.5  rounded-lg text-xs"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
