import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'

export interface IItemIngredients {
    title: string,
    details: any[]
}

export const ItemIngredients = ({title,details}:IItemIngredients) => {
    return (
        <div className="contact-listing padding-bottom-20px">
            <h2 className="widget-title">{title}</h2>
            <div className="title-shape"></div>
            <ul className="list-items mt-4">
                {
                    details&&details.map((item:any,index:number)=>(
                        <li>
                        <i className="color-text font-size-18"><BsCheckCircle /> </i> 
                        <a href={`/ingredient/detail/${item.ingredientName}`} >{item.ingredientName}</a> {item.unitCode} {item.value}
                      </li>
                    ))
                    
                }

            </ul>
        </div>
    )
}
