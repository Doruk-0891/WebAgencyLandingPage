import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Accordion from "./Accordion"
import { useState } from "react"

const FAQ = (props) => {
    const { faqList } = props;
    const [menuOpen, setMenuOpen] = useState({ isOpen: false, index: null });

    const handleMenuOpen = (menuIndex) => {
        setMenuOpen(prev => ({ ...prev, isOpen: !prev.isOpen, index: menuIndex }));
    }

    return (
        <section className="md:w-[80%] md:mx-auto px-4 md:px-0 mb-16 md:flex">
            <div className="basis-1/2">
                <h2 className="text-3xl md:w-2/3 text-center md:text-start md:text-5xl">Frequently asked questions</h2>
            </div>
            <div className="basis-1/2">
                <Accordion>
                    <div className="p-3">
                        {
                            faqList.map((item, idx) => (
                                <div key={item['ques']} className="w-full py-3">
                                    <div className="flex justify-between items-center gap-3 cursor-pointer" onClick={() => handleMenuOpen(idx)}>
                                        <span>
                                            {item['ques']}
                                        </span>
                                        <span>
                                            {
                                                menuOpen.index === idx && menuOpen.isOpen ? <IoIosArrowUp /> :
                                                    <IoIosArrowDown />
                                            }
                                        </span>
                                    </div>
                                    <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${menuOpen.index === idx && menuOpen.isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                            <p className="py-2">{item['ans']}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Accordion>
            </div>
        </section>
    )
}

export default FAQ