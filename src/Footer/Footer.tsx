import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-screen bg-black/76 h-fit relative -left-8 lg:left-[-8vw] flex flex-col md:pl-[8vw]">
            <div>
                <h3 className="md:text-4xl px-4 text-xl italic font-md font-light text-white mt-8 pt-10">"Innovation distinguishes between a leader and a follower."</h3>
                <div className="flex gap-1 items-center md:pl-0 pl-4 mt-1 md:mt-4 justify-start">
                    <div className="w-3 md:ml-5 md:w-5 h-[1px] md:h-[2px] bg-gray-400"></div>
                    <p className="text-gray-400 text-lg md:text-2xl italic">Steve Jobs</p>
                </div>
            </div>

            <div className="flex flex-col gap-1 md:gap-2 px-4 mt-7 text-white text-lg">
                <h1 className="font-semibold text-xl">Location</h1>
                <h1 className="">Government College of Engineering Kannur</h1>
                <h1 className="">Dharmasala</h1>
                <h1 className="">Kerala 670563</h1>
            </div>

            <div className="px-4 my-4">
                <div className="flex gap-3">
                    <a href="https://www.instagram.com/iedc_gcek/">
                        <div className="rounded-full bg-linear-60 from-pink-500 to-violet-400 px-3 py-3 transition-all duration-100  hover:opacity-70">
                            <FaInstagram size={30} />
                        </div>
                    </a>
                    <a href="">
                        <div className="rounded-full bg-linear-60 bg-emerald-500 px-3 py-3  transition-all duration-100  hover:opacity-70">
                            <FaWhatsapp size={30} />
                        </div>
                    </a>
                    <a href="https://in.linkedin.com/company/iedc-gcek">
                        <div className="rounded-full bg-linear-60 bg-blue-500 px-3 py-3  transition-all duration-100  hover:opacity-70">
                            <FaLinkedin size={30} />
                        </div>
                    </a>
                </div>

            </div>

            <div className="px-4 text-md md:text-lg text-white font-normal flex gap-2">
                <h1 className="text-gray-400">Phone </h1>
                <h1>+91 9778125838</h1>
            </div>

            <div className="self-center mt-4 md:ml-[-8vw] text-sm pb-1 text-white font-light">
                <p>all rights reserved © iedc gcek 25-26</p>
            </div>

        </div>
    )
}

export default Footer
