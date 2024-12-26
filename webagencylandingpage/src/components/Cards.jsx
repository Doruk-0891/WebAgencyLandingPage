
const Cards = (props) => {
    const { details } = props;
    const { image, description, title } = details;
    return (
        <div className="p-3 flex flex-col justify-between gap-5">
            <img src={image} alt={title} width={32} height={32} loading="lazy" />
            <p className="text-black-400 opacity-60">{description}</p>
            <p>{title}</p>
        </div>
    )
}

export default Cards