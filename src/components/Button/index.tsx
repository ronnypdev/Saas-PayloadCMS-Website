type Button = {
  text: string
  textColor: string
  bgColor: string
  hover: string
  focus: string
  buttonWidth?: string
  buttonHeight?: string
  disabledButton: boolean
}

export default function Button({
  text,
  textColor,
  bgColor,
  hover,
  focus,
  buttonWidth,
  buttonHeight,
  disabledButton,
}: Button) {
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
          w-[${buttonWidth}]
          h-[${buttonHeight}]
          max-mxl:w-full
          max-mxl:mb-4
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
