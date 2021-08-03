import classNames from "classnames";

export default function Field({label, name, type, className}) {

    const formControlClassName = "rounded-lg mt-2 py-3 px-5 w-full";
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-white font-semibold text-lg">{label}</label>
            {type === "text" && (
                <input type="text" className={classNames(formControlClassName, className)} name={name} id={name}/>
            )}
            {type === "textarea" && (
                <textarea className={classNames(formControlClassName, className)} name={name} id={name}/>
            )}
            
        </div>
    )
}
