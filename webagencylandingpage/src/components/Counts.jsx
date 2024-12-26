import AnimatedCounter from "./AnimatedCounter"

const Counts = () => {
    return (
        <section className="md:w-[80%] md:mx-auto px-4 mb-16 md:px-0">
            <h3 className="font-bold uppercase text-xl flex overflow-hidden py-2 gap-2 text-red-400 justify-center md:justify-start">
                <div className="text-transparent w-8 border-b-2 border-red-400 h-4">-</div> WE ARE GLOBAL
            </h3>

            <div className="flex flex-wrap md:flex-nowrap flex-col items-center md:items-start md:justify-between md:flex-row">
                <div className="p-2">
                    <p className="font-bold text-4xl lg:text-6xl pb-2 text-center md:text-start">
                        <AnimatedCounter from={30} to={60} />
                        <span className="text-red-400">+</span>
                    </p>
                    <p className="text-lg lg:text-2xl">
                        brands partnered with
                    </p>
                </div>

                <div className="p-2">
                    <p className="font-bold text-4xl lg:text-6xl pb-2 text-center md:text-start">
                        <AnimatedCounter from={0} to={3} />K
                        <span className="text-red-400">+</span>
                    </p>
                    <p className="text-lg lg:text-2xl">
                        brands content assets created
                    </p>
                </div>

                <div className="p-2">
                    <p className="font-bold text-4xl lg:text-6xl pb-2 text-center md:text-start">
                        <AnimatedCounter from={0} to={1} />K 
                        <span className="text-red-400">+</span>
                    </p>
                    <p className="text-lg lg:text-2xl">
                        global partners and collaborators
                    </p>
                </div>

                <div className="p-2">
                    <p className="font-bold text-4xl lg:text-6xl pb-2 text-center md:text-start">
                        <AnimatedCounter from={50} to={100} />
                        <span className="text-red-400">+</span>
                    </p>
                    <p className="text-lg lg:text-2xl">
                        cities wordwide
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Counts