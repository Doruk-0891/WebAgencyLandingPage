import { BRAND_LOGO } from "../constants";
import MarqueeComponent from "./Marquee";

const Brands = () => {
  return (
    <section className="mb-16">
      <MarqueeComponent>
        {
          BRAND_LOGO.map(item => (
            <img src={`/assets/${item}.png`} alt={item} key={item} className="px-4" loading="lazy" />
          ))
        }
      </MarqueeComponent>
    </section>
  )
}

export default Brands;