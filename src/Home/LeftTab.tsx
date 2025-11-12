import useNavBar from "../hooks/useNavBar"
import IEDClogo from "/src/static/iedc_logo.png"
import { motion } from 'framer-motion'

const LeftTab = () => {

    const { changeNavItem } = useNavBar();

    return (

        <motion.div
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col md:items-start items-center gap-2">
            <div>
                <img src={IEDClogo} className="h-[100px]" alt="iedc logo" />
            </div>

            <div className="flex flex-col gap-0">
                <h1
                    className="font-bold text-7xl lg:text-8xl"
                >IEDC</h1>
                <p
                    className="font-semibold text-xl lg:text-2xl relative top-[-14px] z-40"
                >gcek</p>
            </div>

            <button onClick={() => changeNavItem('About')} className="hover:bg-[#FC0150]/70 transition-colors w-[200px] lg:w-fit px-4 py-[6px] bg-[#FC0150] font-semibold cursor-pointer text-white rounded-md">
                <p>Connect With Us</p>
            </button>

            <h3 className="text-2xl font-semibold">Idea. Innovate. Ignite.</h3>
            <p className="md:text-justify lg:w-[300px] text-center font-bold text-[18px] text-gray-600">Innovation begins where ideas meet action — IEDC empowers students to turn imagination into impact.</p>
        </motion.div>
    )
}

export default LeftTab
