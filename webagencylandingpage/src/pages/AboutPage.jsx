import Loader from "../components/Loader/Loader"
import { LINKS, QUESTIONS, VALUES } from "../constants"
import { lazy, Suspense } from "react"

const HeroLazyComponent = lazy(() => import("../components/Hero"));
const BrandsLazyComponent = lazy(() => import("../components/Brands"));
const ValuesLazyComponent = lazy(() => import("../components/Values"));
const TaglineLazyComponent = lazy(() => import("../components/Tagline"));
const FooterLazyComponent = lazy(() => import("../components/Footer"));
const CallToActionLazyComponent = lazy(() => import("../components/CallToAction"));
const FAQLazyComponent = lazy(() => import("../components/FAQ"));
const TestimonialLazyComponent = lazy(() => import("../components/Testimonial"))
const CountLazyComponent = lazy(() => import("../components/Counts"));

const AboutPage = () => {
    const tagline = 'Unleash Visual Impact |';
    return (
        <main className="w-full">
            <Suspense fallback={<div className="w-full h-[200px] flex justify-center items-center"><Loader /></div>}>
                <HeroLazyComponent />
                <BrandsLazyComponent />
                <ValuesLazyComponent values={VALUES} />
                <CountLazyComponent />
                <TestimonialLazyComponent />
                <FAQLazyComponent faqList={QUESTIONS} />
                <CallToActionLazyComponent />
                <TaglineLazyComponent title={tagline} />
                <FooterLazyComponent links={LINKS} />
            </Suspense>
        </main>
    )
}

export default AboutPage