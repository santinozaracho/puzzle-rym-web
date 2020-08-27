import React from 'react';
import { Card, Typography, Container } from '@material-ui/core';
import styled from 'styled-components';

interface ErrorViewProps {}
const ErrorView: React.FC<ErrorViewProps> = (props) => {
  return <Typography>No se encontraron resultados</Typography>;
};

export default ErrorView;
