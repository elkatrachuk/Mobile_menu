import Accordion from "../accordion/Accordion";
import ImageSlider from "../imageslader/ImageSlider";
import { useState } from "react";
import logo from "../../images/logo.png";

const MobileMenu = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation mobile-navigation">
      <button
        className={isNavExpanded ? "close" : "hamburger"}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <div className="background-hamburger"></div>
        <div className="background-hamburger"></div>
        <div className="background-hamburger"></div>
      </button>
      <a href="/" className="brand-name">
        <img src={logo} alt="Logo" />
      </a>
      <div className="right-buttons">
        <button className="search"></button>
        <button className="basket"></button>
      </div>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <ImageSlider />
          </li>
          <li>
            <Accordion title="DAILY">
              <div className="row">
                <div className="name">SPORT SOCKS</div>
                <div className="count">25 products</div>
              </div>
              <div className="row">
                <div className="name">RUNNING SOCKS</div>
                <div className="count">25 products</div>
              </div>
              <div className="row">
                <div className="name">HOKEY SOCKS</div>
                <div className="count">25 products</div>
              </div>
              <div className="row">
                <div className="name">SKI SOCKS</div>
                <div className="count">25 products</div>
              </div>
              <div className="row">
                <div className="name">FLIGHT SOCKS</div>
                <div className="count">25 products</div>
              </div>
              <div className="row">
                <div className="name">HIKING SOCKS</div>
                <div className="count">25 products</div>
              </div>
            </Accordion>
          </li>
          <li>
            <Accordion title="SPORTS">
              <div className="row">
                <div className="name">SPORT SOCKS</div>
                <div className="count">25 products</div>
              </div>
              <div className="row">
                <div className="name">RUNNING SOCKS</div>
                <div className="count">25 products</div>
              </div>
              <div className="row">
                <div className="name">HOKEY SOCKS</div>
                <div className="count">25 products</div>
              </div>
              <div className="row">
                <div className="name">SKI SOCKS</div>
                <div className="count">25 products</div>
              </div>
              <div className="row">
                <div className="name">FLIGHT SOCKS</div>
                <div className="count">25 products</div>
              </div>
              <div className="row">
                <div className="name">HIKING SOCKS</div>
                <div className="count">25 products</div>
              </div>
            </Accordion>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default MobileMenu;
