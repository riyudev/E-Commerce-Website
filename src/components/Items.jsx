import React from "react";
import { Link } from "react-router-dom";

const Items = (props) => {
  return (
    <div className="w-3xs space-y-3 pt-5">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <div className="px-2">
        <p>{props.name}</p>
        <p className="text-black/50 line-through">${props.oldPrice}</p>
        <h5 className="text-amber-500">${props.newPrice}</h5>
      </div>
    </div>
  );
};

export default Items;
