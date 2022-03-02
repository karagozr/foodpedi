import React, { useState, useEffect } from "react";
import { IoIosLink } from "react-icons/io";
import { FiHeart, FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function PlaceGrid() {
  const [data, setData] = useState([]);
  // useEffect(async ()=> {
  //     let result = await fetch("http://localhost/api/list");
  //     result = await result.json();
  //     setData(result);
  // }, [])
  // console.warn("result", data);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      let result = await fetch("http://localhost/api/list");
      result = await result.json();
      setData(result);
      // ...
    }
    fetchData();
  }, []);
  console.warn("result", data);

  return (
    <>
      {data.map((item) => (
        <div className="col-lg-4 column-td-6">
          <div className="card-item">
            <Link className="card-image-wrap">
              {/* <div className="card-image">
                <img src="" className="card__img" alt="" />
              </div> */}
            </Link>
            <div className="card-content-wrap">
              <div className="card-content">
                <a href={"details/" + item.id}>
                  <h4 className="card-title">
                    {item.title}
                    {/* <i></i> */}
                  </h4>
                  <p className="card-sub">{item.description}</p>
                </a>
                {/* <a href="" className="author-img">
                  <img src="" alt="author-img" />
                </a> */}
                
              </div>
              <div className="rating-row">
                <div className="edit-info-box">
                  <button
                    type="button"
                    className="theme-btn button-success border-0 mr-1"
                  >
                    <span className="la"><FaRegEdit /></span> Düzenle
                  </button>
                  <button
                    type="button"
                    className="theme-btn delete-btn border-0"
                    data-toggle="modal"
                    data-target=".product-delete-modal"
                  >
                    <span className="la"><FaRegTrashAlt /></span> Sil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default PlaceGrid;
