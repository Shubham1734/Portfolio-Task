// src/Skills.js
import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  margin: 40px 0;
`;

const SkillsHeading = styled.h2`
  font-size: 24px;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillItem = styled.li`
    width: calc(33.33% - 10px);
    margin-bottom: 10px;
    margin-right: 15px;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
    transition: transform 0.3s ease, background-color 0.3s ease;
    &:hover {
        transform: scale(1.05); 
        background-color: #e0e0e0; 
    }
`;

const SkillName = styled.span`
  font-weight: bold;
`;

function Skills() {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Git',
  ];

  return (
    <SkillsSection id="skills">
      <SkillsHeading>Skills</SkillsHeading>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            <SkillName>{skill}</SkillName>
          </SkillItem>
        ))}
      </SkillsList>
    </SkillsSection>
  );
}

export default Skills;
