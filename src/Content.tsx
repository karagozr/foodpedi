import React from "react";
import { Routes, Route ,Navigate, useLocation} from "react-router-dom";
import { routes,routeWitoutLayout } from "./AppRoute";
import { Footer,GeneralHeader } from './components'

export const Content = () =>{

  const {pathname} = useLocation();
  
  if(pathname===routeWitoutLayout.path){
    return(
      <React.Fragment> 
        <Routes>
          <Route key={routeWitoutLayout.path} path={routeWitoutLayout.path} element={React.createElement(routeWitoutLayout.page)}  />
          <Route path={'*'} element={<Navigate replace to="/home" />} />
        </Routes>
      </React.Fragment>
        
    )
  }else{
    return(
      <React.Fragment> 
        <GeneralHeader/>
        <Routes>
          {routes.map(({ path, page }) => {
            return(  <Route key={path} path={path} element={React.createElement(page)}  />  )})}
            <Route path={'*'} element={<Navigate replace to="/home" />} />
        </Routes>
        
        <Footer />
        {/* <ScrollTopBtn /> */}
      </React.Fragment>
        
    )
  }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}


// export const AccountContent = () =>{

//   return(
//     <React.Fragment> 
//       <Routes>
//         <Route key={routeWitoutLayout.path} path={routeWitoutLayout.path} element={React.createElement(routeWitoutLayout.page)}  />
//           <Route path={'*'} element={<Navigate replace to="/home" />} />
//       </Routes>
      
//       {/* <ScrollTopBtn /> */}
//     </React.Fragment>
      
//   )
//}