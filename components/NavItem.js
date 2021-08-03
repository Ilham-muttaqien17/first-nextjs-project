import classNames from "classnames";

export default function NavItem({children, scheme}) {
    const schemes ={
        light: "hover:text-opacity-100 text-opacity-60",
        dark: ""
    }

    const schemePicked = schemes[scheme];
    return (
        <div>
            <li>
                <a className={classNames("text-white text-lg transition font-semibold", schemePicked)}>
                    {children}
                </a>
            </li>
        </div>
    )
}
