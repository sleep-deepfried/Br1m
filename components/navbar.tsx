'use client'

import { useState } from 'react';
import Image from "next/image";
import { signIn } from 'next-auth/react';

function Navbar() {
    const [isSignInOpen, setIsSignInOpen] = useState(false);

    const handleSignInClick = () => {
        setIsSignInOpen(true);
    };

    const handleCloseClick = () => {
        setIsSignInOpen(false);
    };

    

    return (
        <div>
            <div className="absolute flex flex-row justify-between w-full px-40 py-5">
                <div className="flex flex-row">
                    <div className="flex flex-row items-center">
                        <p className='text-3xl font-[BlackOpsOne]'>
                            BR1M
                        </p>
                    </div>
                </div>
                <div>
                    <button className="" onClick={handleSignInClick}>
                        <p className="border-2 border-white rounded-md p-2">
                            Sign-in
                        </p>
                    </button>
                </div>
            </div>
            {isSignInOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-white p-10 rounded-md">
                        <button className="absolute top-7 right-10 text-4xl" onClick={handleCloseClick}>
                            &times;
                        </button>
                        {/* Sign in with Facebook, Github, Google */}
                        <div className="flex flex-col gap-40">
                            <div className='text-black text-left text-4xl font-semibold'>
                                Sign in with <br /> your account
                            </div>
                            <div className='flex flex-col gap-5'>   
                                {/* <button className="flex flex-row justify-center items-center gap-2 bg-black text-white px-20 py-3 rounded-md">
                                    <Image src="/images/github-mark-white.svg" alt='Github Logo' width={30} height={30} />
                                    <p>
                                        Sign in with Github
                                    </p>
                                </button> */}
                                <button onClick={async () => await signIn('google', { callbackUrl: '/feed' })} 
                                    className="flex flex-row justify-center items-center gap-2 bg-white text-black px-20 py-3 rounded-md shadow-sm shadow-gray">
                                    <Image src="/images/google-logo.svg" alt='Google Logo' width={30} height={30} />
                                    <p>
                                        Sign in with Google
                                    </p>
                                </button>
                                <button onClick={async () => await signIn('facebook', { callbackUrl:'/feed'})}
                                    className="flex flex-row justify-center items-center gap-2 bg-blue-500 text-white px-20 py-3 rounded-md">
                                    <Image src="/images/facebook-logo.svg" alt='Facebook Logo' width={30} height={30} />
                                    <p>
                                        Sign in with Facebook
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
