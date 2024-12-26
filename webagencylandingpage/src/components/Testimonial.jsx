import CarouselComponent from "./Carousel/CarouselComponent"
import { TESTIMONIALS } from "../constants"

const Testimonial = () => {
  return (
    <section className="md:w-[80%] md:mx-auto px-4 md:px-0 mb-16">
      <h3 className="font-bold uppercase text-xl flex overflow-hidden py-2 gap-2 text-red-400 justify-center md:justify-start">
        <div className="text-transparent w-8 border-b-2 border-red-400 h-4">-</div> TESTIMONY FROM OUR PARTNERS
      </h3>
      <div className="w-full h-[400px]">
        <CarouselComponent slides={TESTIMONIALS} />
      </div>
    </section>
  )
}

export default Testimonial