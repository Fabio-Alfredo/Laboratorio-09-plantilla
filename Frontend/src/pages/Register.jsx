import React, { useState } from 'react';
import InputField from '../components/InputFiels'; 
import { useNavigate } from 'react-router-dom';
import usePost from '../hooks/usePost'; 

const URL = import.meta.env.VITE_BASE_URL; 

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',   
        email: '',
        password: '',
        photo: ''
    });
    const navigate = useNavigate();

    const { postData, error, loading} = usePost(`${URL}/api/users/register`);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        try{
            const res = await postData(formData);
            alert(res.message);
            navigate('/');
        }catch(e){
            alert('Error' + e.message);
        }

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6">Register</h1>
                <form onSubmit={handleSubmitRegister}>
                    <InputField
                        label="Username:"
                        name="username"
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <InputField
                        label="Email:"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <InputField
                        label="Photo:"
                        name="photo"
                        type="text"
                        value={formData.Photo}
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
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account? 
                    <button 
                        onClick={() => navigate('/')} 
                        className="text-blue-500 hover:underline pl-1"
                    >
                        Login here
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Register;
