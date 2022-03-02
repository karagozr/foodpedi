import React from 'react'

interface ISectionsHeading{
    children?:any, 
    title?:string,
    desc?:string,
    titleClass?:string,
    descClass?:string
}

export default function SectionsHeading({ children, title, desc, titleClass, descClass }:ISectionsHeading) {
    return (
        <>
            <div className="section-heading">
                    <h2 className={'sec__title '+titleClass}>{title}</h2>
                    <p className={'sec__desc '+descClass}>{desc}</p>
            </div>
            {children}
        </>
    )
}
