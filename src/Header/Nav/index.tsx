import Image from 'next/image'
import Button from '@/components/Button'
import { X } from 'lucide-react'
import { Menu } from 'lucide-react'

type NavBar = {
  logo: string
  listItems: string[]
}

export default function NavBar({ logo, listItems }: NavBar) {
  return (
    <div className="max-w-full flex items-center justify-between py-[30px] max-lg:pl-8 max-lg:pr-8">
      <picture>
        <source srcSet="/abstractly.svg" />
        <Image src="/abstractly.svg" alt="abstractly logo" width={112} height={32} />
      </picture>
      <nav className="nav-list-wrapper ml-10 grow hidden lg:block">
        <ul className="flex items-start">
          <li className="ml-12">Home</li>
          <li className="ml-12">Features</li>
          <li className="ml-12">Pricing</li>
          <li className="ml-12">About us</li>
          <li className="ml-12">Contact</li>
        </ul>
      </nav>
      <div className="btn-group hidden lg:block">
        <Button
          text="Learn More"
          textColor="text-black"
          bgColor="bg-white"
          hover="bg-pale-white"
          focus="bg-pale-white"
          disabledButton={false}
        />
        <Button
          text="See Pricing"
          textColor="text-white"
          bgColor="bg-indigo-700"
          hover="bg-indigo-800"
          focus="bg-indigo-800"
          disabledButton={false}
        />
      </div>
      <Menu className="hidden max-lg:block cursor-pointer" />
    </div>
  )
}
