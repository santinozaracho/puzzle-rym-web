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
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 20px;
  min-width: 300px;
  max-width: 600px;
  max-height: 600px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ModalView: React.FC<ModalViewProps> = (props) => {
  const { query, closeModalItem } = useQueryContext();

  const closeModal = () => closeModalItem();

  return (
    <Modal open={query.modalItem.open} onClose={closeModal}>
      <StyledPaper>
        <EntityView />
      </StyledPaper>
    </Modal>
  );
};

export default ModalView;
