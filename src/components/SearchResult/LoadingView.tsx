import React from 'react';
import { Card, Typography, Container } from '@material-ui/core';
import styled from 'styled-components';

interface LoadingViewProps {}
const LoadingView: React.FC<LoadingViewProps> = (props) => {
  return <Typography>Loading..</Typography>;
};

export default LoadingView;
