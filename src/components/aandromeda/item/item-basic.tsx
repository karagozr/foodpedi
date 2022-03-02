import React from 'react';
import {IoIosLink} from "react-icons/io";
import {FiHeart, FiPhone} from "react-icons/fi";
import {FaRegCalendarCheck} from "react-icons/fa";
import {AiOutlineEye} from "react-icons/ai";
import {Link} from "react-router-dom";
import './item-basic.css'
export const ItemBasic = ({datasource}:any) => {
    console.log("ddd : ",datasource)
    return (
        <>
            {datasource.map((item:any, index:number) => {
                return (
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={index}>
                        <div className="card-item">
                            <Link to={`/item/detail/${item.id}`} className="card-image-wrap">
                                <div className="card-image">
                                    <img src={item.imageUrl} className="item-card-img"  alt="Place" />
                                    {/* <span className={item.titleIcon ? 'badge': 'badge badge-closed' }>{item.bedge}</span> */}
                                    <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                        <FiHeart />
                                    </span>
                                </div>
                            </Link>
                            <div className="card-content-wrap">
                                <div className="card-content">
                                    <Link to={item.categoryId}>
                                        <h5 className="card-meta">
                                            <span></span> {item.categoryName}
                                        </h5>
                                    </Link>
                                    <Link to={`/item/detail/${item.id}`}>
                                        <h4 className="card-title">{item.name}
                                            <i>{item.titleIcon}</i>
                                        </h4>
                                        <p className="card-sub">
                                            {item.shortDescription}
                                        </p>
                                    </Link>
                                    <ul className="info-list padding-top-20px" style={{paddingLeft:0}}>
                                        <li>
                                            <span className="la d-inline-block"><FaRegCalendarCheck /></span> {item.postDate}
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
                                        <span className="rating-count">
                                        {
                                        item.state===0?(
                                            <Link to={`/item/update/${item.id}`}>
                                                Düzenle
                                            </Link>
                                        ):null
                                        }   
                                        </span>
                                    </div>
                                    <div className="listing-info">
                                        <ul>
                                            <li><span className="info__count"><AiOutlineEye /></span> {item.displayCount}</li>
                                            <li>
                                                <span className="info__save" data-toggle="tooltip" data-placement="top" title="Bookmark">
                                                    <FiHeart />
                                                </span>
                                                {item.likeCount}
                                            </li>
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
