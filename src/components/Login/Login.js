import React from 'react';
import useFirebase from '../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h1>LogIn page</h1>
            <button onClick={signInWithGoogle}>Sign In With google</button>
            <form>
                <input type="email" name="" id="" placeholder='enter your email' />
                <br />
                <input type="password" name="" id="" placeholder='enter your password' />
                <br />
                <input type="submit" value="LogIn" />
            </form>
        </div>
    );
};

export default Login;