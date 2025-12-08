import React from 'react'


type InputType = {
    placeholder : string
}

function Input({placeholder}:InputType) {
  return (
    <input placeholder={placeholder} className="text-md px-4 py-2 border w-full" />
  )
}

export default Input