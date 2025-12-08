import React from 'react'


type LinkType = {
    value: string
    label: string
}


function Link({ label, value }: LinkType) {
    return (
        <div className='underline cursor-pointer' onClick={() => window.location.href = value} >{label}</div>
    )
}

export default Link