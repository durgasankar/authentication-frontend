import React, { useState } from 'react'

const Login = () => {
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });

    const loginHandler = () => {

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
                <input
                    type="password"
                    placeholder='password'
                    value={ loginForm.password }
                    onChange={ event => setLoginForm(prevForm => ({ ...prevForm, password: event.target.value })) }
                />
                <button
                    disabled={ loginForm.email || loginForm.password }
                    onClick={ loginHandler }
                >Login
                </button>
            </form>
            <div>
                <button>Forgot your password</button>
                <button>Don't have an account? Sign up</button>
            </div>
        </div>
    )
}

export default Login
