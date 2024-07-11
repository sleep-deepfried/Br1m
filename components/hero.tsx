import Image from "next/image";

function Hero(){
    return(
        <div className="min-h-[128vh] bg-hero bg-no-repeat bg-cover flex items-end px-40 py-20">
            <div className="flex flex-col gap-20">
                <p className="text-8xl font-bold">
                    Find projects here
                </p>
                <p className="text-3xl">
                    Unlock creativity and spark collaboration. Your ultimate destination for projects and dynamic discussions.
                </p>
                <div>
                    <input 
                        className="p-2 rounded-s-md" 
                            type="text" 
                            placeholder="Email Address" 
                        />
                    <button className="bg-gray p-2 rounded-e-md">
                        Sign up for BR1M
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;