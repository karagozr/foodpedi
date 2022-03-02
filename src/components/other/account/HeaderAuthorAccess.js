import React, { useState } from "react";
import {
  FiPlus,
  FiPlusCircle,
  FiBookmark,
  FiSearch,
  FiLogIn,
  FiUserPlus,
} from "react-icons/fi";
import { BsListCheck, BsQuestion, BsGear, BsPower, BsBookmark } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate  as useHistory } from "react-router-dom";
import Button from "../../common/Button";
import userimg from "../../../images/profil.jpg";

export default function HeaderAuthorAccess() {
  const [AuthorAccessOpen, setAuthorAccessOpen] = useState(false);

  let user = JSON.parse(localStorage.getItem('userinfo'))
  const history=useHistory();
  function logOut() {
      localStorage.clear();
      history.push("/");
      setAuthorAccessOpen(!AuthorAccessOpen);
  }

  return (
    <>
      <div className="logo-right-content">
        <ul className="author-access-list">
          {localStorage.getItem("userinfo") ? 
            <>
              <li>
                <Button text="ürün ekle" url="/add-listing/new">
                  <FiPlusCircle />
                </Button>

                <div
                  className="side-user-menu-open" title={user && user.name}
                  onClick={() => setAuthorAccessOpen(!AuthorAccessOpen)}
                >
                  <AiOutlineUser />
                </div>
              </li>
            </>
            :
            <>
            <li>
            <Button text="giriş yap" className="bg-success" url="/login">
              <FiLogIn />
            </Button>{" "}
            &nbsp;
            <Button text="kayıt ol" url="/sign-up">
              <FiUserPlus />
            </Button>
          </li>
            </>
          }          
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
              localStorage.getItem('userinfo') ?
              <>
                <h4 className="su__name">{user.name}</h4>
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
                <FiPlus />
              </Link>
            </div>
          </div>

          <ul className="side-menu-ul">
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
              <Link to="/isaret">
                <BsBookmark className="user-icon" /> Yer İşaretleri
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <BsListCheck className="user-icon" /> Ürünlerim
              </Link>
            </li>
            <li>
              <Link to="/add-listing/new">
                <FiPlusCircle className="user-icon" /> ürün ekle
              </Link>
            </li>
            {/* <li>
              <Link to="#">
                <BsGear className="user-icon" /> Ayarlar
              </Link>
            </li> */}
            <li>
              <div className="dropdown-divider"></div>
            </li>
            <li>
              <Link to="#" onClick={logOut}>
                <BsPower className="user-icon" /> Çıkış Yap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
