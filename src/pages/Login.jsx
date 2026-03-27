import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });

    const navigate = useNavigate();

    const loginHandler = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, loginForm);
        const { token } = response.data;
        console.log(response);
        navigate('/')
    }
    return (
        <div className='content-container'>
            <h1>Log In</h1>
            <form >
                <input
                    type="email"
                    placeholder='abc@email.com'
                    value={ loginForm.email }
                    onChange={ event => setLoginForm(prevForm => ({ ...prevForm, email: event.target.value })) }
                />
                &nbsp;
                <input
                    type="password"
                    placeholder='password'
                    value={ loginForm.password }
                    onChange={ event => setLoginForm(prevForm => ({ ...prevForm, password: event.target.value })) }
                />
                &nbsp;
                <button
                    disabled={ !loginForm.email || !loginForm.password }
                    onClick={ loginHandler }
                >Login
                </button>
            </form>
            <div>
                <button onClick={ () => navigate('/forgot-password') }>Forgot your password</button>
                &nbsp;
                <button onClick={ () => navigate('/sign-up') }>Don't have an account? Sign up</button>
            </div>
        </div>
    )
}

export default Login
