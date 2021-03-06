import React from 'react';
import {IoIosLink} from "react-icons/io";
import {FiHeart, FiPhone} from "react-icons/fi";
import {FaRegCalendarCheck, FaHeart} from "react-icons/fa";
import {AiOutlineEye} from "react-icons/ai";
import {Link} from "react-router-dom";

function PlaceGrid({griditems}) {
    return (
        <>
            {griditems.map((item, index) => {
                return (
                    <div className="col-lg-4 column-td-6" key={index}>
                        <div className="card-item">
                            <Link to={item.titleUrl} className="card-image-wrap">
                                <div className="card-image">
                                    <img src={item.image} className="card__img" width="362" height="242" alt="Place" />
                                    {/* <span className={item.titleIcon ? 'badge': 'badge badge-closed' }>{item.bedge}</span> */}
                                    <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                        <FaHeart />
                                    </span>
                                </div>
                            </Link>
                            <div className="card-content-wrap">
                                <div className="card-content">
                                    <Link to={item.titleUrl}>
                                        <h5 className="card-meta">
                                            <span>{item.cardTypeIcon}</span> {item.cardType}
                                        </h5>
                                        <h4 className="card-title">{item.title}
                                            <i>{item.titleIcon}</i>
                                        </h4>
                                        <p className="card-sub">
                                            {item.stitle}
                                        </p>
                                    </Link>
                                    {/* <a href={item.authorUrl} className="author-img">
                                        <img src={item.author} alt="author-img" />
                                    </a> */}
                                    <ul className="info-list padding-top-20px">
                                        {/* <li><span className="la d-inline-block"><FiPhone /></span> {item.number}</li> */}
                                        {/* <li><span className="la d-inline-block"><IoIosLink /></span>  
                                        <a href={item.websiteUrl}>
                                            {item.website}
                                        </a>
                                        </li> */}
                                        <li>
                                            <span className="la d-inline-block"><FaRegCalendarCheck /></span> {item.date}
                                        </li>
                                    </ul>
                                </div>
                                <div className="rating-row">
                                    <div className="rating-rating">
                                        {/* {item.ratings.map((rating, index) => {
                                            return (
                                                <span key={index}>{rating}</span>
                                            )
                                        })} */}
                                        <div className="edit-info-box">
                                                                        <button type="button" className="theme-btn delete-btn border-0" data-toggle="modal" data-target=".product-delete-modal">
                                                                            <span className="la">{item.deleteIcon}</span> Sil
                                                                        </button>
                                                                    </div>
                                        <span className="rating-count">
                                            {/* {item.ratingNum} */}
                                        </span>
                                    </div>
                                    <div className="listing-info">
                                        <ul>
                                            <li><span className="info__count"><AiOutlineEye /></span> {item.view}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default PlaceGrid;
