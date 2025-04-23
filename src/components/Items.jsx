import React from "react";
import { Link } from "react-router-dom";

const Items = (props) => {
  return (
    <div className="tablet:w-52 laptop:max-w-[300px] laptop:w-full w-fit space-y-3 pt-5">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt=""
          className="laptop:w-[400px] tablet:w-52"
        />
      </Link>
      <div className="px-2">
        <p className="laptop:text-lg text-sm text-wrap">{props.name}</p>
        <p className="text-black/50 line-through">${props.oldPrice}</p>
        <h5 className="text-amber-500">${props.newPrice}</h5>
      </div>
    </div>
  );
};

export default Items;
