import { motion } from "framer-motion";
import type { Lead } from "../hooks/useExecomData";


interface Props {
    bgColor?: string;
    leads: Lead[];
    outlineColor: string;
}

const GridShow = ({ leads, outlineColor }: Props) => {
    return (
        <div className="grid h-fit py-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-x-4 gap-y-2">
            {leads.map((lead, i) => {
                return (
                    <motion.div
                        key={`lead-show-${i}`}
                        initial={{ opacity: 0, y: 50 }} // start hidden & down
                        whileInView={{ opacity: 1, y: 0 }} // animate when in viewport
                        viewport={{ once: true, amount: 0.3 }} // triggers once, when 30% visible
                        transition={{ duration: 0.6, delay: i * 0.1 }} // stagger effect
                        className="flex flex-col gap-3 justify-center items-center"
                    >
                        <div
                            style={{ outline: `solid ${outlineColor} 3px` }}
                            className="rounded-full"
                        >
                            <div className="m-1">
                                <motion.div
                                    className="lg:w-[30vh] lg:h-[30vh] w-[140px] h-[140px] rounded-full bg-gray-500 overflow-hidden"
                                    whileHover={{ scale: 1.05 }} // optional hover animation
                                    transition={{ type: "spring", stiffness: 150 }}
                                >
                                    <img
                                        className="object-cover w-full h-full"
                                        src={lead.imgeUrl}
                                        alt={lead.name}
                                    />
                                </motion.div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-0 text-center">
                            <h1 className="md:text-xl text-md text-black font-semibold">
                                {lead.name}
                            </h1>
                            <h2 className="text-md md:text-lg text-gray-800">
                                {lead.position}
                            </h2>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default GridShow;
