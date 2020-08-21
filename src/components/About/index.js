import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Title from "./title";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white"
  },
}));

const Home = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div>
      <AppBar>
          <Toolbar>
          <Link href="#" onClick={preventDefault} className={classes.root}>
            home
          </Link>
          <Link href="#" onClick={preventDefault} className={classes.root}>
            projects
          </Link>
          <Link href="#" onClick={preventDefault} className={classes.root}>
            contact & extras
          </Link>
          </Toolbar>
        </AppBar>
        <Container>
          <Title />
        </Container>
    </div>
  )
}

export default Home;