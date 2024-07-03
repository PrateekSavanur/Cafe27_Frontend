import { useNavigate } from "react-router-dom";
import Menu from "../assests/menu.json";
import "./SideMenu.css";

const SideMenu = ({ onClose, setItem }) => {
  const navigate = useNavigate();
  const items = Object.keys(Menu);

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  const handleMenuClick = (path, item) => {
    setItem(item);
    onClose();
    navigate(path);
  };

  return (
    <div className="side-menu">
      <div className="head">Cafe 27</div>
      <div className="menu-content">
        <div className="menu-options" onClick={() => handleNavigate("/")}>
          Home
        </div>
        <div className="menu-options">
          <div onClick={() => handleNavigate("/catalog")}>Digital Menu</div>
          <ul>
            {items.map((item) => (
              <li
                onClick={() => {
                  handleMenuClick("/catalog", item);
                }}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-options" onClick={() => handleNavigate("/qr")}>
          QR
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
