import Image from 'next/image'

type NavBar = {
  logo: string
  listItems: string[]
}

export default function NavBar({ logo, listItems }: NavBar) {
  return (
    <>
      <picture>
        <source srcSet="/abstractly.svg" />
        <Image src="/abstractly.svg" alt="abstractly logo" width={112} height={32} />
      </picture>
      <nav className="w-[1440px] max-w-full">
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
      </nav>
    </>
  )
}
