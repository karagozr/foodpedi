import React from 'react';

import breadcrumbimg from "../../assets/images/bread-bg.jpg";


import {CategoryItem} from '../../components'
import {useCategory} from '../../hooks'

const state = {
  breadcrumbImg: breadcrumbimg,
};
export const AllCategories = () => {

  React.useEffect(() => {
    fetchCategory();
  }, [])

  const [categories, setCategories] = React.useState([]);

  const category = useCategory();

  const fetchCategory = async () => category.getAllCategories().then((data) => setCategories(data));
  return (
    <main className="all-categories">
      <section className="location-area padding-top-90px padding-bottom-50px">
        <div className="container">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <CategoryItem categoryItems={categories} />
        </div>
      </section>
    </main>
  );
}

