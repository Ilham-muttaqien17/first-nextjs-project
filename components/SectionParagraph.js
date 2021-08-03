import classNames from "classnames";

export default function SectionParagraph({children, className, left}) {
    return (
        <p className={classNames(
                "text-lg mt-2",
                className,
                !left && "text-center"
            )}>
            {children}
        </p>

    )
}
