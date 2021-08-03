import Logo from "./Logo"
import Nav from "./Nav"
import Button from "./Button"
import Link from "next/link"
import { useState } from "react"
import classNames from "classnames"

export default function Navbar() {
    const [offCanvas, setOffCanvas] = useState(false);

    return (
        <>
          <div className="flex items-center py-10">
              <div className="w-3/12">
                <Logo />
              </div>
              <div className="w-6/12 hidden md:block">
                <Nav scheme="light" dir="horizontal"/>
              </div>
              <div className="w-3/12 text-right hidden md:block">
                <Button pill variant="outline-yellow"><Link href="#contact"><a>Kontak</a></Link></Button>
              </div>
              <div className="w-9/12 md:hidden text-right">
                <img className="inline-block" src="/menu.svg" onClick={() => setOffCanvas(true)} />
              </div>
          </div>
          <div className={classNames("fixed bg-contact z-10 top-0 h-full w-80 p-10 md:hidden transition-all", offCanvas ? "right-0" : "-right-full")}>
              <img src="/arrow-left.svg" className="absolute top-0 left-0 m-5" alt="" onClick={() => setOffCanvas(false)}/>
              <Nav scheme="dark" dir="vertical"/>
          </div>
        </>
    )
}
