import React from "react";
import Item from "./Items";
import newCollectionsData from "../assets/NewCollectionsData.js";

function NewCollections() {
  return (
    <div className="flex items-center justify-center pt-20">
      <div className="w-[90%] place-items-center space-y-4">
        <h2>NEW COLLECTIONS</h2>
        <hr className="w-40 border-[3px] border-amber-400" />
        <div className="grid grid-cols-4 space-y-5 space-x-5">
          {newCollectionsData.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NewCollections;
