import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import "./styles.css";

const Navbar = () => {
  return (
    <>
      <MobileMenu />
      <DesktopMenu />
    </>
  );
};
export default Navbar;
