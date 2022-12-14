import React from 'react';
import styled, {css}   from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {menuData} from '../data/MenuData';
import { Button} from './Button';

const Nav = styled.nav`
    
    height:60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: blue;
    

`;

const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;

`;
 


const Logo = styled(Link)`
    ${NavLink}
    color: white;
    font-style: italic;
    margin-right: 500px;

`;
  

const MenuBars = styled.i``;

const NavMenu = styled.div`
display: flex;
align-item: center;

`;

const NavMenuLinks =styled(Link)`
${NavLink}
color: #fff;

`;

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 60px; 
`;

const Navbar = () => {
    return (
     <Nav>
       <Logo to="/"> PBS </Logo>
       <MenuBars />
       <NavMenu>
        {menuData.map((item, index)=>(
            <NavMenuLinks to={item.link} key={index}>
                {item.tittle}
            </NavMenuLinks>

        ))}
       </NavMenu>
       <NavBtn>
            <Button to='/contact'>Contact Us</Button>

       </NavBtn>
  
     </Nav>
    );

};

export default Navbar;