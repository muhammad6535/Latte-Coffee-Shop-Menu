import React, { useState } from "react";
import "./Home.css";
import Item from "../Item/Item";
import Category from "../Category/Category";
import data from "../../data";

const Home = () => {
  const [distinctCats, setDistinctCats] = useState([
    ...new Set(data.map((item) => item.cat)),
  ]);
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState(
    distinctCats.map((item) => ({
      name: item,
      isActive: false,
    }))
  );
  const [selectedCategory, setSelectedCategory] = useState("0");
  categories[0].isActive = true;
  // function to display an alert when a category button is clicked
  const handleCategoryClick = (category) => {
    setSelectedCategory(distinctCats.indexOf(category));
  };

  // loop through categories and render Category component for each category
  return (
    <>
      <section id="our_menu" className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page_title text-center mb-4">
                <h1 className="display-3">LATTE </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <ul
              className="nav nav-tabs menu_tab mb-4"
              id="myTab"
              role="tablist"
              dir="rtl"
            >
              {categories.map((category, index) => (
                <Category
                  isActive={category.isActive ? "active" : ""}
                  categoryName={category.name}
                  key={index}
                  onCategoryClick={handleCategoryClick}
                />
              ))}
            </ul>
          </div>
          <div className="row">
            <div className="tab-content col-lg-12" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="breakfast"
                role="tabpanel"
                aria-labelledby="breakfast-tab"
              >
                <div className="row justify-content-around px-4">
                  {items
                    .filter(
                      (item) => item.cat === categories[selectedCategory].name
                    )
                    .map((item) => (
                      <Item item={item} key={item.id} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;