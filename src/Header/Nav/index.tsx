import Logo from '@/components/Logo'
import Button from '@/components/Button'

type NavBar = {
  listItems?: string[]
}

export default function NavBar({ listItems }: NavBar) {
  return (
    <>
      <div className="max-w-full w-full flex items-center justify-between mxl:px-28 mxl:pt-4 mxl:pb-0">
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
      </div>
    </>
  )
}
