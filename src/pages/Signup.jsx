import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [signupForm, setsignupForm] = useState({ email: '', password: '', confirmPassword: '' });
    const navigate = useNavigate();

    const signupHandler = () => {
        console.log(signupForm)

    }
    return (
        <div className='content-container'>
            <h1>Log In</h1>
            <form >
                <input
                    type="email"
                    placeholder='abc@email.com'
                    value={ signupForm.email }
                    onChange={ event => setsignupForm(prevForm => ({ ...prevForm, email: event.target.value })) }
                />
                &nbsp;
                <input
                    type="text"
                    placeholder='password'
                    value={ signupForm.password }
                    onChange={ event => setsignupForm(prevForm => ({ ...prevForm, password: event.target.value })) }
                />
                &nbsp;
                <input
                    type="password"
                    placeholder='confirm password'
                    value={ signupForm.confirmPassword }
                    onChange={ event => setsignupForm(prevForm => ({ ...prevForm, confirmPassword: event.target.value })) }
                />
                &nbsp;
                <button
                    disabled={ signupForm.email || signupForm.password || signupForm.password !== signupForm.confirmPassword }
                    onClick={ signupHandler }
                >Sign up
                </button>
            </form>
            <div>
                <button onClick={ () => navigate('/forgot-password') }>Forgot your password</button>
                &nbsp;
                <button onClick={ () => navigate('/login') }>Already have an account? Sign in</button>
            </div>
        </div>
    )
}

export default Signup;
