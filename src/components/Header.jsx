import React from 'react';
import profile from '../images/profile pic1.png'
import styled from 'styled-components';
import Navbar from './Navbar';
import Bio from './Bio';
import Projects from './Projects';
function Header() {
  return (
      <HeaderContainer>
        <Navbar/>
        <HeaderImage src={profile} alt="Header" />
        <HeaderContent>
            <h1 style={{ paddingBottom: 15 ,marginTop:10}} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
            </h1>
            <h1 className="heading-name">
                I'M
                <strong className="main-name"> Shubham Sutar</strong>
              </h1>
            <Bio/>
            {/* <Projects/> */}
        </HeaderContent>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.header`
  height:60vh; 
  text-align: center;
`;

const HeaderImage = styled.img`
    width: 200px; /* Adjust the width as needed */
    height: 200px; /* Adjust the height as needed */
    border-radius: 50%; /* This makes the element round */
    overflow: hidden;/* Adjust the max-height as needed */
`;

const HeaderContent = styled.div`
  position: relative;
  margin-top:10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
`;

export default Header;
