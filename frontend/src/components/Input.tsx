import type React from "react"

type InputType = {
    placeholder : string
    type?: React.HTMLInputTypeAttribute
}

function Input({placeholder, type="text"}:InputType) {
  return (
    <input placeholder={placeholder} className="text-md px-4 py-2 border w-full" type={type}/>
  )
}

export default Input