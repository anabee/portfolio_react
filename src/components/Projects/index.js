import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './projectcards';

const useStyles = makeStyles((theme) => ({
    image: {
      padding: theme.spacing(2),
      textAlign: 'center',
      maxHeight: 150, 
      width:"100%", 
    },
  }));

const ProjectSection = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
                <Grid item xs={12}>
                    <img src="/../../border.png" alt="leaves" className={classes.image}/>
                </Grid>
                <div>
                    <h3>projects</h3>
                </div>
                <Grid item xs={12}>
                    <ProjectCard/>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProjectSection;