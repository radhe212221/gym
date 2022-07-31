import React from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../comp/HeroBanner';
import SearchExcises from '../comp/SearchExcises';
import  Execises  from '../comp/Execises';
export const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExcises />
      <Execises />
    </Box>
  )
}
