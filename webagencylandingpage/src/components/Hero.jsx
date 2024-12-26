import { FaArrowRightLong } from "react-icons/fa6";
import { PrimaryButton } from "./Button";
import { motion } from 'framer-motion';
import Person1 from '/assets/person1.png';
import Person2 from '/assets/person2.png';
import ReelThumbnail from '/assets/Reel.png';
import splitStringUsingRegex from "../utils";

const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 }
};

const Hero = () => {
    const headingCharsSet1 = splitStringUsingRegex('WE ARE A');
    const headingCharsSet2 = splitStringUsingRegex('GLOBAL');
    const headingCharsSet3 = splitStringUsingRegex('AGENCY');

    return (
        <section className="md:w-[80%] md:m-auto px-4 md:px-0">
            <section className="w-full mb-16">
                <div className="text-black-400 text-5xl text-center md:text-start md:text-8xl font-bold uppercase py-6">
                    <motion.h1 className="py-1 md:py-3"
                        initial="hidden"
                        whileInView="reveal"
                        transition={{ staggerChildren: .1 }}>
                        {
                            headingCharsSet1.map(char => (<motion.span key={char} transition={{ duration: 0.5 }} variants={charVariants}>
                                {char}
                            </motion.span>))
                        }
                    </motion.h1>
                    <motion.h1 className="py-1 md:py-3"
                        initial="hidden"
                        whileInView="reveal"
                        transition={{ staggerChildren: .1 }}
                    >
                        {
                            headingCharsSet2.map(char => (<motion.span key={char} transition={{ duration: 0.5 }} variants={charVariants}>
                                {char}
                            </motion.span>))
                        }
                        <span className="text-red-400">Production</span></motion.h1>
                    <motion.h1 className="py-1 md:py-3"
                        initial="hidden"
                        whileInView="reveal"
                        transition={{ staggerChildren: .1 }}
                    >
                        {
                            headingCharsSet3.map(char => (<motion.span key={char} transition={{ duration: 0.5 }} variants={charVariants}>
                                {char}
                            </motion.span>))
                        }
                    </motion.h1>
                </div>
                <div className="md:flex items-end space-y-3">
                    <div className="space-y-3 basis-2/3">
                        <p className="text-xl md:text-2xl">
                            Designed with the specific needs of large B2B enterprises in mind, our platform offers a comprehensive solution to simplify.
                        </p>
                        <div className="flex flex-col md:flex-row gap-2 relative -z-20">
                            <PrimaryButton>
                                <div className="flex items-center gap-3 justify-center">
                                    Get Professional Video Services
                                    <FaArrowRightLong />
                                </div>

                            </PrimaryButton>
                            <div className="flex justify-center">
                                <div className="flex items-center">
                                    <div className="rounded-full overflow-hidden w-10">
                                        <img src={Person1} alt='Marin' className="w-full object-cover" loading="lazy" />
                                    </div>
                                    <div className="rounded-full -translate-x-2 overflow-hidden w-10">
                                        <img src={Person2} alt='Ayesha' loading="lazy" />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p>Marin / Ayesha</p>
                                    <p className="opacity-60">Global Services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3 flex justify-center md:justify-end">
                        <div className="w-2/3">
                            <img src={ReelThumbnail} alt="reel thumbnail" className="w-full h-full" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Hero