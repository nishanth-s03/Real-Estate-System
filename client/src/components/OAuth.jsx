import React from 'react'

export default function OAuth() {
    const handleGoogleClick = async() => {
        try {
            
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
