import { useState } from "react"

export type SelectOptionType = {
    label: string
    value: string
}


type SelectType = {
    options: SelectOptionType[]
    selectedValue: string
    placeholder: string
}

function Select({ options, selectedValue, placeholder }: SelectType) {
    const [optionsVisible, setOptionsVisible] = useState(false)
    return (
        <div className="w-full relative">
            <div className="py-2 px-4 border w-full cursor-pointer" onClick={()=>setOptionsVisible(!optionsVisible)}>
                {placeholder}
            </div>
            {
                optionsVisible ? <div className="absolute left-0 top-full mt-1 bg-white border w-full z-100">
                    {options.map((element: SelectOptionType, idx: number) => (
                        <div key={idx} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                            {element.label}
                        </div>
                    ))}
                </div> : <></>
            }

        </div>
    );
}

export default Select