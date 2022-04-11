import React, { useState } from 'react';

function Login() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="w-1/4 mx-auto mt-40 pb-5 bg-gray-50 border rounded text-center">
            <img className="m-auto mt-10 h-20" alt="instagram logo" src='https://www.pngarts.com/files/9/Instagram-Logo-PNG-Images.png'/>
            <img className="m-auto h-10" alt="instagram logo" src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'/>
            <form className="flex  flex-col p-4">
                <input type="email" placeholder="Email" required className="form-input"/>
                <input type="password" placeholder="Password" required className="form-input"/>
                <button
                    className="border rounded p-2 m-2 hover:bg-gray-100"
                    onClick={() => setSignIn(true)}
                >Log In</button>
            </form>
            <span className="text-sm cursor-pointer">Sign Up</span>
        </div>
    );
}

export default Login;