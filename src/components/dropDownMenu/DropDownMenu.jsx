import React from 'react';
import './DropDownMenu.css';


const DropdownMenu = ({ toggleMenu, dropdownActive, onMouseEnter, onMouseLeave }) => {

    return (
      <div className="mainDesktopDropdownMenu" style={ dropdownActive ? {display: 'none'} : null} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="desktopDropdownLinksContainer">

          <section className="categoryLinks">
            <h2 className="mensLinkCategory" onClick={toggleMenu}>SHOP ALL {"MEN'S"}</h2>
            <p className="dropDownLinks" onClick={toggleMenu}>OUTERWEAR</p>
            <p className="dropDownLinks" onClick={toggleMenu}>SHIRTS</p>
            <p className="dropDownLinks" onClick={toggleMenu}>BOTTOMS</p>
            <p className="dropDownLinks" onClick={toggleMenu}>HATS</p>
            <p className="dropDownLinks" onClick={toggleMenu}>BACKPACKS</p>
          </section>

          <section className="categoryLinks">
          <h2 className="womensLinkCategory" onClick={toggleMenu}>SHOP ALL {"WOMEN'S"}</h2>
          <p className="dropDownLinks" onClick={toggleMenu}>OUTERWEAR</p>
          <p className="dropDownLinks" onClick={toggleMenu}>SHIRTS</p>
          <p className="dropDownLinks" onClick={toggleMenu}>BOTTOMS</p>
          <p className="dropDownLinks" onClick={toggleMenu}>HATS</p>
          <p className="dropDownLinks" onClick={toggleMenu}>BACKPACKS</p>
          </section>

          <section className="categoryLinks">
            <h2 className="backpacksLinkCategory" onClick={ toggleMenu }>SHOP ALL BACKPACKS</h2>
            <p className="dropdownLinks" onClick={toggleMenu}>{"MEN'S"}</p>
            <p className="dropdownLinks" onClick={toggleMenu}>{"WOMEN'S"}</p>
          </section>
        </div>


        <div className="freeReturns dropdownFreeReturns"><p>FREE 3-DAY SHIPPING & FREE RETURNS</p></div>
        </div>
      )
    }

    export default DropdownMenu; 