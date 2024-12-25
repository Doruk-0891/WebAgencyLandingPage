import { FaArrowRightLong } from "react-icons/fa6";
import { PrimaryButton } from './Button';
import { useState } from "react";

const Form = () => {
    const [name, setName] = useState(null);
    const [companyName, setCompanyName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [message, setMessage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        resetForm();
    }

    const resetForm = () => {
        setName(null);
        setCompanyName(null);
        setEmail(null);
        setPhone(null);
        setMessage(null);
    }

    return (
        <div className="w-full">
            <h4 className="text-center py-2">Give us few details and we&apos;ll get in touch</h4>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center">
                <input type="text" placeholder='Name*' required value={name} onChange={(e) => setName(e.target.value)} className="w-full outline-none border-b-2 border-black-400 border-opacity-40 text-black-400 p-2 mb-2" />

                <input type="text" placeholder='Company Name' className="w-full outline-none border-b-2 border-black-400 border-opacity-40 text-black-400 p-2 mb-2" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />

                <input type="email" placeholder='Email*' required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full outline-none border-b-2 border-black-400 border-opacity-40 text-black-400 p-2 mb-2" />

                <input type="number" placeholder='Phone no*' required maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full outline-none border-b-2 border-black-400 border-opacity-40 text-black-400 p-2 mb-2" />

                <textarea rows={5} cols={32} type="text" placeholder='Message*' required value={message} onChange={(e) => setMessage(e.target.value)} className="w-full outline-none border-b-2 border-black-400 border-opacity-40 text-black-400 p-2 mb-2" />
                <PrimaryButton>
                    <div className="flex items-center gap-3 justify-center">
                        Contact Us <FaArrowRightLong />
                    </div>
                </PrimaryButton>
            </form>
        </div>
    )
}

export default Form