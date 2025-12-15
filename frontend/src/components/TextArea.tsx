
type TextAreaType = {
    placeholder: string
    rows: number
    maxLength: number
}

function TextArea({ placeholder, rows, maxLength }: TextAreaType) {
    return (
        <textarea placeholder={placeholder} className="text-md px-4 py-2 border w-full" rows={rows} maxLength={maxLength}/>
    )
}

export default TextArea