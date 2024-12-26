import { Link } from "react-router-dom"
import { PrimaryButton } from "../components/Button"

const ErrorPage = () => {
    return (
        <div className="w-full h-dvh flex flex-col items-center">
            <img src='https://media.istockphoto.com/id/1199266034/photo/404-web-page-error-message-sign-isolated-on-white-computer-network-system-problem-webpage.jpg?s=2048x2048&w=is&k=20&c=cgMmCUrYVqDjWJU_rxMVyVRmAB7PSuqC238iUB5zFlY=' alt='404 page' loading="lazy" className="w-full h-[70%]" />
            <PrimaryButton>
                <Link to="/about">
                    Go back to safe zone
                </Link>
            </PrimaryButton>
        </div>
    )
}

export default ErrorPage