import React from "react";

const Items = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div>
        <p>{props.newPrice}</p>
        <p>{props.oldPrice}</p>
      </div>
    </div>
  );
};

export default Items;
