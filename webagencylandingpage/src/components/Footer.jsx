const Footer = (props) => {
    const { links } = props;
    return (
        <footer className="md:w-[80%] md:m-auto px-4 py-5 md:px-0">
            <div className="flex md:justify-between gap-8 flex-wrap">
                {
                    Object.keys(links).map(item => (
                        <div key={item}>
                            <p className="uppercase py-2 font-bold text-black-400">{item}</p>
                            <ul>
                                {
                                    links[item].map(link => (
                                        <li key={link} className="text-black-200 text-sm py-2 cursor-pointer hover:text-red-400 hover:font-bold">{link}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-between text-black-400 opacity-50 text-sm py-3 border-t-2 border-black-400 border-opacity-50 md:text-md">
                <p>
                    Copyright ©2023 Red Bangle
                </p>
                <p className="flex gap-4">
                    <span>Privacy Policy</span>
                    <span>Legal</span>
                    <span>Terms & Conditions</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer