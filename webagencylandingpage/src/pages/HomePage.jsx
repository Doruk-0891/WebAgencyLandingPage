import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <section className="text-center pt-10">
            <h1 className="text-black-200 text-5xl">Wants to know what we do</h1>
            <h1 className="text-black-200 text-5xl">Go to <Link to='/about' className="text-red-400 hover:underline">About page</Link></h1>
        </section>
    )
}

export default HomePage