﻿import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const MyPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.primary,
}));

export default MyPaper;
