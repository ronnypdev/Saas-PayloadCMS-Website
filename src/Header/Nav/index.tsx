import MobileNav from '../MobileNav'
import Image from 'next/image'
import Button from '@/components/Button'
import { Menu } from 'lucide-react'

type NavBar = {
  logo: string
  listItems: string[]
}

export default function NavBar({ logo, listItems }: NavBar) {
  return (
    <>
      <div className="max-w-full flex items-center justify-between px-28 pt-4 pb-0 max-mxl:hidden max-mxl:pl-7 max-mxl:pr-7">
        <picture>
          <source srcSet="/abstractly.svg" />
          <Image src="/abstractly.svg" alt="abstractly logo" width={112} height={32} />
        </picture>
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
      <MobileNav />
    </>
  )
}
