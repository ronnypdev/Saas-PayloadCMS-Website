type Button = {
  text: string
  textColor: string
  bgColor: string
  hover: string
  focus: string
  disabledButton: boolean
}

export default function Button({ text, textColor, bgColor, hover, focus, disabledButton }: Button) {
  return (
    <>
      <button
        className={`
          inline-block
          cursor-pointer
          px-4 py-2.5
          font-medium
          text-base
          mr-3
          border-[0.5px]
          rounded-[4px]
          border-(--gray-color)
          shadow-(--box-shadow)
          w-[176px]
          h-[44px]
          hover:${hover}
          focus:${focus}
          ${textColor} ${bgColor}
        `}
        disabled={disabledButton}
      >
        {text}
      </button>
    </>
  )
}
