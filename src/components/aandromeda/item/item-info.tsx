import React from 'react'

export interface IItemInfo {
    title: string,
    name: string,
    shortDescription: string,
    weight: string,
    barcode: string
}

export const ItemInfo = ({ title, name, shortDescription, weight, barcode }: IItemInfo) => {
    return (
        <div className="contact-listing padding-top-40px">
            <h2 className="widget-title">
                {title}
            </h2>
            <div className="title-shape"></div>
            <div className="info-list margin-top-35px">
                <ul>
                    <li className="mb-2">
                        <span>Ürün Adı:</span>
                        {name}
                    </li>
                    <li className="mb-2">
                        <span>Özet Açıklama:</span>
                        {shortDescription}
                    </li>
                    <li className="mb-2">
                        <span>Gramaj:</span>
                        {weight}
                    </li>

                    <li className="mb-2">
                        <span>Barkod:</span>
                        {barcode}
                    </li>
                </ul>
            </div>
        </div>
    )
}
