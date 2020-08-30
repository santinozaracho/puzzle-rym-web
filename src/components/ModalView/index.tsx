import React from 'react';
import { Container, Modal, Paper, Typography } from '@material-ui/core';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import useQueryContext from '../../store/QueryContext';

import ModalBody from './ModalBody';

interface ModalViewProps {}

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

  return (
    <Modal open={query.modalItem.open} onClose={closeModal}>
      <StyledPaper>
        <ModalBody />
      </StyledPaper>
    </Modal>
  );
};

export default ModalView;
