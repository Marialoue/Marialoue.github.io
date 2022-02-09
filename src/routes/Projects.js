import React from "react";
import GridContainer from "../components/GridContainer";
import { Container } from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import Title from '../components/Title';
import data from "../utils/projects.json";

const Projects = () => {
  return (
    <Container>
      <Title>Here are a few projects I've worked on.</Title>
      <GridContainer>
        {data.projects.map((projectItem, index) => (
          <ProjectCard key={index} projectItem={projectItem} />
        ))}
      </GridContainer>
    </Container>
  );
};
export default Projects;
