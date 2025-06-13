'use client'
import { useState } from 'react'
import MobileNav from './MobileNav'
import NavBar from './Nav'
import { Menu } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const menuToggle: React.MouseEventHandler<SVGSVGElement> = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen)
  }

  return (
    <header className="w-(--main-container) max-w-full mx-auto">
      <div className="flex items-center justify-center max-mxl:mt-3.5 max-mxl:pl-7 max-mxl:pr-7">
        <NavBar />
        <Menu className="hidden max-mxl:block cursor-pointer" onClick={menuToggle} />
      </div>
      <MobileNav toggleMenu={menuOpen} />
    </header>
  )
}
