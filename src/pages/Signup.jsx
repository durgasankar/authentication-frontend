import React, { useState } from 'react'

const Signup = () => {
    const [signupForm, setsignupForm] = useState({ email: '', password: '', confirmPassword: '' });

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
                <input
                    type="text"
                    placeholder='password'
                    value={ signupForm.password }
                    onChange={ event => setsignupForm(prevForm => ({ ...prevForm, password: event.target.value })) }
                />
                <input
                    type="password"
                    placeholder='confirm password'
                    value={ signupForm.confirmPassword }
                    onChange={ event => setsignupForm(prevForm => ({ ...prevForm, confirmPassword: event.target.value })) }
                />
                <button
                    disabled={ signupForm.email || signupForm.password || signupForm.password !== signupForm.confirmPassword }
                    onClick={ signupHandler }
                >Sign up
                </button>
            </form>
            <div>
                <button>Forgot your password</button>
                <button>Don't have an account? Sign up</button>
            </div>
        </div>
    )
}

export default Signup;
