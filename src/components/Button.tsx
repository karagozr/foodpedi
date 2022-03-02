import React from 'react';
import {Link} from "react-router-dom";

interface IButton{
    text?:string,
    url:string,
    className?:string,
    children?:JSX.Element
}

export default function Button({text, url, className, children}:IButton) {
    return (
        <>
            <Link to={url} className={'theme-btn ' + className}>{children} {text}</Link>
        </>
    );
}
