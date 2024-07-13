'use client'

import { useState, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image';

const projects = [
    {
        project: 'Dao',
        name: 'Dao Cre-8',
        certified: 'true',
        tagline: 'Pioneering a DAO-Powered Renaissance',
        social: {
            instagram: false,
            twitter: true,
            username:  'DAOCre8',
        }, 
        category: 'Consumer Apps',
        subcategory: 'DAO and Communities',
        description: 'Milestone-based, Decentralized Crowdfunding for Creators and Builders',
        logo: '/images/Dao.svg',
        banner: '/images/dao-banner.svg',
        carousel: [
            '/images/dao-carousel-1.svg',
            '/images/dao-carousel-2.svg',
            '/images/dao-carousel-3.svg',
        ],
        likes: 1.70,
        comments:130,
    },
    {
        project: 'Kasha',
        name: 'Kasha',
        certified: 'true',
        tagline: 'The Fitting Room At Your Finger Tips!',
        social: {
            twitter: false,
            instagram: true,
            username: 'kasha.philippines',
        },
        category: 'Consumer Apps',
        subcategory: '',
        description: 'Kasha allows online shoppers to try on and purchase the right size of clothes through immersive 3D fitting, enhancing trust and reducing returns for clothing brands.',
        logo: '/images/Kasha.svg',
        banner: '/images/kasha-banner.svg',
        carousel: [
            '/images/kasha-carousel-1.svg',
            '/images/kasha-carousel-2.svg',
            '/images/kasha-carousel-3.svg',
        ],
        likes: 1.70,
        comments:130,
    }
    // other projects...
];

function ProjectDetails() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [projectName, setProjectName] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        if (project) {
            const isFirstSlide = currentIndex === 0;
            const newIndex = isFirstSlide ? project.carousel.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
        }
    };
    
    const nextSlide = () => {
        if (project) {
            const isLastSlide = currentIndex === project.carousel.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
        }
    };
    

    useEffect(() => {
        if (pathname && searchParams) {
            const url: string = `${pathname}?${searchParams}`;
            const projectNameFromUrl: string = url.split('/').pop()?.replace('?', '') ?? '';
            setProjectName(projectNameFromUrl);
            
            // You can now use the projectNameFromUrl or setProjectName as needed
        }
    }, [pathname, searchParams]);

    const project = projects.find(proj => proj.project === projectName);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="flex h-screen text-black bg-white">
            {/* Navbar */}
            <div className="fixed w-full z-20 flex justify-between items-center py-3 px-9 bg-feed-navbar text-black">
                <div className="flex items-center space-x-4">
                    <p className="font-[BlackOpsOne] text-3xl">BR1M</p>
                    <input type="text" placeholder="Search" className="text-sm border border-black px-4 py-1 rounded-full" />
                    <div className="flex space-x-4">
                        <button className="">Categories</button>
                        <button className="">Countries</button>
                    </div>
                </div>
                
                <div className="bg-green-400 rounded-full w-10 h-10"></div>
            </div>
            {/* Sidebar */}
            <div className="pt-20 w-1/5 p-5 bg-gray-100 bg-feed-sidebar left-0 font-[NotoSans]">
                <div className="flex items-center space-x-2 mb-6">
                    <div className="bg-green-400 rounded-full w-10 h-10"></div>
                    <span>Gson</span>
                </div>
                <div className="mb-6">
                    <div className='flex items-center text-xs space-x-24'>
                        <p className="text-[13px] font-bold">Top Projects</p>
                        <button className="bg-green-700 text-white py-2 px-5 rounded-md">+ New</button>
                    </div>
                    
                    <div>
                        <div className='flex items-center space-x-2 text-sm'>
                            <div className=' p-px rounded-full'>
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

            {/* Project Detail */}
            <div className="w-3/5 p-5 ml-1/5 overflow-y-auto hide-scrollbar h-screen">
                <div className="pl-20 space-y-4 pt-20">
                    <Image src={project.banner} alt={project.name} width={800} height={300} className="rounded-md" />
                    <div className="flex p-4 items-center space-x-4">
                        <Image src={project.logo} alt="alt" width={120} height={120} />
                        <div className='flex flex-col gap-2'>
                            <div className='flex space-x-2'>
                                <p className="font-bold">{project.name}</p>
                                {project.certified && (
                                    <Image src="/images/certified-green.svg" alt="alt" width={17} height={17} /> 
                                )}
                            </div>
                            <p className='text-xs font-medium'>{project.tagline}</p>
                            <div className='flex'>
                                {project.social.twitter && (
                                    <div className='bg-twiitter text-white flex rounded-md py-1 px-5 space-x-2'>
                                        <Image src="/images/twitter.svg" alt="alt" width={16} height={16} />
                                        <p className='text-xs'>{project.social.username}</p>
                                    </div>
                                )}
                                {project.social.instagram && (
                                    <div className='bg-instagram text-white flex rounded-md py-1 px-5 space-x-2'>
                                        <Image src="/images/instagram.svg" alt="alt" width={16} height={16} />
                                        <p className='text-xs'>{project.social.username}</p>
                                    </div>
                                )}
                            </div>

                            <div className='flex space-x-2 font-bold'>
                                <div className='text-[8px] bg-feed-category p-1 rounded-full'>
                                    <p>
                                        {project.category}  
                                    </p>
                                </div>
                                <div className='text-[8px] bg-feed-category p-1 rounded-full'>
                                <p>
                                        {project.subcategory}  
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 mt-4">
                        <h4 className="text-sm">{project.description}</h4>
                    </div>
                    <div className="relative w-full max-w-xl mx-28 overflow-hidden">
                        <div className="carousel-inner flex transition-transform duration-500"
                             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {project.carousel.map((src, index) => (
                                <div className="carousel-item min-w-full" key={index}>
                                    <Image src={src} alt={`Slide ${index}`} className="w-full" width={100} height={100}/>
                                </div>
                            ))}
                        </div>
                        <button
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-black p-2"
                            onClick={prevSlide}
                        >
                            <Image src="/images/left-arrow.svg" alt="alt" width={24} height={24} />
                        </button>
                        <button
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-black p-2"
                            onClick={nextSlide}
                        >
                            <Image src="/images/right-arrow.svg" alt="alt" width={24} height={24} />
                        </button>
                    </div>

                    <div className="flex space-x-14 pt-[30px] pb-[20px] text-sm text-gray-500">
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

                    <div className='grid grid-cols-4 divide-x divide-[#DDDDDD] border-y border-[#DDDDDD] py-3'>
                        <button className='text-sm'>
                            Project Updates
                        </button>
                        <button className='text-sm'>
                            Post a Review
                        </button>
                        <button className='text-sm'>
                            Report Bugs
                        </button>
                        <button className='text-sm'>
                            Suggest Features
                        </button>
                    </div>

                    <div className='flex space-x-2'>
                        <div className="bg-green-400 rounded-full w-10 h-10"></div>
                        <input 
                        className='text-sm w-full bg-[#ECEAEF] rounded-full px-3 py-1'
                        type='text'
                        placeholder={`Write a review (suggest a feature, report bugs, comments, etc)`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
