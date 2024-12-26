import AccordionWithImage from "./AccordionWithImage"

const Values = (props) => {
    const {values} = props;

    return (
        <section className="mb-16 md:w-[80%] md:mx-auto px-4 md:px-0">
            <h2 className="text-3xl md:text-5xl md:w-2/3 text-center md:text-start">
                Our expertise and passion breathe life into your narratives
            </h2>
            <div className="w-full md:h-[500px]">
                <AccordionWithImage values={values} />
            </div>
        </section>
    )
}

export default Values