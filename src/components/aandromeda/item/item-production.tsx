import React from 'react'

export interface IItemProduction {
    title: string,
    brandName?: string,
    madeCountry?: string,
    madeState?: string,
    madeCity?: string,
    webPageUrl?: string,
    brandLogoUrl?:string
}



export const ItemProduction = ({ title, brandName,brandLogoUrl, madeCountry, madeState, madeCity, webPageUrl }: IItemProduction) => {
    return (
        <div className="contact-listing padding-top-40px">
            <h2 className="widget-title">
                {title}
            </h2>
            <div className="title-shape"></div>
            <div className="info-list margin-top-35px">

                {brandLogoUrl?(<div className="productlogo" style={{
                    position: "absolute",
                    right: "100px",
                    marginTop: "-50px"
                }}>
                    <a href="/cocacola">
                        <img src={brandLogoUrl} width="90" />
                    </a>
                </div>):null}
                <ul>
                    <li className="mb-2">
                        <span>Marka :</span>
                        {brandName}
                    </li>
                    <li className="mb-2">
                        <span>Menşei :</span>
                        {madeCountry}
                    </li>
                    <li className="mb-2">
                        <span>Üretim Yeri :</span>
                        {madeCountry}, {madeState}, {madeCity}
                    </li>
                    <li className="mb-2">
                        <span>Web Adresi :</span>
                        {webPageUrl}
                    </li>

                </ul>
            </div>
        </div>
    )
}
