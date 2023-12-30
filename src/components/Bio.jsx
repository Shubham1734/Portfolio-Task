import React from 'react';
import styled from 'styled-components';

const BioContainer = styled.section`
  background-color: #f8f8f8;
  padding: 40px;
  text-align: center;
  color:black;
  &:hover {
    transform: scale(1.05); 
    background-color: #e0e0e0;
  }
`;

const BioHeading = styled.h2`
  margin-bottom: 20px;
`;

const BioText = styled.p`
  font-size: 16px;
`;

function Bio() {
  return (
    <BioContainer>
      <BioHeading>Brief Bio</BioHeading>
      <BioText>
        I am a recent graduate with a Computer Engineering from Dr.D.Y.Patil institute of technology,Pimpri. 
        My academic background includes coursework in OOPs,Java,C++,Operating system, where I developed a strong foundation in Computer fundamental.
        During my studies, I had the opportunity to work on Persistent Systems, showcasing my hands-on experience in Database management,Linux fundamental.
        I am enthusiastic about Web development and eager to contribute my skills to reputed organization.
      </BioText>
    </BioContainer>
  );
}

export default Bio;
