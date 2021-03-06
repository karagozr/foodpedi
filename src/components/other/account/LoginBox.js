import React, { useState, useEffect } from "react";
import SignInOptions from "./SignInOptions";
import { AiOutlineUser } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'

function LoginBox({ title, subtitle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const [ip, setIP] = useState('');

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
  }
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])

  useEffect(() => {
    if (localStorage.getItem("userinfo")) {
      history.push("/");
    }
  }, []);

  async function login() {
    console.warn(email, password);
    let item = { email, password, ip};
    let result = await fetch("http://localhost/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("userinfo", JSON.stringify(result));
    history.push("/");
  }

  return (
    <>
      <div className="billing-form-item mb-0">
        <div className="billing-title-wrap border-bottom-0 pr-0 pl-0 pb-0 text-center">
          <h3 className="widget-title font-size-28 pb-0">{title}</h3>
          <p className="font-size-16 font-weight-medium">{subtitle}</p>
        </div>
        <div className="billing-content">
          <div className="contact-form-action">
            {/* <form method="post"> */}
            <div className="row">
              <SignInOptions />

              <div className="col-lg-12">
                <div className="account-assist mt-4 mb-4 text-center">
                  <p className="account__desc">veya</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="input-box">
                  <label className="label-text">Eposta adresi</label>
                  <div className="form-group">
                    <span className="form-icon">
                      <AiOutlineUser />
                    </span>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Eposta adresinizi giriniz"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="input-box">
                  <label className="label-text">??ifreniz</label>
                  <div className="form-group">
                    <span className="form-icon">
                      <FiLock />
                    </span>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="??ifreniz"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <div className="custom-checkbox mr-0 d-flex align-items-center justify-content-between">
                    <div>
                      <input type="checkbox" id="chb1" />
                      <label htmlFor="chb1">Beni Hat??rla</label>
                    </div>
                    <div>
                      <Link
                        to="/recover"
                        className="color-text font-weight-medium"
                      >
                        ??ifremi Unuttum?
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="btn-box margin-top-20px margin-bottom-20px">
                <input className="form-control" type="hidden" value={ip} onChange={(e)=>setIP(e.target.value)} name="ip" />
                  <button
                    onClick={login}
                    className="theme-btn border-0"
                    type="submit"
                  >
                    Giri?? Yap??n??z
                  </button>
                </div>
              </div>
              <div className="col-lg-12">
                <p className="font-weight-medium">
                  ??ye de??il misiniz?{" "}
                  <Link to="/sign-up" className="color-text">
                    {" "}
                    Kay??t ol
                  </Link>
                </p>
              </div>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginBox;
