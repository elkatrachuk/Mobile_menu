import logo from "../../images/logo.png";

const DesktopMenu = () => {
  return (
    <nav className="navigation desktop-navigation">
      <a href="/" className="brand-name">
        <img src={logo} alt="Logo" />
      </a>
      <div className="right-buttons">
        <button className="search"></button>
        <button className="basket"></button>
      </div>
    </nav>
  );
};
export default DesktopMenu;
