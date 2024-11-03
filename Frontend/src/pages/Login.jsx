import React, { useState } from 'react';
import InputField from '../components/InputFiels';
import { useNavigate } from 'react-router-dom';
import usePost from '../hooks/usePost';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const URL = import.meta.env.VITE_BASE_URL;

const Login = () => {
    //usar el contexto para obtener las funciones de almacenamiento de token y usuario


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { postData, error, loading } = usePost(`${URL}/api/users/login`);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmitLogin = async (e) => {
        e.preventDefault()
        try{
            const res = await postData(formData)

            //guardar token y usuario en el contexto 
            // por medio de las funciones del contexto

            //
            alert("Login successful")
            navigate('/home')
        }catch(e){
            alert('Error' + e.message)
        }
    };

    const handleRegisterRedirect = () => {
        navigate('/register'); 
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6">Login</h1>
                <form onSubmit={handleSubmitLogin}>
                    <InputField
                        label="Email:"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <InputField
                        label="Password:"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button 
                        type="submit" 
                        className="w-28 mt-5 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Don't have an account? 
                    <button 
                        onClick={handleRegisterRedirect} 
                        className="text-blue-500 hover:underline pl-1"  // Asegúrate de que el color sea correcto       
                    >
                        Register here
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;

