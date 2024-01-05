import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase';

export default function OAuth() {
    const handleGoogleClick = async() => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth,provider);
            console.log(result);0
        } catch (error) {
            console.log('problem with google',error);
        }
    }
    return (
        <button 
        type='button'
        onClick={handleGoogleClick}
        className='bg-orange-700 text-yellow-300 p-3 rounded-lg 
        uppercase text-bold hover:opacity-90'>
            Continue With Google
        </button>
    )
}