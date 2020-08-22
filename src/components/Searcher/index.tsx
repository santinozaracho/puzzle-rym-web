import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Paper,
  IconButton,
  InputBase,
  Divider,
  ButtonGroup,
  Button,
  FormControlLabel,
  Switch,
  Grid,
} from '@material-ui/core';
import {
  HomeRounded,
  FilterListOutlined,
  Search,
  ClearOutlined,
} from '@material-ui/icons';

import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: 220,
  },
  searchIcon: {
    marginLeft: 10,
  },
  filterIcon: {
    marginRight: 10,
    marginLeft: 10,
  },
  paper: {
    display: 'flex',
    height: 38,
    margin: 4,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
}));

interface SearcherProps {}

const Searcher: React.SFC<SearcherProps> = (props) => {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState('characters');
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Grid
      className={classes.root}
      container
      direction='row'
      justify='center'
      alignItems='center'
    >
      <Grid item>
        <Paper className={classes.paper}>
          <ToggleButtonGroup
            size='small'
            value={alignment}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value='characters'>Characters</ToggleButton>
            <ToggleButton value='locations'>Location</ToggleButton>
            <ToggleButton value='episodes'>Episodes</ToggleButton>
          </ToggleButtonGroup>
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.paper}>
          <Search className={classes.searchIcon} />
          <InputBase
            className={classes.input}
            placeholder='Search in Rick And Morty'
            inputProps={{ 'aria-label': 'Search in Rick And Morty' }}
          />
        </Paper>
      </Grid>

      <Grid item>
        <Paper className={classes.paper}>
          <FilterListOutlined className={classes.filterIcon} />
          <FormControlLabel
            control={
              <Switch
                size='small'
                checked={state.checkedA}
                onChange={handleSwitchChange}
                color='primary'
                name='checkedA'
              />
            }
            label='Name'
          />
          <FormControlLabel
            control={
              <Switch
                size='small'
                checked={state.checkedB}
                color='primary'
                onChange={handleSwitchChange}
                name='checkedB'
              />
            }
            label='Type'
          />
        </Paper>
      </Grid>

      <Grid item>
        <Paper className={classes.paper}>
          <IconButton color='secondary' aria-label='clear all'>
            <ClearOutlined />
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Searcher;
