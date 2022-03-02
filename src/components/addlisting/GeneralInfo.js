import React, {useState} from 'react';
import { BsPencilSquare, BsQuestion, BsPencil, BsImage } from 'react-icons/bs'
import { AiOutlineTags } from 'react-icons/ai'
import Select from "react-select";
import { useHistory } from "react-dom";

const state = {
    title: 'Ürün Bilgilerini Giriniz',
    selectedCatOp: null,
    categories: [
        {
            value: 0,
            label: 'Kategori seçiniz'
        },
        {
            value: 2,
            label: 'Yiyecekler'
        },
        {
            value: 3,
            label: 'İçecekler'
        },
        {
            value: 4,
            label: 'Meyveler'
        },
        {
            value: 5,
            label: 'Sebzeler'
        },
        {
            value: 6,
            label: 'Temel Gıdalar'
        },
        {
            value: 7,
            label: 'Atıştırmalık'
        },
        {
            value: 8,
            label: 'Dondurma'
        },
        {
            value: 9,
            label: 'Sütler'
        },
        {
            value: 10,
            label: 'Yağlar'
        },
        {
            value: 11,
            label: 'Kuruyemiş'
        },
        {
            value: 12,
            label: 'Baharatlar'
        },
        {
            value: 13,
            label: 'Şarküteri'
        },
        {
            value: 14,
            label: 'Soslar'
        },
        {
            value: 15,
            label: 'Konserveler'
        },
        {
            value: 16,
            label: 'Şarküteri'
        },
        {
            value: 17,
            label: 'Unlu Mamüller'
        },
        {
            value: 18,
            label: 'Sirkeler'
        },
        {
            value: 19,
            label: 'Tatlılar'
        },
        {
            value: 20,
            label: 'Turşular'
        },
        {
            value: 21,
            label: 'Çorbalar'
        },
        {
            value: 22,
            label: 'Dondurulmuş'
        },
        {
            value: 23,
            label: 'Yoğurt'
        },
        {
            value: 24,
            label: 'Peynir'
        },
        {
            value: 25,
            label: 'Kahvaltılık Gevrek'
        },
        {
            value: 26,
            label: 'Glutensiz'
        },
        {
            value: 27,
            label: 'Çikolata'
        },
        {
            value: 28,
            label: 'Hazır Yemek'
        },
        {
            value: 29,
            label: 'Kekler'
        },
        {
            value: 30,
            label: 'Vegan'
        },
        {
            value: 31,
            label: 'Krema'
        },
        {
            value: 32,
            label: 'Helva'
        },
    ]
}

function GeneralInfo() {

    const [formData, setFormData] = React.useState()
    const [protitle, setTitle]=useState("")
    const [prodescription, setDescription]=useState("")
    const [prokeywords, setKeywords]=useState("")
    //const history=useHistory();

    //let user = JSON.parse(localStorage.getItem('userinfo'))
    //console.log(user.id);
    async function addProduct() {
        let item = {protitle, prodescription, prokeywords}
        console.warn(item); 

        const formData = new FormData();
        formData.append('title', protitle);
        formData.append('description', prodescription);
        formData.append('keywords', prokeywords);
        //formData.append('user_id', user.id);

        let result = await fetch('http://localhost/api/addproduct', {
            method: 'POST',
            body:formData
        });
        //history.push("/");
    }
    

    return (
        <>
            <div className="billing-form-item">
                <div className="billing-title-wrap">
                    <h3 className="widget-title pb-0">
                        {state.title}
                        </h3>
                    <div className="title-shape margin-top-10px"></div>
                </div>
                <div className="billing-content">
                    <div className="contact-form-action">
                        {/* <form method="post"> */}
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Ürünün Başlığı</label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <BsPencilSquare />
                                            </span>
                                            <input className="form-control" type="text" name="title" value={protitle} onChange={(e)=>setTitle(e.target.value)} placeholder="Ürün başlığını giriniz" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text d-flex align-items-center ">Anahtar kelimeler
                                            <i className="la tip ml-1" data-toggle="tooltip" data-placement="top" title="Azami 15 anahtar kelime giriniz">
                                                <BsQuestion />
                                            </i>
                                        </label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <AiOutlineTags />
                                            </span>
                                            <input className="form-control" type="text" name="keywords" value={prokeywords} onChange={(e)=>setKeywords(e.target.value)} placeholder="Anahtar kelimeler virgülle ayırılmalı" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Açıklama</label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <BsPencil />
                                            </span>
                                            <textarea className="message-control form-control" name="description" placeholder="Ürünün açıklamasını giriniz" onChange={(e)=>setDescription(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Kategori</label>
                                        <div className="form-group">
                                            <Select
                                                placeholder="Kategori Seçiniz"
                                                options={state.categories}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Ürün Resmi</label>
                                        <div className="form-group">
                                        <span className="la form-icon">
                                            <BsImage />
                                        </span>
                                        <input className="form-control" type="file" name="image" placeholder="Anahtar kelimeler virgülle ayırılmalı" multiple />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                <div className="btn-box mt-4">
                                        <button type="submit" className="theme-btn border-0" onClick={addProduct}>ürünü ekle</button>
                                    </div>
                                </div>
                            </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
            <p>&nbsp;</p>
        </>
    );
}

export default GeneralInfo;
