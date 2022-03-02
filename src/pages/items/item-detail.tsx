import React, { useState, useEffect } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
//import ListingDetailsSidebar from "../../components/sidebars/ListingDetailsSidebar";
//import ListingDetailsGallery from "../../components/sliders/ListingDetailsGallery";
//import ContactInfo from "../../components/contact/ContactInfo";
//import ListingDetailsComments from "../../components/contact/ListingDetailsComments";
//import ReviewFields from "../../components/contact/ReviewFields";

import sectiondata from "../../store/store";
import { BsCheckCircle } from 'react-icons/bs';
import {ItemComment, ItemDescription, ItemImgGallery, ItemInfo, ItemIngredients, ItemProduction} from '../../components'
import ContactInfo from "../../components/contact/ContactInfo";
import ListingDetailsSidebar from "../../components/sidebars/ListingDetailsSidebar";
import ListingDetailsComments from "../../components/contact/ListingDetailsComments";
import ReviewFields from "../../components/contact/ReviewFields";
import { useParams } from "react-router-dom";
import { useItem } from "../../hooks";

export const ItemDetail = (props:any) => {
  const [data, setData] = useState<any|string>({});
  const {itemId} = useParams<string>();
  const item = useItem();
  useEffect(() => {
    fetchItemData();
  }, []);

  const fetchItemData = async () =>{
    console.log("itemId : ",itemId)
    var res = await item.getItemForEdit(itemId);
    if(res)
        setData(res);
    
   }
   console.log("asdsadsadsa: ",data);
  return (
    <main className="listing-details">
        <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>

      <section className="single-listing-area padding-top-20px">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-listing-wrap">
                <ItemImgGallery images={data.images} />
                <ItemInfo title="Temel Bilgiler" barcode={data.barcode1} name={data.name} 
                  shortDescription={data.shortDescription} weight={data.weight} />                                   
                <ItemDescription title="Açıklama" description={data.description1}/>
                <ItemIngredients title="İçerdiği Maddeler" details={data.ingredients} />
                <ItemProduction title=" Üretici Bilgileri" brandName={data.brand?.label} madeCountry={data.madeCountry?.label} 
                  madeState={data.madeState?.label} madeCity={data.madeCity?.label} webPageUrl={data.webPageUrl1}  />

          

                <ItemComment />

                {/* <ReviewFields /> */}
              </div>
            </div>
            <div className="col-lg-4">
              <ListingDetailsSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

