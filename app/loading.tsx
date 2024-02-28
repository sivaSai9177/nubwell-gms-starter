'use client'
import { Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Spinner = styled.div`
    width: 50px;
    height: 50px;
    border: 5px solid #fff;
    border-radius: 50%;
    border-top-color: #000;
    animation: spin 1s linear infinite;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;


  return (
    <Box
      sx={{
        backgroundColor: "background.default",
      }}
      className="h-screen flex items-center justify-center"
    >
      loading...
    </Box>
  );
};

export default Loading;