import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    image: {
      padding: theme.spacing(2),
      textAlign: 'center',
      maxHeight: 150, 
      width:"100%", 
    },
    portrait: {
        padding: theme.spacing(2),
        textAlign: 'center',
        maxHeight: 200, 
      },
  }));

const Title = () => {
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
                <Grid item xs={12}>
                    <h1>Ana Valdivia</h1>
                </Grid>
                <Grid item xs={12}>
                    <img src="/../../Me-min.jpeg" alt="me" className={classes.portrait}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Title 