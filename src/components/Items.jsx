import React from "react";

const Items = (props) => {
  return (
    <div className="w-3xs space-y-3 pt-5">
      <img src={props.image} alt="" />
      <div className="px-2">
        <p>{props.name}</p>
        <p className="line-through">${props.oldPrice}</p>
        <h5>${props.newPrice}</h5>
      </div>
    </div>
  );
};

export default Items;
