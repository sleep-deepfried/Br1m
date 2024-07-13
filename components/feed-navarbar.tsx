'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { useSession, signOut } from 'next-auth/react';


function FeedNavbar(){

    const { data: session, status } = useSession();
    const initialIsOpen = false;
    const [isOpen, setIsOpen] = useState(status === "loading" ? false : initialIsOpen);
    const user = session?.user;

    const handleSignOut = () => {
        signOut().then(() => {
        window.location.href = window.location.origin;
        }).catch(error => {
        console.error('Error signing out', error);
        });
    };

    
    if(!session){
        window.location.href = window.location.origin;
    }

    return(
        <div className="fixed w-full z-20 flex justify-between items-center py-3 px-9 bg-feed-navbar text-black">
                <div className="flex items-center space-x-4">
                    <p className="font-[BlackOpsOne] text-3xl">BR1M</p>
                    <input type="text" placeholder="Search" className="text-sm border border-black px-4 py-1 rounded-full" />
                    <div className="flex space-x-4">
                        <button className="">Categories</button>
                        <button className="">Countries</button>
                    </div>
                </div>
                
                {session ? (
                <div>
                    <button 
                    onClick={() => setIsOpen((prev) => !prev)}
                    className='flex flex-row items-center gap-2'
                    >
                    <div className='w-12 h-12 rounded-full overflow-hidden border border-gray-300'>
                        <img 
                        src={user?.image || '/path/to/default-image.jpg'} 
                        alt='user' 
                        width={70} 
                        height={70} 
                        />
                    </div>
                    </button>
                    {isOpen && (
                    <div className='absolute flex flex-col justify-center w-48 mt-4 z-20'>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>
                    )}
                </div>
                ) : (
                <Link href="/auth/sign-in" className="">
                    Sign In
                </Link>
                )}
                {/* <div className="bg-green-400 rounded-full w-10 h-10"></div> */}
            </div>
    )
}

export default FeedNavbar;