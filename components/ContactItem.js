
export default function ContactItem({label, value, icon}) {
    return (
        <div className="flex pt-8 items-start">
            <img className="w-8" src={icon} alt="" />
            <div className="ml-4">
                <div className="text-sm font-semibold mb-1 text-white">{label}</div>
                <div className="text-lg text-white">{value}</div>
            </div>
        </div>
    )
}
