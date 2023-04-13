import React from "react";

const Category = (props) => {
  const { isActive, categoryName, onCategoryClick } = props;
  return (
    <li className="nav-item">
      <a
        className={`category_btn nav-link ${isActive}`}
        data-toggle="tab"
        href="#"
        role="tab"
        onClick={() => onCategoryClick(categoryName)}
      >
        {categoryName}
      </a>
    </li>
  );
};

export default Category;
