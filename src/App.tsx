import React from 'react';
import { BrowserRouter } from "react-router-dom";
import {Content} from './Content';

import {AppRoute, ScrollReveal} from './utils';
import {Home4} from './pages'

import {RecoilRoot} from 'recoil'

import GoogleLogin from 'react-google-login';

import Home from "./pages/homes/Home";
import Home2 from './pages/homes/Home2';
import Home3 from './pages/homes/Home3';
import Home5 from './pages/homes/Home5';
// import AllCategories from './pages/categories/AllCategories';
// import AllProducts from './pages/categories/AllProducts';
// import AllLocations from './pages/categories/AllLocations';
// import TopPlaces from "./pages/categories/TopPlaces";
// import ListingGrid from "./pages/listings/ListingGrid";
// import IceceklerListingGrid from "./pages/listings/IceceklerListingGrid";
// import YiyeceklerListingGrid from "./pages/listings/YiyeceklerListingGrid";
// import CocaColaListingGrid from "./pages/listings/CocaColaListingGrid";
// import ListingList from "./pages/listings/ListingList";
// import ListMapView from "./pages/listings/ListMapView";
// import ListMapView2 from "./pages/listings/ListMapView2";
// import ListLeftSidebar from "./pages/listings/ListLeftSidebar";
// import ListRightSidebar from "./pages/listings/ListRightSidebar";
// import ListingDetails from "./pages/listings/ListingDetails";
// import UrunDetay from "./pages/listings/UrunDetay";
// import AddListing from "./pages/listings/AddListing";
// import UserProfile from "./components/other/account/UserProfile";
// import TopAuthors from "./pages/TopAuthors";
// import Dashboard from "./pages/dashboard/Dashboard";
// import Password from "./pages/dashboard/Password";
// import Email from "./pages/dashboard/Email";
// import ContactInfo from "./pages/dashboard/ContactInfo";
// import Isaret from "./pages/dashboard/Isaret";
// import Booking from "./pages/dashboard/Booking";
// import BookingConfirmation from "./pages/dashboard/BookingConfirmation";
// import Invoice from "./pages/dashboard/Invoice";
// import PricingPlan from "./pages/PricingPlan";
// import About from "./pages/About";
// import Faq from "./pages/FAQ";
// import Contact from "./pages/Contact";
// import RecoverPassword from "./pages/RecoverPassword";
// import BlogFullWidth from "./pages/blogs/BlogFullWidth";
// import BlogGrid from "./pages/blogs/BlogGrid";
// import BlogLeftSidebar from "./pages/blogs/BlogLeftSidebar";
// import BlogRightSidebar from "./pages/blogs/BlogRightSidebar";
// import BlogDetail from "./pages/blogs/BlogDetail";
// import MaddeGrid from "./pages/blogs/MaddeGrid";
// import MaddeDetail from "./pages/blogs/MaddeDetail";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import Error from "./pages/Error";

function App() {


  ////test
  const [loginData, setLoginData] = React.useState<any>(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData')|| '{}')
      : null
  );

  const handleFailure = (result:any) => {
    alert(result);
  };

  const handleLogin = async (googleData:any) => {
    console.log("DATA : ", googleData);


    // const res = await fetch('/api/google-login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     token: googleData.tokenId,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });

    // const data = await res.json();
    // setLoginData(data);
    // localStorage.setItem('loginData', JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };


  ////

  const childRef = React.useRef<any>();
  //let location = useLocation();

  React.useEffect(() => {
    //document.body.classList.add('is-loaded')
    //childRef.current.init();
  }, []);

  return (

    <React.Fragment>
    <RecoilRoot>
    <ScrollReveal ref={childRef}  children={() => (
      <BrowserRouter>
        <Content/>
      </BrowserRouter>
    )} />
    </RecoilRoot>
  </React.Fragment>
  );
}

const LayoutDefault = ({ children }:any) => (
  <>
    {children}
  </>
);


export default App;



{/* <Routes>
            <Route path="/" element={<Home4 />} />
            <Route path="/index2" element={Home2()} />
              <Route path="/index3" element={Home3()} />
              <Route path="/index4" element={Home4()} />
              <Route path="/index5" element={Home5()} />
              {/* <Route path="/all-categories" element={AllCategories} />
              <Route path="/all-products" element={AllProducts} />
              <Route path="/all-locations" element={AllLocations} />
              <Route path="/top-place" element={TopPlaces} />
              <Route path="/listing-grid" element={ListingGrid} />
              <Route path="/icecekler" element={IceceklerListingGrid} />
              <Route path="/cocacola" element={CocaColaListingGrid} />
              <Route path="/yiyecekler" element={YiyeceklerListingGrid} />
              <Route path="/listing-list" element={ListingList} />
              <Route path="/list-map-view" element={ListMapView} />
              <Route path="/list-map-view2" element={ListMapView2} />
              <Route path="/list-left-sidebar" element={ListLeftSidebar} />
              <Route path="/list-right-sidebar" element={ListRightSidebar} />
              <Route path="/listing-details/:id" element={ListingDetails} />
              <Route path="/details/cocacolazero" element={UrunDetay} />
              <Route path="/add-listing/new" element={AddListing} />
              <Route path="/user-profile" element={UserProfile} />
              <Route path="/top-author" element={TopAuthors} />
              <Route path="/dashboard" element={Dashboard} />
              <Route path="/password" element={Password} />
              <Route path="/email" element={Email} />
              <Route path="/contactinfo" element={ContactInfo} />
              <Route path="/isaret" element={Isaret} />
              <Route path="/booking" element={Booking} />
              <Route path="/booking-confirmation" element={BookingConfirmation} />
              <Route path="/invoice" element={Invoice} />
              <Route path="/pricing" element={PricingPlan} />
              <Route path="/about" element={About} />
              <Route path="/faq" element={Faq} />
              <Route path="/contact" element={Contact} />
              <Route path="/recover" element={RecoverPassword} />
              <Route path="/blog-full-width" element={BlogFullWidth} />
              <Route path="/blog-grid" element={BlogGrid} />
              <Route path="/blog-left-sidebar" element={BlogLeftSidebar} />
              <Route path="/blog-right-sidebar" element={BlogRightSidebar} />
              <Route path="/blog-single" element={BlogDetail} />
              <Route path="/maddeler/" element={MaddeGrid} />
              <Route path="/maddedetay/" element={MaddeDetail} />
              <Route path="/login" element={Login} />
              <Route path="/sign-up" element={SignUp} />
              <Route element={Error} /> */}
          // </Routes> */}