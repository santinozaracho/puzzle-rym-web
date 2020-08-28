import React from 'react';
import { Container, Modal, Paper, Typography } from '@material-ui/core';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import useQueryContext from '../../store/QueryContext';
import ErrorView from '../ErrorView';
import LoadingView from '../LoadingView';

interface ModalViewProps {}

export const GET_Modal = gql`
  query ModalView($page: Int!, $nameFilter: String, $episodeFilter: String) {
    ModalView(
      page: $page
      filter: { name: $nameFilter, episode: $episodeFilter }
    ) {
      info {
        next
        count
        pages
      }
      results {
        episode
        name
      }
    }
  }
`;
const StyledPaper = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 20px;
  min-width: 300px;
  max-width: 600px;
`;

const ModalView: React.FC<ModalViewProps> = (props) => {
  const { query, closeModalItem } = useQueryContext();

  const closeModal = () => closeModalItem();
  // const { loading, error, data } = useQuery(GET_ModalView, {
  //   variables: {
  //     page: query.page,
  //     nameFilter: query.filter.extrafilter ? '' : query.searchString,
  //     episodeFilter: query.filter.episode ? query.searchString : '',
  //   },
  // });
  // if (loading) return <LoadingView />;
  // if (error) return <ErrorView />;
  return (
    <Modal open={query.modalItem.open} onClose={closeModal}>
      <StyledPaper>
        <Typography>Hello</Typography>
      </StyledPaper>
    </Modal>
  );
};

export default ModalView;
