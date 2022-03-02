import React, {useEffect, useState} from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Link } from "react-router-dom";
import sectiondata from "../../store/store";
import {navigation} from '../../app-navigation'
import './Navbar.css'

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false)
    const navRef:any = React.useRef();

    useEffect(() => {
       
        document.addEventListener('click', function (e) {
                for ( let target:any = e.target; target && target !== this; target = target.parentNode ) {
                    if (target.matches('.side-menu-ul li')) {
                        console.log('target : ',target,e)
                        target.classList.toggle('active');
                        break;
                    }
                }
            }, false
        )
    })

    return (
        <>
            <div className="main-nav-menu-content main-menu-content">
                <nav ref={navRef}>
                    <ul>
                        {navigation.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.path}>{item.text} {item.items ? <FiChevronDown /> : ''}</Link>
                                    {
                                        item.items ? (
                                            <ul className="dropdown-menu-item">
                                                {item.items.map((ditem, index2) => {
                                                    return (
                                                        <li key={index2}><Link to={ditem.path}>{ditem.text}</Link></li>
                                                    )
                                                })}
                                        </ul>
                                        ) : ''
                                    }

                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
            <div className="side-menu-open" onClick={() => setNavOpen(!navOpen)}>
                <span className="menu__bar"></span>
                <span className="menu__bar"></span>
                <span className="menu__bar"></span>
            </div>
            <div className={navOpen ? 'side-nav-container active' : 'side-nav-container'}>
                <div className="humburger-menu">
                    <div className="humburger-menu-lines side-menu-close" onClick={() => setNavOpen(!navOpen)}></div>
                </div>
                <div className="side-menu-wrap">
                    <ul className="side-menu-ul">

                        {navigation.map((item, i) => {
                            return (
                                <li key={i}>
                                     <Link to={item.path}>{item.text} {item.items ? <FiChevronDown /> : ''}</Link>
                                    {
                                        item.items ? (
                                            <ul className="dropdown-menu-item">
                                                {item.items.map((ditem, index2) => {
                                                    return (
                                                        <li key={index2}><Link to={ditem.path}>{ditem.text}</Link></li>
                                                    )
                                                })}
                                        </ul>
                                        ) : ''
                                    }

                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </>
    )
}
