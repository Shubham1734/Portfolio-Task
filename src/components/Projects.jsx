// src/Projects.js
import React from 'react';
import styled from 'styled-components';
import animeImage from '../images/wallpaperflare.com_wallpaper (2).jpg';
import newsImage from '../images/images.jpeg';

const ProjectsSection = styled.section`
  margin: 50px 0;
  margin-top:260px;
`;

const ProjectsHeading = styled.h2`
  font-size: 24px;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  gap: 40px;
`;

const ProjectItem = styled.div`
  max-width: 300px;
  text-align: center;
`;

const ProjectImage = styled.img`
  height:40%;
  width: 100%;
  border-radius: 11%;
  overflow: hidden;
`;

const ProjectDescription = styled.p`
  margin-top: 20px;
`;

function Projects() {
  return (
    <ProjectsSection id="projects">
      <ProjectsHeading>Projects</ProjectsHeading>
   
      <ProjectContainer>
        <ProjectItem>
          <ProjectImage src={animeImage} alt="Project 1" />
          <ProjectDescription>Developed and launched a video streaming platform dedicated to anime content called "AnimePlay."
Designed and implemented the user interface (UI) for seamless navigation and enhanced user experience.
Integrated various APIs and databases to efficiently manage and deliver a vast library of anime series and movies</ProjectDescription>
        </ProjectItem>
        <ProjectItem>
          <ProjectImage src={newsImage} alt="Project 2" />
          <ProjectDescription>The purpose of the NewsApp project is to address the modern-day need for quick and accessible news consumption.
NewsApp provides real-time updates on breaking news stories and important events.
It provides seamless navigation, clean layouts, and intuitive gestures, ensuring an enjoyable and hassle-free news.</ProjectDescription>
        </ProjectItem>
      </ProjectContainer>
    </ProjectsSection>
  );
}

export default Projects;
