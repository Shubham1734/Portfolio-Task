import React from 'react';
import styled from 'styled-components';

const EducationSection = styled.section`
  margin: 40px 0;
  padding:10px;
  &:hover {
    transform: scale(1.05); /* Increase the size on hover */
    background-color: #e0e0e0;
  }
`;

const EducationHeading = styled.h2`
  font-size: 24px;
`;

const EducationItem = styled.div`
  margin-bottom: 20px;
  transition: transform 0.3s ease; /* Add transition for a smooth effect */

  &:hover {
    transform: scale(1.05); /* Increase the size on hover */
  }
`;

const DegreeTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

const UniversityInfo = styled.p`
  font-size: 16px;
`;

function Education() {
  return (
    <EducationSection id="education">
      <EducationHeading>Education</EducationHeading>
      {/* Include details about your education */}
      <EducationItem>
        <DegreeTitle>Degree in Computer Engineering</DegreeTitle>
        <UniversityInfo>Savitribai Phule University, 2024</UniversityInfo>
      </EducationItem>
      {/* Add more education details as needed */}
    </EducationSection>
  );
}

export default Education;
