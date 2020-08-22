import * as React from 'react';
import {
  Typography,
  makeStyles,
  Container,
  Grid,
  Button,
} from '@material-ui/core';
import { HomeRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

interface IntroProps {}

const Intro: React.SFC<IntroProps> = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.heroContent} maxWidth='sm'>
      <Typography
        component='h1'
        variant='h2'
        align='center'
        color='textPrimary'
        gutterBottom
      >
        Find any eposide of them
      </Typography>
      <Typography variant='h5' align='center' color='textSecondary' paragraph>
        Something short and leading about the collection below—its contents, the
        creator, etc. Make it short and sweet, but not too short so folks
        don&apos;t simply skip over it entirely.
      </Typography>
      <Grid
        container
        className={classes.heroButtons}
        spacing={2}
        justify='center'
      >
        <Grid item>
          <Button variant='contained' color='primary'>
            Main call to action
          </Button>
        </Grid>
        <Grid item>
          <Button variant='outlined' color='primary'>
            Secondary action
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Intro;
