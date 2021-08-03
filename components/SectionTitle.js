import classNames from "classnames";

export default function SectionTitle({ children, className, left }) {
    
    return (
        
        <h2 className={classNames("text-2xl semi-bold font-mono", className, !left && "text-center")}>{children}</h2>
        
    )
}
