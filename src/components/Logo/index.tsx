import Image from 'next/image'

type Logo = {
  logoSrcSet: string
  logoSrc: string
  logoAltText: string
  logoWidth: number
  logoHeight: number
}

export default function Logo({ logoSrcSet, logoSrc, logoAltText, logoWidth, logoHeight }: Logo) {
  return (
    <picture>
      <source srcSet={logoSrcSet} />
      <Image src={logoSrc} alt={logoAltText} width={logoWidth} height={logoHeight} />
    </picture>
  )
}
