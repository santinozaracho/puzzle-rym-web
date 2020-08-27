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
import styled from 'styled-components';
import { FilterListOutlined, Search, ClearOutlined } from '@material-ui/icons';

import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

import useQueryContext from '../../store/QueryContext';

const StyledGrid = styled(Grid)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
`;

const StyledInput = styled(InputBase)`
  margin-left: 10px;
  padding-right: 10px;
  flex: 1;
  width: 230;
`;

const StyledIconSearch = styled(Search)`
  margin-left: 10px;
`;
const StyledIconFilter = styled(FilterListOutlined)`
  margin-left: 10px;
  margin-right: 10px;
`;

const StyledPaper = styled(Paper)`
  display: flex;
  height: 38px;
  margin: 4px;
  flex: 1;
  align-content: center;
  align-items: center;
`;

interface SearcherProps {}

const Searcher: React.SFC<SearcherProps> = (props) => {
  const {
    query,
    setQuery,
    clearQuery,
    setSearchString,
    setEntity,
    setNameFilter,
    setEpisodeFilter,
  } = useQueryContext();

  const handleNameFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.checked);
  };
  const handleEpisodeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEpisodeFilter(event.target.checked);
  };

  const handleString = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };
  const handleEntity = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string
  ) => {
    setEntity(newValue);
  };
  const clearQueryData = () => clearQuery();

  return (
    <StyledGrid container direction='row' justify='center' alignItems='center'>
      <Grid item>
        <StyledPaper>
          <ToggleButtonGroup
            size='small'
            value={query.entity}
            exclusive
            onChange={handleEntity}
          >
            <ToggleButton value='characters'>Characters</ToggleButton>
            <ToggleButton value='locations'>Locations</ToggleButton>
            <ToggleButton value='episodes'>Episodes</ToggleButton>
          </ToggleButtonGroup>
        </StyledPaper>
      </Grid>
      <Grid item>
        <StyledPaper>
          <StyledIconSearch />
          <StyledInput
            value={query.searchString}
            onChange={handleString}
            placeholder='Search in Rick And Morty'
            inputProps={{ 'aria-label': 'Search in Rick And Morty' }}
          />
        </StyledPaper>
      </Grid>

      <Grid item>
        <StyledPaper>
          <StyledIconFilter />
          <FormControlLabel
            control={
              <Switch
                size='small'
                checked={query.nameFilter}
                onChange={handleNameFilter}
                color='primary'
                name='nameFilter'
              />
            }
            label='Name'
          />
          <FormControlLabel
            control={
              <Switch
                size='small'
                checked={query.typeFilter}
                color='primary'
                onChange={handleEpisodeFilter}
                name='episodeFilter'
              />
            }
            label='Episode'
          />
        </StyledPaper>
      </Grid>

      <Grid item>
        <StyledPaper>
          <IconButton
            onClick={clearQueryData}
            color='secondary'
            aria-label='clear all'
          >
            <ClearOutlined />
          </IconButton>
        </StyledPaper>
      </Grid>
    </StyledGrid>
  );
};

export default Searcher;
