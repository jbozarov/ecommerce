import React, { useState } from 'react';
import logo from './logo.svg'
import './Header.css';
import DropdownMenu from '../dropDownMenu/DropDownMenu';
import { Link, withRouter } from 'react-router-dom'



const Header = () => {
  const [ dropdownActive, setDropdownActive ] = useState(true)
  const [ searchInput, setSearchInput ] = useState('')

  const toggleMenu = () => setDropdownActive(!dropdownActive)
  const enterMenu = () => setDropdownActive(false)
  const leaveMenu = () => setDropdownActive(true)
  let qtyCount = 0;
  let cartButtonStyle = { backgroundColor: 'red', color: 'white'}

  const handleChange = e => {
     
  }
    return (
         <div className="header-container">
            <div className="navBarContainer" >
               <div className="topNav">
                  <div className="userLinks" >
                     <img src={logo} width={40} />
                     <p>Find a Store</p>
                     <p>Sign In</p>
                     <div className="cartButton" style={qtyCount ? cartButtonStyle : null}>
                        <Link to='/cart'><p>Cart ({qtyCount})</p></Link>
                     </div>
                  </div>
                  <div className="lower-box" >
                     <ul className="navLinks"  >
                        <li onClick={toggleMenu} onMouseEnter={enterMenu}>{"MEN'S"}</li>
                        <li onClick={toggleMenu} onMouseEnter={enterMenu}>{"WOMEN'S"}</li>
                        <li onClick={toggleMenu} onMouseEnter={enterMenu}>KIDS</li>
                        <li onClick={toggleMenu} onMouseEnter={enterMenu}>HOT DEALS</li>
                     </ul>
                     <input className='search-input' value={searchInput} placeholder="Search" onChange={e => handleChange(e)} />
                  </div>
               </div>
               <div className="desktopDropdownInstanceContainer">
                  <DropdownMenu dropdownActive={ dropdownActive } onMouseEnter={ enterMenu } onMouseLeave={ leaveMenu } toggleMenu={toggleMenu}/>
               </div>
            </div>
            
         </div>
    )
 }



export default withRouter(Header)