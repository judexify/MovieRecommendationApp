import "./NavBar.css";

import { FaBars } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="header-items">
      <p className="logo">LOGO</p>
      <p className="menu-outline">
        <FaBars size={20} />
      </p>
    </div>
  );
}
