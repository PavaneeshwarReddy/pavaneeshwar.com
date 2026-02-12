
type ButtonType = {
    placeholder : string
    width?: "full" | "fit"
}

function Button({placeholder, width="fit"}: ButtonType) {
    return (
        <div className={`p-4 bg-black text-white w-${width} rounded-full cursor-pointer text-center`}>
            {placeholder}
        </div>
    )
}

export default Button