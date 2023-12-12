/* eslint-disable react/prop-types */
import { useId } from "react";
import { IconContext } from "react-icons";

const Input = ({ icon: Icon, label, type, name, value, onChange, required,placeholder }) => {
    const id = useId()
    return (
        <div className="mb-2">
            <label className="form-label" htmlFor={id}>
                <IconContext.Provider value={{ className: "react-icon" }}>
                    <Icon className="me-2"/>
                </IconContext.Provider>
                {label}:
            </label>
            <input
                type={type}
                className="form-control"
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
                autoComplete="off"
                id={id}
            />
        </div>
    );
};

export default Input;
