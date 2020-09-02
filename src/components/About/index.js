import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Title from "./title";
import AboutCard from "./card";
import ProjectSection from "../Projects/index";
import ContactSection from "../Contact/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    textAlign: "center",
    display: "inline"
  },
  bullet: {
    listStyleType: "none",
    '&>a':{
      textDecoration: "none",
      color: "black"
    }
  },
}));

const Home = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div>
      <div className={classes.root}>
        <ul>
          <li className={classes.bullet}><a href="#about">about</a></li>
          <li className={classes.bullet}><a href="#projects">projects</a></li>
          <li className={classes.bullet}><a href="#contact">contact</a></li>
        </ul>
      </div>
        <Container>
          <Title />
          <AboutCard/>
        </Container>

        <Container>
          <ProjectSection/>
        </Container>

        <Container>
          <ContactSection/>
        </Container>
    </div>
  )
}

export default Home;