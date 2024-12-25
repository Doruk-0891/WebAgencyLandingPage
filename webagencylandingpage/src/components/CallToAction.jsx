import Cards from "./Cards";
import Form from "./Form";

const CALL_TO_ACTION_DETAILS = [
    {
        image: 'src/assets/person1.png',
        description: "All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists.",
        title: "Milly Cyrus, Global Lead"
    },
    {
        image: 'src/assets/person2.png',
        description: "All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists.",
        title: "Vinita Singh, Asst. Global Lead"
    }
];

const CallToAction = () => {
    return (
        <section className="md:w-[80%] md:m-auto px-4 md:px-0">
            <section className="flex flex-col gap-5 mb-16 md:flex-row">
                <div className="md:basis-1/2">
                    <div className="uppercase text-2xl text-center md:text-start  md:text-4xl text-black-400">
                        <h2>Lets Start Something</h2>
                        <h2 className="text-red-400">New</h2>
                        <h2>Together</h2>
                    </div>
                    <div className="md:flex">
                        {
                            CALL_TO_ACTION_DETAILS.map(item => (<Cards details={item} key={item.title} />))
                        }
                    </div>
                </div>
                <div className="md:basis-1/2">
                    <Form />
                </div>
            </section>
        </section>
    )
}

export default CallToAction