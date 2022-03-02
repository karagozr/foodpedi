import React from 'react';
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { BsPencil } from 'react-icons/bs'
import { RiSendPlane2Line } from 'react-icons/ri'

function AskQuestionField({title}) {
    return (
        <>
            <div className="faq-forum">
                <div className="billing-form-item">
                    {title ? (
                        <div className="billing-title-wrap">
                            <h3 className="widget-title pb-0">{title}</h3>
                            <div className="title-shape margin-top-10px"></div>
                        </div>
                    ) : ''}
                    <div className="billing-content">
                        <div className="contact-form-action">
                            <form method="post">
                                <div className="input-box">
                                    <label className="label-text">İsminiz</label>
                                    <div className="form-group">
                                        <span className="form-icon"><AiOutlineUser /></span>
                                        <input className="form-control" type="text" name="text" placeholder="İsminiz" />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <label className="label-text">Epostanız</label>
                                    <div className="form-group">
                                        <span className="form-icon"><FaRegEnvelope /></span>
                                        <input className="form-control" type="text" name="name" placeholder="Epostanız" />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <label className="label-text">Mesajınız</label>
                                    <div className="form-group">
                                        <span className="form-icon"><BsPencil /></span>
                                        <textarea className="message-control form-control" name="message" placeholder="Mesajınızı yazınız"></textarea>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <button type="button" className="theme-btn border-0">
                                        <i><RiSendPlane2Line /></i> mesajınızı gönderiniz
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AskQuestionField;