import React from 'react';
import { GiPositionMarker } from 'react-icons/gi'
import { FaRegEnvelope } from 'react-icons/fa'
import { FiPhone, FiExternalLink } from 'react-icons/fi'

function ContactInfo({contactinfos}) {
    return (
        <>
            <div className="contact-listing padding-top-40px padding-bottom-40px">
                <h2 className="widget-title">
                    Üretici Bilgileri
                </h2>
                <div className="title-shape"></div>
                <div className="info-list margin-top-35px padding-bottom-35px">
                    <style jsx>
                        {
                            `
                            .productlogo {
                                position: absolute;
                                right: 100px;
                                margin-top: -50px;
                            }
                            `
                        }
                    </style>
                    <div className="productlogo">
                        <a href="/cocacola">
                            <img src="https://www.coca-cola.com/content/dam/brands/tw/coca-cola/image/coke-logo.png" width="90" />
                        </a>
                    </div>
                    <ul>
                        {contactinfos.address ? (
                            <li className="mb-2"><span>Üretici:</span>
                                Coca Cola
                            </li>
                        ) : ''}
                        {contactinfos.email ? (
                            <li className="mb-2"><span>Üretim Merkezi:</span>
                                Atlanta, Georgia, ABD
                            </li>
                        ) : ''}
                        {contactinfos.number ? (
                            <li className="mb-2"><span>Menşei:</span>
                                ABD
                            </li>
                        ) : '' }
                    </ul>
                </div>

                <div className="section-block"></div>
                <div className="social-contact padding-top-40px">
                    {contactinfos.socials.map((item, i) => {
                        return (
                            <a key={i} href={item.url} className={'theme-btn '+item.title+'-link'}>
                                <i className="d-inline-block">{item.icon}</i> {item.title}
                            </a>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default ContactInfo;
