import IEDClogo from "/src/static/IEDC_logo.png"
import {motion} from 'framer-motion'

const LeftTab = () => {

    return (

        <motion.div 
            initial={{opacity: 0.4}}
            animate={{opacity: 1}}
            transition={{duration: 1.5}}
            className="flex flex-col gap-2 lg:w-[40vw]">
            <div><img src={IEDClogo} className="lg:h-auto h-[100px]" alt="iedc logo" />
            </div>

            <div className="flex flex-col gap-0">
                <h1
                    className="font-bold text-7xl lg:text-8xl"
                >IEDC</h1>
                <p
                    className="font-semibold text-xl lg:text-2xl relative top-[-14px]"
                >gcek</p>
            </div>

            <button className="hover:bg-[#FC0150]/70 transition-colors w-[200px] lg:w-fit px-4 py-2 bg-[#FC0150] font-semibold cursor-pointer text-white">
                <p>Connect With Us</p>
            </button>

            <h3 className="text-2xl font-semibold">Idea. Innovate. Ignite.</h3>
            <p className="font-semibold text-[18px] text-gray-600">The quick brown fox jumps over the Lazy Dog! And he died, all the life he lived were in vein</p>
        </motion.div>
    )
}

export default LeftTab