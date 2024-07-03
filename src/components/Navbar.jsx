import SideMenu from "./SideMenu";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";

const Navbar = ({ setItem, showNav, setShowNav }) => {
  return (
    <div className="flex-container">
      <div className="flex-container">
        <div className="ham" onClick={() => setShowNav(!showNav)}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="menu"
            aria-haspopup="true"
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="container">
          <span className="span1">Cafe 27</span>
          <span className="span2">✅ Official website</span>
        </div>
      </div>

      <div className="ham">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </div>

      {showNav && (
        <SideMenu onClose={() => setShowNav(false)} setItem={setItem} />
      )}
    </div>
  );
};

export default Navbar;
