import MobileNav from '../MobileNav'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import { Menu } from 'lucide-react'

type NavBar = {
  listItems: string[]
}

export default function NavBar({ listItems }: NavBar) {
  return (
    <>
      <MobileNav />
      <div className="max-w-full flex items-center justify-between px-28 pt-4 pb-0 max-mxl:pl-7 max-mxl:pr-7">
        <Logo
          logoSrcSet="/abstractly.svg"
          logoSrc="/abstractly.svg"
          logoAltText="abstractly logo"
          logoWidth={112}
          logoHeight={32}
        />
        <nav className="nav-list-wrapper ml-10 grow hidden mxl:block">
          <ul className="flex items-start">
            <li className="ml-8">Home</li>
            <li className="ml-8">Features</li>
            <li className="ml-8">Pricing</li>
            <li className="ml-8">About us</li>
            <li className="ml-8">Contact</li>
          </ul>
        </nav>
        <div className="btn-group hidden mxl:block">
          <Button
            text="Learn more"
            textColor="text-black"
            bgColor="bg-white"
            hover="bg-pale-white"
            focus="bg-pale-white"
            buttonWidth="89px"
            buttonHeight="24px"
            disabledButton={false}
          />
          <Button
            text="See pricing"
            textColor="text-white"
            bgColor="bg-indigo-700"
            hover="bg-indigo-800"
            focus="bg-indigo-800"
            buttonWidth="89px"
            buttonHeight="24px"
            disabledButton={false}
          />
        </div>
        <Menu className="hidden max-mxl:block cursor-pointer" />
      </div>
    </>
  )
}
