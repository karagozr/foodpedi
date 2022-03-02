import React from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import GeneralInfo from "../../components/addlisting/GeneralInfo";
import AddLocation from "../../components/addlisting/AddLocation";
import AddFullDetails from "../../components/addlisting/AddFullDetails";
import PhotoUploader from "../../components/addlisting/PhotoUploader";
import Amenities from "../../components/addlisting/Amenities";
import OpeningHours from "../../components/addlisting/OpeningHours";
import AddPrice from "../../components/addlisting/AddPrice";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import {Link} from "react-router-dom";
import breadcrumbimg from '../../assets/images/bread-bg.jpg'
import sectiondata from "../../store/store";
import { useParams } from "react-router-dom";
import {EdiItem,AddCategory} from "../../components"

const states = {
    breadcrumbimg: breadcrumbimg
}
export const ItemUpdate = () => {
    
    const {itemId} = useParams<any>();
    
    return (
        <main className="add-listing">

           

            <Breadcrumb CurrentPgTitle="" MenuPgTitle="Listings" img={states.breadcrumbimg} />

            <section className="add-listing-area padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mx-auto">
                            <EdiItem itemId={itemId} />
                        </div>
                    </div>
                </div>
            </section>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}


