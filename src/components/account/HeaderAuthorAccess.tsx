import React, { useState } from "react";
import {
  FiPlus,
  FiPlusCircle,
  FiBookmark,
  FiUser,
  FiSearch,
  FiLogIn,
  FiUserPlus,
} from "react-icons/fi";
import { BsListCheck, BsQuestion, BsGear, BsPower, BsBookmark } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate as useHistory } from "react-router-dom";
import Button from "../Button";
import userimg from "../../images/profil.png";

import './HeaderAuthorAccess.css'

import { userValue } from "../../core"
import { useRecoilValue } from "recoil"
import { useAccount } from "../../hooks";

export const HeaderAuthorAccess = () => {
  const [AuthorAccessOpen, setAuthorAccessOpen] = useState(false);
  const user = useRecoilValue(userValue);
  const acoount = useAccount();
  let localData: any = localStorage.getItem('userinfo')

  console.log("user Ç ", user);

  //let user = JSON.parse(localData)
  const history: any = useHistory();
  function logOut() {
    localStorage.clear();
    history.push("/");
    setAuthorAccessOpen(!AuthorAccessOpen);
  }

  return (
    <>
      <div className="logo-right-content">
        <ul className="author-access-list">

          <>
            <li>
              <div
                className="side-user-menu-open" title={user.token && user.fullname}
                onClick={() => setAuthorAccessOpen(!AuthorAccessOpen)}
              >
                <AiOutlineUser />
              </div>
            </li>
          </>

        </ul>
      </div>

      {/* Side User panel */}
      <div
        className={
          AuthorAccessOpen ? "side-user-panel active" : "side-user-panel"
        }
      >
        <div className="humburger-menu">
          <div
            className="humburger-menu-lines side-menu-close"
            onClick={() => setAuthorAccessOpen(!AuthorAccessOpen)}
          ></div>
        </div>
        <div className="side-menu-wrap side-user-menu-wrap">
          <div className="side-user-img">
            <img src={userimg} alt="User" />

            {
              user ?
                <>
                  <h4 className="su__name">{user.username}</h4>
                </>
                :
                <>
                  <h4 className="su__name"></h4>
                </>
            }
            <div className="avatar-icon">
              <Link
                to="/dashboard"
                data-toggle="tooltip"
                data-placement="top"
                title="Change Avatar"
              >
                {" "}

              </Link>
            </div>
          </div>

          <ul className="side-menu-ul">
            
            {user.token ? (user.userType==="User"?privateMenu():(user.userType==="Admin"?adminMenu():null)) : null}

            {
              user.token ?
                <li>
                  <Link to="#" onClick={logOut}>
                    <BsPower className="user-icon" /> Çıkış Yap
                  </Link>
                </li> :
                (<li >
                  <Link to="/login">
                    <FiLogIn className="user-icon" /> Giriş Yap
                  </Link>

                  &nbsp;
                  <Link to="/new-account">
                    <FiUserPlus className="user-icon" /> Kayıt Ol
                  </Link>

                </li>)
            }
          </ul>
        </div>
      </div>
    </>
  );
}


const privateMenu = () => {
  return (
    <React.Fragment>
      <li>
        <Link to="/user-profile">
          <AiOutlineUser className="user-icon" /> Profilim
        </Link>
      </li>
      <li>
        <Link to="/password">
          <RiLockPasswordLine className="user-icon" /> Şifre İşlemleri
        </Link>
      </li>
      <li>
        <div className="dropdown-divider"></div>
      </li>

      <li>
        <Link to="/isaret">
          <BsBookmark className="user-icon" /> Beğendiklerim
        </Link>
      </li>
      <li>
        <div className="dropdown-divider"></div>
      </li>

      <li>
        <Link to="/user/my-items">
          <BsListCheck className="user-icon" /> Ürünlerim
        </Link>
      </li>
      <li>
        <Link to="/item/add">
          <FiPlusCircle className="user-icon" /> Ürün ekle
        </Link>
      </li>
      <li>
        <div className="dropdown-divider"></div>
      </li>
    </React.Fragment>
  )
}

const adminMenu = () => {
  return (
    <React.Fragment>
      <li>
        <Link to="/isaret">
          <BsBookmark className="user-icon" /> Onay Listesi
        </Link>
      </li>
      <li>
        <div className="dropdown-divider"></div>
      </li>

      <li>
        <Link to="/user/my-items">
          <BsListCheck className="user-icon" /> Kategori Ekle
        </Link>
      </li>
      <li>
        <Link to="/item/add">
          <FiPlusCircle className="user-icon" /> Ürün ekle
        </Link>
      </li>
      <li>
        <div className="dropdown-divider"></div>
      </li>
      <li>
        <Link to="/isaret">
          <BsBookmark className="user-icon" /> Admin Menü
        </Link>
      </li>
      <li>
        <div className="dropdown-divider"></div>
      </li>
    </React.Fragment>
  )
}