'use client'

import Link from 'next/link';
import Image from "next/image";

import FeedNavbar from'@components/feed-navarbar'
import Sidebar from '@components/sidebar'

function Feed() {
    const projects = [
        {
            project:'Bonk',
            name: 'Bonk The Explorer',
            certified: true,
            description: 'Travel with Ease, Travel with Bonk',
            subdescription:'A decentralized app to aid commuter common problems',
            category: 'Consumer Apps',
            subcategory: 'DAO and Communities',
            likes: 1.7,
            comments: 130,
        },
        {   
            project:'Dao',
            name: 'Dao Cre-8',
            certified: true,
            description: 'Pioneering a DAO-Powered Renaissance',
            subdescription: 'Milestone-based, Decentralized Crowdfunding for Creators and Builders',
            category: 'Consumer Apps',
            subcategory: 'DAO and Communities',
            likes: 1.7,
            comments: 130,
        },
        {   
            project:'Kasha',
            name: 'Kasha',
            certified: true,
            description: 'The Fitting Room At Your Fingertips',
            subdescription:'Try on and purchase the right size of clothes',
            category: 'Consumer Apps',
            subcategory: 'DAO and Communities',
            likes: 1.7,
            comments: 130,
        },
        {
            project:'Armada',
            name: 'Armada',
            certified: true,
            description: 'A DAO for DAOs, by DAOs',
            subdescription:'A secure p2p marketplace for reselling tickets for every events.',
            category: 'Consumer dApps',
            subcategory: 'Infrastructure, DeFi, Payments',
            likes: 1.7,
            comments: 130,
        },
        {
            project:'ReQuest',
            name: 'ReQuest',
            certified: true,
            description: 'Transforming ticketing today',
            subdescription:'A Robust, Customizable, No-Code Governance for the Mothership and Its Fleets',
            category: 'Consumer Apps',
            subcategory: 'DAO and Communities',
            likes: 1.7,
            comments: 130,
        },
        {
            project:'FoundIt',
            name: 'FoundIt',
            certified: true,
            description: 'Where productivity meets community',
            subdescription:'Find your Ideal workspace anywhere, anytime',
            category: 'Consumer Apps',
            subcategory: 'DAO and Communities',
            likes: 1.7,
            comments: 130,
        },
    ];

    const trendingItems = [
        {
            title: 'ASES ABCD',
            description:
                'A four-day hackathon over two weeks that aims to develop the most innovative and groundbreaking startup ideas from university students across the Philippines.',
            image: '/images/ases.svg',  
        },
        {
            title: 'Renaissance Hackathon',
            description:
                'Sprint to build crypto’s next breakout startup and bring the ecosystem into the Golden Age.',
            image: '/images/renaissance.svg',
        },
        {
            title: 'Bonkathon',
            description:
                'Beginning with one per year, it serves as a prototype for on-chain communities to host their own hackathons, regardless of scale, capital capacity, or size.',
            image: '/images/bonkathon.svg',
        },
    ];

    return (
        <div className="flex flex-col text-black">
            {/* Navbar */}
            <FeedNavbar />

            <div className="flex h-screen">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Feed */}
                <div className="pt-20 w-3/5 p-5 ml-1/5 min-h-screen overflow-y-auto hide-scrollbar bg-feed-main">
                    <div className="space-y-4">
                        {projects.map((project, index) => (
                            <Link className='flex flex-col' key={index} href={`/projects/${project?.project}`}>
                                <div className="flex items-center border p-4 rounded-md hover:bg-gray-50 space-x-[15px]">
                                    <Image src={`/images/${project.project}.svg`} alt="alt" width={120} height={120} />
                                    <div className='flex flex-col'>
                                        <div className='flex flex-row items-center gap-2'>
                                            <p className='text-xs font-semibold'>
                                                {project.name}
                                            </p>
                                            {project.certified && (
                                                <Image src="/images/certified.svg" alt="alt" width={20} height={20} />
                                            )}
                                            <div className='text-[8px] bg-feed-category p-1 rounded-full'>
                                                {project.category}
                                            </div>
                                            <div className='text-[8px] bg-feed-category p-1 rounded-full'>
                                                {project.subcategory}
                                            </div>
                                        </div>
                                        <div className='font-bold'>
                                            {project.description}
                                        </div>
                                        <div className='text-xs'>
                                            {project.subdescription}
                                        </div>
                                        <div className="flex space-x-7 mt-2 text-sm text-gray-500">
                                            <div className='flex space-x-2'>
                                                <Image src="/images/likes.svg" alt="alt" width={20} height={20} />
                                                <p>{project.likes}k</p>
                                            </div>
                                            <div className='flex flex-row'>
                                                <Image src="/images/upvotes.svg" alt="alt" width={20} height={20} />
                                                <p>{project.comments}</p>
                                                <Image src="/images/downvotes.svg" alt="alt" width={20} height={20} />
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Trending Section */}
                <div className="pt-20 w-1/5 p-5 bg-gray-100 fixed h-screen right-0 bg-feed-main overflow-y-auto hide-scrollbar">
                    <h2 className=" mb-4 text-[#373737]">Trending now</h2>
                    {trendingItems.map((item, index) => (
                        <div key={index} className="mb-4 border border-[#B2B2B2] p-4 rounded-md space-y-2">
                            <div className="">{item.title}</div>
                            <p className='text-xs font-light'>{item.description}</p>
                            <Image src={item.image} alt="alt" width={200} height={100} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Feed;
