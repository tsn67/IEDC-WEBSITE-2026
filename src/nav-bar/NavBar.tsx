import { motion } from 'framer-motion';
import { IoMdMenu } from "react-icons/io";
import useNavBar from "../hooks/useNavBar";

const NavBar = () => {

    const { items, selected, open, setOpen, changeNavItem } = useNavBar();

    return (
        <>

            <div className="md:flex z-50 fixed left-10 top-8 lg:left-40 lg:top-20 hidden gap-10 backdrop-blur-md">
                {items.map((item, i) => {
                    return <div
                        onClick={() => changeNavItem(item)}
                        key={`nav-bar-${i}`} className="font-semibold text-2xl cursor-pointer select-none flex flex-col gap-[3px]">
                        {item}
                        {selected === item && <motion.div
                            className="h-2 bg-black w-full relative top-[-6px]"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                        ></motion.div>}
                    </div>
                })}
            </div>

            <div className="md:hidden z-50 flex flex-col gap-4 w-full fixed top-0 p-8 backdrop-blur-md">
                <div className="flex justify-between items-center w-full">
                    <div className="w-full font-bold text-2xl">
                        {selected}
                    </div>

                    <div onClick={() => setOpen(!open)} className="cursor-pointer">
                        <IoMdMenu fontSize={40}/>
                    </div>
                </div>

                {open && <motion.div
                    className="overflow-hidden h-full flex flex-col gap-4"
                    initial={{height: 0}}
                    animate={{height: 'auto'}}
                >
                    {items.filter((i) => i != selected ).map((item, i) => {
                         return <div
                            onClick={() => changeNavItem(item)}
                            className="cursor-pointer font-bold text-gray-800 text-xl" key={`nav-bar-small-open-${i}`}>
                            {item}
                         </div>
                    })}
                </motion.div>}

                <div className="w-full h-[1px] bg-black">

                </div>
            </div>
        </>
    )
}

export default NavBar