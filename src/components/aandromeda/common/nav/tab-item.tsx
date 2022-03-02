import React from 'react'
import PropTypes from 'prop-types'

export interface ITabListItem{
    value:any,
    label:string
} 
export interface ITabItem{
    items:Array<ITabListItem>,
    value:string,
    setValue:(e:any)=>void
}

export const TabItem = ({ items, value, setValue }: ITabItem) => {
    return (
        <ul className="nav nav-tabs">
            {
                items.map((item: any,index:number) => (
                    <li className="nav-item" key={index}>
                        {
                            item.value===value?
                                (<a className="nav-link active" href="#" onClick={(e:any)=>setValue(item.value)}>{item.label}</a>):
                                (<a className="nav-link" href="#" onClick={(e:any)=>setValue(item.value)}>{item.label}</a>)    
                            
                        }
                        
                    </li>
                ))
            }
        </ul>
    )
}

