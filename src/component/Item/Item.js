import React from "react";
import testImage from "../../imgs/no_image.jpg";

const Item = (props) => {
  return (
    <div className="col-lg-5 py-2 item_card mr-4 ml-4">
      <div className="single_menu">
        <img
          src={props.item.imageUrl!== "null" ?props.item.imageUrl: testImage}
          alt={props.item.name}
        className="pic"/>
        <div className="menu_content">
          <div className="d-flex justify-content-between  price_name">
            <h4 className="text-right">{props.item.name}</h4>
            <h4>
              <span>{props.item.price}</span>
            </h4>
          </div>
          <p lang="ara" className="text-right" dir="rtl">
            {props.item.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;