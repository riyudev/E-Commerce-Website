import React from "react";
import Item from "./Items";
import newCollectionsData from "../assets/NewCollectionsData.js";

function NewCollections() {
  return (
    <div className="flex items-center justify-center pt-20">
      <div className="laptop:w-[90%] w-[95%] place-items-center space-y-4">
        <h3>NEW COLLECTIONS</h3>
        <hr className="w-40 border-[3px] border-amber-400" />
        <div className="laptop:grid-cols-4 tablet:gap-x-6 grid w-auto grid-cols-2 gap-x-3">
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
