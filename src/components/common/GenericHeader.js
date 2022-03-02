import React from 'react';
import {Link} from "react-router-dom";
import {BsGrid, BsListUl} from "react-icons/bs";
import Select from "react-select";

const state = {
    selectedCatOp: null,
    title: '30 ürün bulunmakta',
    navs: [
        // {
        //     path: '/listing-list',
        //     icon: <BsListUl />,
        //     active: false,
        // },
        // {
        //     path: '/listing-grid',
        //     icon: <BsGrid />,
        //     active: true,
        // }
    ],
    shortby: [
        {
            value: 0,
            label: 'Sıralama'
        },
        {
            value: 1,
            label: 'Varsayılan'
        },
        {
            value: 2,
            label: 'Puan'
        },
        {
            value: 3,
            label: 'İncelenen'
        },
        {
            value: 4,
            label: 'Popüler'
        },
    ]
}

function GenericHeader() {
    return (
        <>
            <div className="generic-header margin-bottom-30px">
                <p className="showing__text text-left">
                    {state.title}
                </p>
                <div className="short-option mr-3">
                    <Select
                        placeholder="Sıralama"
                        options={state.shortby}
                    />
                </div>
                <ul className="generic-nav">
                    {state.navs.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.path} className={ item.active ? 'active': ' '}>
                                    <span className="d-inline-block">
                                        {item.icon}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}

export default GenericHeader;
