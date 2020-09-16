import React from 'react';
import { Modal, Paper } from '@material-ui/core';
import styled from 'styled-components';
import useQueryContext from '../../store/QueryContext';
import EntityView from './EntityView';

/**
 * @description Modal View is only responsible for mount the Modal and render the Body.
 * @return {component}
 */

interface ModalViewProps {}

const StyledPaper = styled(Paper)`
  align-items: center;
  justify-content: center;
  margin: auto;
`;
const StyledModal = styled(Modal)`
  align-items: center;
  justify-content: center;
  margin: auto;

  padding: 10px;
  min-width: 300px;
  max-width: 600px;
  min-height: 300px;
  max-height: 600px;
`;

const ModalView: React.FC<ModalViewProps> = (props) => {
  const { query, closeModalItem } = useQueryContext();

  const closeModal = () => closeModalItem();

  return (
    <StyledModal open={query.modalItem.open} onClose={closeModal}>
      <StyledPaper>
        <EntityView />
      </StyledPaper>
    </StyledModal>
  );
};

export default ModalView;
