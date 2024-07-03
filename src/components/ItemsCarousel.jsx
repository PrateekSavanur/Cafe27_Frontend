import { useState } from "react";
import "./ItemsCarousel.css";

const ItemsCarousel = ({ selectedItem, items, setItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevItem = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const nextItem = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel-wrapper">
      <button className="carousel-button prev" onClick={prevItem}>
        Prev
      </button>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${
                selectedItem === item ? "selected" : ""
              }`}
              onClick={() => setItem(item)}
            >
              <img
                src="https://i.pinimg.com/originals/be/3f/ca/be3fca80d47091ae4f4f67a24c8fdeff.jpg"
                alt="food"
                className="image"
              />
              {item}
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button next" onClick={nextItem}>
        Next
      </button>
    </div>
  );
};

export default ItemsCarousel;
