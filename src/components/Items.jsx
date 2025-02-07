import React from "react";

const Items = (props) => {
  return (
    <div className="w-2xs pt-5">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div>
        <p className="line-through">${props.oldPrice}</p>
        <h5>${props.newPrice}</h5>
      </div>
    </div>
  );
};

export default Items;
