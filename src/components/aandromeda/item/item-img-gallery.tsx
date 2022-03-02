import React from 'react';
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './item-img-gallery.css'


export const ItemImgGallery = ({images}:any) => {
    const [selectedImg, setSelectedImg] = React.useState(0);  
    const items = images?images.map((item:any)=>({
        img:item.file
    })):[]
    const settings = {
        customPaging: function (i:number) {
          return (
            
             <img
                src={items[i].img}
                alt=""
                style={{
                    opacity: selectedImg===i? 1:0.6,
                    border : selectedImg===i?"solid 2px maroon":"none",
                  height: "50px",
                  width: "50px",
                  objectFit: "cover",
                  borderRadius: "5px"
                }}
              />
          );
        },
        afterChange:(e:any)=>setSelectedImg(e),
        dots: true,
        cssEase: "linear",
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 250,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div style={{margin:"1.2em"}}>
            <h2 className="widget-title">
                Ürün görselleri
            </h2>
            <div className="title-shape"></div>
            <Slider  {...settings}>
          {items.map((item:any) => (
            <div>
              <img
                src={item.img}
                alt=""
                style={{ width: "30em",
                height: "30em",
                margin: "auto",
                objectFit: "cover" }}
              />
            </div>
          ))}
         
        </Slider>
        </div>
    );
}


