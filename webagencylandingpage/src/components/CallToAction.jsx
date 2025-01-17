import Cards from "./Cards";
import Form from "./Form";
import { CALL_TO_ACTION_DETAILS } from "../constants";

const CallToAction = () => {
    return (
        <section className="md:w-[80%] md:m-auto px-4 md:px-0">
            <section className="flex flex-col gap-5 mb-16 md:flex-row">
                <div className="md:basis-1/2">
                    <div className="uppercase text-4xl text-center md:text-start  lg:text-6xl text-black-400 md:w-2/3">
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
                <div className="md:basis-1/2 md:px-5">
                    <Form />
                </div>
            </section>
        </section>
    )
}

export default CallToAction