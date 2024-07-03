import { useState } from "react";
import ItemsCarousel from "./ItemsCarousel";
import DropCard from "./DropCard";
import Menu from "../assests/menu.json";
import Switch from "@mui/material/Switch";
import "./Catalog.css";

const Catalog = ({ item, setItem }) => {
  const items = Object.keys(Menu);
  const [selectedFilters, setSelectedFilters] = useState({
    veg: false,
    egg: false,
    nonVeg: false,
  });

  const carCategory = Object.keys(Menu[item]);

  const handleSwitchChange = (filter) => (event) => {
    let updatedFilters = {
      ...selectedFilters,
      [filter]: event.target.checked,
    };

    if (filter === "veg" && event.target.checked) {
      updatedFilters = {
        ...updatedFilters,
        nonVeg: false,
        egg: false,
      };
    }

    setSelectedFilters(updatedFilters);
  };

  return (
    <div>
      <ItemsCarousel selectedItem={item} items={items} setItem={setItem} />
      <h3 className="heading">{item}</h3>

      <div className="food-item">
        <div className="label">
          <label>Veg 🥕</label>
          <Switch
            color="warning"
            checked={selectedFilters.veg}
            onChange={handleSwitchChange("veg")}
          />
          {selectedFilters.veg && <label>Egg 🥚</label>}
          {selectedFilters.veg && (
            <Switch
              color="warning"
              checked={selectedFilters.egg}
              onChange={handleSwitchChange("egg")}
            />
          )}
          <label>Non Veg 🍗</label>
          <Switch
            color="warning"
            checked={selectedFilters.nonVeg}
            onChange={handleSwitchChange("nonVeg")}
            disabled={selectedFilters.veg}
          />
        </div>
        {carCategory.map((menuItem, index) => (
          <div key={index} className="menu-item heading">
            <DropCard item={item} categories={menuItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
