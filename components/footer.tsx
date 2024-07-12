import Image from "next/image";
import Link from "next/link";

function Footer(){
    return(
        <div className="bg-footer px-20">
            <div className="flex flex-col">
                <div className="grid grid-cols-6 py-12">
                    <div className="flex flex-col gap-10 col-span-2">
                        <div className="flex flex-row gap-1">
                            <Image src="/images/logo.svg" alt="logo" width={35} height={35} />
                            <p className="text-3xl font-[BlackOpsOne]">
                                BR1M
                            </p>
                        </div>
                        <p className="text-sm text-justify">
                            Join our vibrant community today and unlock a world of opportunities for collaboration, productivity, and growth. Elevate your workspace experience with Found It.
                        </p>
                        <div className="flex flex-col text-sm">
                            <p className="font-semibold">
                                Subscribe to our newsletter
                            </p>
                            <p className="text-hero-text">
                                Get product updates, company news, and more.
                            </p>
                        </div>
                        <div>
                            <button className="py-3 px-5 rounded-md border-2 border-zinc-600">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-end col-span-2">
                        <div className="flex flex-col gap-5">
                            <div className="text-xl font-semibold">
                                Useful Links
                            </div>
                            <div className="flex flex-col gap-4 text-hero-text">
                                <Link href="#">
                                    Home
                                </Link>
                                <Link href="#">
                                    About Us
                                </Link>
                                <Link href="#">
                                    Services
                                </Link>
                                <Link href="#">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        
                    </div>

                    <div className="flex flex-col col-start-6 gap-5">
                        <div className="text-xl font-semibold">
                            Support
                        </div>
                        <div className="flex flex-col gap-4 text-hero-text">
                            <Link href="#">
                                Terms of Service
                            </Link>
                            <Link href="#">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="text-center text-xs">
                    Copyright 2024 © BR1M . All rights reserved
                </div>
            </div>
            
        </div>
    );
}

export default Footer;