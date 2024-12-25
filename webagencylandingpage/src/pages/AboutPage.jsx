import Brands from "../components/Brands"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Tagline from "../components/Tagline"
import { LINKS } from "../constants"

const AboutPage = () => {
    const tagline = 'Unleash Visual Impact |';
    return (
        <main className="w-full">
            <Hero />
            <Brands />
            <CallToAction />
            <Tagline title={tagline} />
            <Footer links={LINKS} />
        </main>
    )
}

export default AboutPage