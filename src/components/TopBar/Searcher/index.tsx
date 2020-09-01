import * as React from 'react';
import {
  Typography,
  Paper,
  IconButton,
  InputBase,
  FormControlLabel,
  Switch,
  Grid,
  Tooltip,
} from '@material-ui/core';
import styled from 'styled-components';
import { FilterListOutlined, Search, ClearOutlined } from '@material-ui/icons';

import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

import useQueryContext from '../../../store/QueryContext';

const StyledGrid = styled(Grid)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
`;

const StyledInput = styled(InputBase)`
  margin-left: 10px;
  padding-right: 10px;
  flex: 1;
  width: 100%;
`;

const StyledIconSearch = styled(Search)`
  margin-left: 10px;
`;
const StyledIconFilter = styled(FilterListOutlined)`
  margin-left: 10px;
  margin-right: 10px;
`;
const StyledFormControlLabel = styled(FormControlLabel)`
  margin-left: 6px;
  margin-right: 2px;
`;
const StyledPaper = styled(Paper)`
  display: flex;
  height: 38px;
  margin: 4px;
  flex: 1;
  align-content: center;
  align-items: center;
`;
const StyledItemGrid = styled(Grid)`
  width: 276px;
  max-width: 280px;
`;
const StyledItemFilterGrid = styled(Grid)`
  min-width: 220px;
  width: 220px;
  max-width: 280px;
`;
interface SearcherProps {}

const Searcher: React.SFC<SearcherProps> = (props) => {
  const {
    query,
    clearQuery,
    setSearchString,
    setEntity,
    setExtraFilter,
  } = useQueryContext();

  const handleExtraFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExtraFilter(event.target.checked);
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
      <StyledItemGrid item>
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
      </StyledItemGrid>
      <StyledItemGrid item>
        <StyledPaper>
          <StyledIconSearch />
          <StyledInput
            value={query.searchString}
            onChange={handleString}
            placeholder='Search in Rick And Morty'
            inputProps={{ 'aria-label': 'Search in Rick And Morty' }}
          />
        </StyledPaper>
      </StyledItemGrid>

      <StyledItemFilterGrid item>
        <StyledPaper>
          <StyledIconFilter />
          <Typography>Filter By</Typography>
          {/* <FormControlLabel
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
          /> */}
          <StyledFormControlLabel
            label={query.filterOption}
            labelPlacement='start'
            control={
              <Switch
                size='small'
                checked={query.filter.extra}
                color='primary'
                onChange={handleExtraFilter}
                name={query.filterOption}
              />
            }
          />
        </StyledPaper>
      </StyledItemFilterGrid>

      <Grid item>
        <Tooltip title='Clear Search' leaveDelay={300}>
          <StyledPaper>
            <IconButton
              onClick={clearQueryData}
              color='secondary'
              aria-label='clear all'
            >
              <ClearOutlined color='primary' />
            </IconButton>
          </StyledPaper>
        </Tooltip>
      </Grid>
    </StyledGrid>
  );
};

export default Searcher;
