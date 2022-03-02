import React from 'react';
import {Link} from "react-router-dom";

interface ICategoryItem {
    id?:string,
    name?:string,
    description?:string,
    imageUrl?:string|undefined
}


interface ICategoryItems {
    categoryItems:Array<ICategoryItem>
}

export const CategoryItem = ({categoryItems}:ICategoryItems) => {
   
    return (
        <>
            <div className="row">
                {categoryItems && categoryItems.map((item, index) => {
                    return (
                        <div className="col-lg-3 column-td-6" key={index}>
                            <div className="location-item">
                                <div className="loc-img">
                                    <Link to={'/items/'+item.id}>
                                        <img src={item.imageUrl} alt="flag" />
                                    </Link>
                                </div>
                                <Link to={'/items/'+item.id} className="loc-name">
                                    {item.name}
                                </Link>
                                <div>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

