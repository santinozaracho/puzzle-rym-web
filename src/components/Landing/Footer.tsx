import * as React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { HomeRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

interface FooterProps {}
const Footer: React.SFC<FooterProps> = (props) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        Footer
      </Typography>
      <Typography
        variant='subtitle1'
        align='center'
        color='textSecondary'
        component='p'
      >
        Ups!!, its the end of the App!
      </Typography>
    </footer>
  );
};

export default Footer;
