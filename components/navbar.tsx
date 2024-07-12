import Image from "next/image";

function Navbar() {
    return(
        <div className="absolute flex flex-row justify-between w-full px-40 py-5">
            <div className="flex flex-row">
                <div className="flex flex-row items-center">
                    <p className='text-3xl font-[BlackOpsOne]'>
                        BR1M
                    </p>
                </div>
                
            </div>
            <div className="">
                <button className="">
                    <p className="border-2 border-white rounded-md p-2">
                        Sign-in
                    </p>
                </button>
            </div>
        </div>
    );
}

export default Navbar;