type Button = {
  text: string
  textColor: string
  bgColor: string
  fontFamily: string
}

export default function Button({ text, textColor, bgColor, fontFamily }: Button) {
  return (
    <>
      <button className={`inline-block ${textColor} ${bgColor} ${fontFamily}`}>{text}</button>
    </>
  )
}
