import React from 'react'

export default function Unit({ name, img }) {
    return (
        <>
            <p className="text-sm font-medium mt-2 mr-10">{name}</p>
            <img
                src={img}
                alt={name}
                className="max-h-20 object-contain rounded-md shadow-md"
            />
        </>
    )
}
