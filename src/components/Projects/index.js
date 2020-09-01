import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ProjectCard from "./card";

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
}));

const Projects = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div>
        <Container>
          <ProjectCard/>
        </Container>
    </div>
  )
}

export default Projects;