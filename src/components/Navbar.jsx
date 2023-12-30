import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

const NavbarList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavbarItem = styled.li`
  display: inline;
  margin-right: 20px;
`;

const NavbarLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: black;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem><NavbarLink href="#home">Home</NavbarLink></NavbarItem>
        <NavbarItem><NavbarLink href="#about">About</NavbarLink></NavbarItem>
        <NavbarItem><NavbarLink href="#projects">Projects</NavbarLink></NavbarItem>
        <NavbarItem><NavbarLink href="#contact">Contact</NavbarLink></NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
}

export default Navbar;
