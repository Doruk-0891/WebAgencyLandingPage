import { useState } from "react";
import Accordion from "./Accordion";

const AccordionWithImage = (props) => {
    const { values } = props;
    const [selectedTab, setSelectedTab] = useState(0);

    const handleSelection = (tabIndex) => {
        setSelectedTab(tabIndex);
    }

    return (

        <div className="w-full h-full flex flex-col md:flex-row justify-center items-center">
            <div className="basis-1/2">
                <div className="p-3 w-2/3 h-2/3">
                    <img src={values[selectedTab]['image']} alt={values[selectedTab]['title']} className="object-cover w-full h-full" />
                </div>
            </div>
            <div className="basis-1/2 p-3">
                <Accordion>
                    {values.map((item, idx) => (
                        <div key={idx} onClick={() => handleSelection(idx)}>

                            {selectedTab !== idx && <div className="p-3 opacity-50">{item['title']}</div>}

                            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${selectedTab === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>

                                <div className="overflow-hidden flex flex-col gap-4 py-4">
                                    <p className={`text-red-400 font-bold`}>{item['sno']}</p>

                                    <p className={`text-3xl font-bold text-black-400`}>{item['title']}</p>

                                    <p className={`opacity-80`}>{item['description']}</p>

                                </div>



                            </div>
                        </div>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default AccordionWithImage