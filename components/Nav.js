import NavItem from "./NavItem"
import Link from "next/link"
import classNames from "classnames"

export default function Nav({dir, scheme}) {
    const dirs = {
        horizontal: "justify-center space-x-10",
        vertical: "flex-col space-y-6 p-4"
    }
    const pickedDir = dirs[dir];
    return (
        <div>
            <ul className={classNames("flex", pickedDir)}>
                <NavItem scheme={scheme}><Link href="#profile"><a>Profile</a></Link></NavItem>
                <NavItem scheme={scheme}><Link href="#skills"><a>Skills</a></Link></NavItem>
                <NavItem scheme={scheme}><Link href="#projects"><a>Projects</a></Link></NavItem>
                <NavItem scheme={scheme}><Link href="#contact"><a>Contact</a></Link></NavItem>
              </ul>
        </div>
    )
}
