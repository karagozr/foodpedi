import React from 'react'
import { Link } from 'react-router-dom'

interface ILogo{
    url:string,
    className:string
}

const Logo = ({url, className}:ILogo) => {
    return (
        <>
            <Link to="/" className={className}>
                <img src={url} alt="logo" />
            </Link>
        </>
    )
}

export default Logo; 
