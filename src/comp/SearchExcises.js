import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exercisesOptions, fetchData } from '../utils/fetchData';
const SearchExcises = () => {
  const [search, setsearch] = useState('')
  const handlechange = async () => {
    if (search) {
      const excData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exercisesOptions)
      console.log(excData)
    }
  }
  return (
    <Stack alignItems="center" mt="37px" p="20px" justifyContent="center">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box>
        <TextField height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search Something here"
        />
        <Button className="search-btn"
          sx={{
            bgcolor: 'red',
            color: 'white',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handlechange}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}
export default SearchExcises;