import React, {useState} from 'react';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleGoogleSignIn = () => {
        // Add your Google Sign-In logic here
        // This could involve opening a Google Sign-In popup or redirecting to a Google Sign-In page
        // Once the user successfully signs in with Google, you can handle the authentication process accordingly

        setIsLoggedIn(true);
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
    );
};

export default Login;
