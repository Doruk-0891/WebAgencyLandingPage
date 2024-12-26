import { Link } from "react-router-dom"

const ServicesPage = () => {
    return (
        <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
            <h2 className="text-9xl">
                &#x1F6A7;
            </h2>
            <h4 className="text-xl opacity-80 uppercase">Under Progress</h4>
            <h4 className="text-xl text-red-400">
                <Link to='/about'>About Page</Link>
            </h4>
        </div>
    )
}

export default ServicesPage