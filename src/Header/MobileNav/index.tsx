import Image from 'next/image'
import Button from '@/components/Button'
import { X } from 'lucide-react'

type MobileNav = {
  logo: string
  mobileListItems: string[]
}

export default function MobileNav({ logo, mobileListItems }: MobileNav) {
  return (
    <div className="fixed top-0 bottom-0 w-(--mobile-nav-width) transform-(--overlay-hidden) transition-(--overlay-transition) bg-white mxl:hidden">
      <div className="max-w-full flex flex-col items-center h-full min-h-full py-8 pb-4 px-4">
        <div className="mobile-logo-wrapper w-full flex justify-between items-center mt-8 my-6 mx-4">
          <picture>
            <source srcSet="/abstractly.svg" />
            <Image src="/abstractly.svg" alt="abstractly logo" width={112} height={32} />
          </picture>
          <X className="hidden max-mxl:block cursor-pointer" />
        </div>
        <nav className="nav-list-wrapper w-full min-h-auto grow">
          <ul className="flex flex-col items-baseline">
            <li className="my-2">Home</li>
            <li className="my-2">Features</li>
            <li className="my-2">Pricing</li>
            <li className="my-2">About us</li>
            <li className="my-2">Contact</li>
          </ul>
        </nav>
        <div className="btn-group w-full">
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
      </div>
    </div>
  )
}
