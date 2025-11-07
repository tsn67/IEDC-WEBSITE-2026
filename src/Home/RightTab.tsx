import { motion } from 'framer-motion'


const RightTab = () => {


    const style1 = 'absolute h-[600px] w-[200px] rounded-full shadow-2xl shadow-black'

    function TextSection() {
        return <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3 }}
            className="flex flex-col text-white z-40 font-bold text-4xl md:text-5xl">
            <h1><span>I</span>nnovation</h1>
            <p className="text-xl font-bold">and</p>
            <h1><span>E</span>ntrepreneurship</h1>
            <h1><span>D</span>evelopment</h1>
            <h1><span>C</span>ell</h1>
        </motion.div>
    }

    let styles = ['top-[0px] bg-[#6C17AE]', 'top-[60px] bg-[#5779FF] ', 'top-0 bg-[#FC0150]']

    const test1 = styles;
    for (let i = 0; i < 2; i++)
        styles = [...test1, ...styles]

    return (
        <div>
            <div className="hidden md:flex md:px-[100px] w-fit lg:justify-center pt-[140px] gap-0 relative md:w-[600px]">

                {styles.map((item, i) => {
                    return <motion.div
                        key={`animation-1-${i}`}
                        style={{ left: `${i * 100}px` }}
                        className={`${style1} ${item}`}
                        initial={{ top: '200px', opacity: 0.4 }}
                        animate={{ top: `-100px`, opacity: 1 }}
                        transition={{ delay: i * 0.02, duration: 0.5 }}
                    >
                    </motion.div>
                })}
                <TextSection />
            </div>

            <div className="md:hidden flex flex-col">
                <div className='bg-[#6C17AE] w-fit p-3 flex items-end gap-1 font-bold '>
                    <h1 className='text-white text-4xl'>I</h1>
                    <h1 className='text-black text-4xl'>nnovation</h1>
                </div>

                <div className='font-bold text-4xl p-3 flex bg-[#5779FF]'>
                    <h1 className='text-white'>E</h1>
                    <h1>ntrepreneurship</h1>
                </div>

                <div className='font-bold text-4xl p-3 bg-[#FC0150] flex w-fit'>
                    <h1 className='text-white'>D</h1>
                    <h1>evelopment</h1>
                </div>

                <div className='p-3 font-bold flex text-4xl bg-emerald-500 w-fit'>
                    <h1 className='text-white'>C</h1>
                    <h1>ell</h1>
                </div>
            </div>

        </div>
    )
}

export default RightTab