'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { useSession, signOut } from 'next-auth/react';

function Sidebar(){

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

    return(
        <div className="pt-20 w-1/5 p-5 bg-gray-100 bg-feed-sidebar left-0 font-[NotoSans]">
                    <div className="flex items-center space-x-2 mb-6">
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
                    <div className="bg-gray rounded-full w-10 h-10"></div>
                )}
                <p className='text-black'>{user?.name}</p>
                    </div>
                    <div className="mb-6">
                        <div className='flex items-center text-xs space-x-24'>
                            <p className="text-[13px] font-bold">Top Projects</p>
                            <button className="bg-green-700 text-white py-2 px-5 rounded-md">+ New</button>
                        </div>
                        
                        <div>
                            <div className='flex items-center space-x-2 text-sm'>
                                <div className='bg-black p-px rounded-full'>
                                    <Image src="/images/solaknows-logo.png" alt="alt" width={16} height={16} />
                                </div>
                                <p>SolaKnows</p>
                            </div>
                            <div className='flex items-center space-x-2 text-sm'>
                                <Image src="/images/projecto-logo.svg" alt="alt" width={16} height={16} />
                                <p>Proyecto</p>
                            </div>
                            <div className='flex items-center space-x-2 text-sm'>
                                <Image src="/images/br1m-logo.svg" alt="alt" width={16} height={16} />
                                <p>BR1M</p>
                            </div>
                        </div>
                        <button className="mt-5 text-hero-text">Show more</button>
                    </div>
                </div>
    )
}

export default Sidebar