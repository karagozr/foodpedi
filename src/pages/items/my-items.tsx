import React from 'react';
import { ItemBasic } from "../../components"
import { useParams } from "react-router-dom";
import {TabItem} from '../../components'
import { useItem } from '../../hooks'




export const MyItemList = () => {
  var { categoryId } = useParams<any>();

  const item = useItem();
  const [itemDatasource, setItemDatasource] = React.useState([]);
  const [selectedTab ,setSelectedTab] = React.useState<any>(null);
  const items=[{value:null,label:"Tüm Ürünler"},{value:1,label:"Onaylanmış Ürünler"},{value:0,label:"Onay Bekleyen Ürünler"},{value:2,label:"Onaylanmayan Ürünler"}]


  React.useEffect(() => {
    fetchData();

  }, [selectedTab])

  const fetchData = async () => {
    console.log("selectedTab : ",selectedTab)
    var _result = await item.getMyItemList(selectedTab);
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
          <TabItem items={items} value={selectedTab} setValue={setSelectedTab}/>
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
