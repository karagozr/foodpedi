import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import SignInOptions from "./SignInOptions";
import {Link} from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { FiLock } from 'react-icons/fi'
import axios from 'axios'

function SignUpBox({title, subtitle}) {

    const [name, setName]=useState("")
    const [lastname, setLastname]=useState("")
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [passwordapprove, setPasswordapprove]=useState("")
    const [email, setEmail]=useState("")
    const history=useHistory();

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

    async function signUp() {
        let item = {name,lastname,username,email,password,passwordapprove,ip}
        console.warn(item);

        let result = await fetch('http://localhost/api/register', {
            method: 'POST',
            body:JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json();
        localStorage.setItem("userinfo", JSON.stringify(result));
        history.push("/");


    }
    return (
        <>
            <div className="billing-form-item mb-0">
                <div className="billing-title-wrap border-bottom-0 pr-0 pl-0 pb-0 text-center">
                    <h3 className="widget-title font-size-28 pb-0">
                        {title}
                    </h3>
                    <p className="font-size-16 font-weight-medium">
                        {subtitle}
                    </p>
                </div>
                <div className="billing-content">
                    <div className="contact-form-action">
                        {/* <form> */}
                            <div className="row">

                                <SignInOptions />

                                <div className="col-lg-12">
                                    <div className="account-assist mt-4 mb-4 text-center">
                                        <p className="account__desc">veya</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">İsim</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <AiOutlineUser />
                                                </span>
                                            <input className="form-control" type="text" value={name} onChange={(e)=>setName(e.target.value)} name="name" placeholder="İsminiz" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Soyad</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <AiOutlineUser />
                                                </span>
                                            <input className="form-control" type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} name="lastname" placeholder="Soyadınız" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Kullanıcı Adı</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <AiOutlineUser />
                                                </span>
                                            <input className="form-control" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} name="username" placeholder="Kullanıcı Adı" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Eposta</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <FaRegEnvelope />
                                                </span>
                                            <input className="form-control" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Eposta adresiniz" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Şifre</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <FiLock />
                                                </span>
                                            <input className="form-control" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="Şifreniz" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Şifrenizi Onaylayınız</label>
                                        <div className="form-group">
                                                <span className="form-icon">
                                                    <FiLock />
                                                </span>
                                            <input className="form-control" type="password" value={passwordapprove} onChange={(e)=>setPasswordapprove(e.target.value)} name="passwordapprove" placeholder="Şifrenizi onaylayınız" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <div className="custom-checkbox d-block mr-0">
                                            <input type="checkbox" id="chb13" name="privacy" />
                                            <label htmlFor="chb13"><Link to="#" className="color-text">Gizlilik Sözleşmesini</Link> onaylıyorum</label>
                                        </div>
                                        <div className="custom-checkbox d-block mr-0">
                                            <input type="checkbox" id="chb14" name="terms" />
                                            <label htmlFor="chb14"><Link to="#" className="color-text">Kullanım Şartlarını</Link>  onaylıyorum</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="btn-box margin-top-20px margin-bottom-20px">
                                    <input className="form-control" type="hidden" value={ip} onChange={(e)=>setIP(e.target.value)} name="ip" />
                                        <button className="theme-btn border-0" type="submit" onClick={signUp}>
                                            Kayıt Ol
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <p className="font-weight-medium">
                                        Hesabınız var mı? <Link to="/login" className="color-text">Giriş Yap</Link>
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

export default SignUpBox;