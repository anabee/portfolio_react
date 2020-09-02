import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ContactCard from './contactcard';


const useStyles = makeStyles((theme) => ({
    image: {
      padding: theme.spacing(2),
      textAlign: 'center',
      maxHeight: 150, 
      width:"100%", 
    },
  }));

const ContactSection = () => {
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
                  <h3>
                    contact
                  </h3>
                </div>
                <Grid item xs={12}>
                  <ContactCard/>
                </Grid>
                <div>
                  <h3>
                    art
                  </h3>
                </div>
                <Grid item xs={12}>
                  <ContactCard/>
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactSection;