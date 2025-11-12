import { motion } from 'framer-motion'


const RightTab = () => {

    type Word = {
        color: string,
        content: string,
        needAnd?: boolean
    };

    const rightBarContent: Word[] = [ { color: '#6C17AE', content: 'Innovation'}, { color: '#5779FF', content: 'Entrepreneurship', needAnd: true}, { color: '#FC0150', content: 'Development',  }, { color: 'oklch(69.6% 0.17 162.48)', content: 'Cell'}]


    return (
        <div className='w-full'>

            <div className='md:flex hidden flex-col items-center gap-0 w-screen ml-[16%] lg:ml-[20%]'>
                {rightBarContent.map((item, i) => {
                    return <motion.div
                        initial={{opacity: 0.4, x: 100}}
                        animate={{opacity: 1, x: 0}}
                        transition={{delay: 0.1 * i, damping: 0}} 
                        className='w-screen px-3 py-2 flex items-center'
                        style={{backgroundColor: `${item.color}`}}
                        key={`right-bar-element-${i}`}
                    >
                        <h1 className='text-white font-bold text-8xl'>{item.content.slice(0, 1)}</h1>
                        <h1 className='text-6xl lg:text-7xl font-medium'>{item.content.slice(1)}</h1>
                    </motion.div>
                })}
            </div>

            <motion.div 
                initial={{opacity: 0.2, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{damping: 0, duration: 0.4}}
                className="md:hidden flex flex-col">
                <div className='bg-[#6C17AE] p-3 flex items-end gap-1 font-bold '>
                    <h1 className='text-white text-4xl'>I</h1>
                    <h1 className='text-black text-4xl'>nnovation</h1>
                </div>

                <div className='font-bold text-4xl p-3 flex bg-[#5779FF]'>
                    <h1 className='text-white'>E</h1>
                    <h1>ntrepreneurship</h1>
                </div>

                <div className='font-bold text-4xl p-3 bg-[#FC0150] flex '>
                    <h1 className='text-white'>D</h1>
                    <h1>evelopment</h1>
                </div>

                <div className='p-3 font-bold flex text-4xl bg-emerald-500 '>
                    <h1 className='text-white'>C</h1>
                    <h1>ell</h1>
                </div>
            </motion.div>

        </div>
    )
}

export default RightTab