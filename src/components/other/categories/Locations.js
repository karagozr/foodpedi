import React from 'react';
import {Link} from "react-router-dom";

function Locations({locationitems}) {
    return (
        <>
            <div className="row">
                {locationitems.map((item, index) => {
                    return (
                        <div className="col-lg-3 column-td-6" key={index}>
                            <div className="location-item">
                                <div className="loc-img">
                                    <Link to={item.titleUrl}>
                                        <img src={item.img} alt="flag" />
                                    </Link>
                                </div>
                                <Link to={item.titleUrl} className="loc-name">
                                    {item.title}
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Locations;
