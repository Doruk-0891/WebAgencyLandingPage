import Marquee from 'react-fast-marquee';

const MarqueeComponent = ({children}) => {
  return (
    <div>
        <Marquee autoFill>
            {children}
        </Marquee>
    </div>
  )
}

export default MarqueeComponent