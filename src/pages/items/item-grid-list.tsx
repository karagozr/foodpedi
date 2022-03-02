import React from 'react';
import {ItemBasic} from "../../components"
import { useParams  } from "react-router-dom";

import {useItem} from '../../hooks'




export const ItemGridList = () => {
    var {categoryId} = useParams<any>();

    const item = useItem();
    const [itemDatasource, setItemDatasource] = React.useState([]);

    React.useEffect(()=>{
        fetchData();

    },[])
    
    const fetchData = async ()=>{
        var _result = await item.getItemList(categoryId);
        setItemDatasource(_result);
    }

  return (
    <main className="listing-grid">
  

    {/* Breadcrumb */}
    {/* <Breadcrumb CurrentPgTitle="" MenuPgTitle="Listings" /> */}

    {/* Place Grid */}
    <section className="location-area padding-top-90px padding-bottom-50px">
        <div className="container">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <div className="row">
          <ItemBasic datasource={itemDatasource} />
          </div>
          
        </div>
      </section>


    {/* Newsletter */}
    {/* <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} /> */}

    {/* Footer */}

    </main>
  );
};
