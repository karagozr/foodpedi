import React from 'react';
import BannerSearcher from './BannerSearcher';
import SectionsHeading from "./SectionsHeading";
import { FiChevronDown } from 'react-icons/fi'

interface IBanner{
    videoUrl?:string,
    title?:string,
    content?:string
}

export const Banner = ({videoUrl, title, content}:IBanner) => {

    return (
        <>
            <section className="hero-wrapper hero-wrapper4">
                <div className="hero-overlay"></div>
                {
                    videoUrl ?
                        <div className="video-bg">
                            <video autoPlay loop>
                                <source src={videoUrl} />
                            </video>
                        </div>
                    :
                    ''
                }
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <BannerSearcher />
                        </div>
                    </div>
                </div>
                <div className="hero-svg-content text-center">
                    <i>
                        <FiChevronDown />
                    </i>
                </div>
            </section>
        </>
    );
}
