import React from 'react'
import PropTypes from 'prop-types'

export interface IItemDescription {
    title: string,
    description: string
}

export const ItemDescription = ({ description, title }: IItemDescription) => {
    return (
        <div className="listing-description padding-top-40px padding-bottom-40px">
            <h2 className="widget-title">{title}</h2>
            <div className="title-shape"></div>
            <div className="section-heading mt-4">
                <p className="sec__desc font-size-16">
                    {description}
                </p>
            </div>
        </div>
    )
}

