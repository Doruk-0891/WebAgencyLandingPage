import { FaArrowRightLong } from "react-icons/fa6";
import { PrimaryButton } from "./Button";
import Person1 from '../assets/person1.png';
import Person2 from '../assets/person2.png';
import ReelThumbnail from '../assets/Reel.png';

const Hero = () => {
    return (
        <section className="w-full mb-16">
            <div className="text-black-400 text-3xl md:text-6xl font-bold uppercase py-6">
                <h1 className="py-1 md:py-3">We are a</h1>
                <h1 className="py-1 md:py-3">Global <span className="text-red-400">Production</span></h1>
                <h1 className="py-1 md:py-3">Agency</h1>
            </div>
            <div className="md:flex items-end space-y-3">
                <div className="space-y-3 basis-2/3">
                    <p>
                        Designed with the specific needs of large B2B enterprises in mind, our platform offers a comprehensive solution to simplify.
                    </p>
                    <div className="flex flex-col md:flex-row gap-2">
                        <PrimaryButton>
                            <div className="flex items-center gap-3 justify-center">
                            Get Professional Video Services <FaArrowRightLong />
                            </div>
                            
                        </PrimaryButton>
                        <div className="flex">
                            <div className="flex items-center">
                                <div className="rounded-full overflow-hidden w-10">
                                    <img src={Person1} alt='Marin' className="w-full object-cover" />
                                </div>
                                <div className="rounded-full -translate-x-2 overflow-hidden w-10">
                                    <img src={Person2} alt='Ayesha' />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p>Marin / Ayesha</p>
                                <p className="opacity-60">Global Services</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-1/3 flex justify-end">
                    <div className="w-2/3">
                        <img src={ReelThumbnail} alt="reel thumbnail" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero