import React from "react";
import { Data } from "../helpers/Data";
import MenuItem from "./MenuItem";
import "../styles/Menu.css";
export const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((menuItem, i) => {
          return (
            <MenuItem
              key={i}
              image={menuItem.image}
              content={menuItem.content}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
};
