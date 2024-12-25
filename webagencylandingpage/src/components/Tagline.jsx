import MarqueeComponent from "./Marquee"

const Tagline = (props) => {
    const {title} = props;
  return (
    <div>
        <MarqueeComponent autoFill>
            <h2 className="uppercase text-3xl bg-black-400 text-white py-5 px-3 md:text-5xl">{title}</h2>
        </MarqueeComponent>
    </div>
  )
}

export default Tagline