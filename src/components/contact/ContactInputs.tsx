interface ContactInputProps {
    name: string;
    index: number;
    label: string;
    placeholder: string;
    type: string;
}

const ContactInputs = ( { name, index, label, placeholder, type }:  ContactInputProps) => {
    if (name !== "message") {
        return (
            <div className="contact__form-div" key={index}>
                <label className="contact__form-tag">{label}</label>
                <input type={type} className="contact__form-input" placeholder={placeholder} name={name} />
            </div>
        )
    }
    else {
        return (
            <div className="contact__form-div contact__form-area" key={index}>
                <label className="contact__form-tag">{label}</label>
                <textarea
                    name={name}
                    cols={30}
                    rows={10}
                    className="contact__form-input"
                    placeholder={placeholder} ></textarea>
            </div>

        )
    }
}

export default ContactInputs