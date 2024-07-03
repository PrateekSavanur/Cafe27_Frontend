import { useState } from "react";
import DropContent from "./DropContent";
import Menu from "../assests/menu.json";
import "./DropCard.css";

const DropCard = ({ item, categories }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="card" onClick={toggleContent}>
      <div>
        <div className="card-header">
          <img
            src="https://i.pinimg.com/originals/be/3f/ca/be3fca80d47091ae4f4f67a24c8fdeff.jpg"
            alt="food"
            className="imag"
          />
          <h3>{categories}</h3>
        </div>
        {showContent && (
          <div className="drop-content">
            <DropContent content={Menu[item][categories]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DropCard;
