import React, { useContext, useState } from 'react';
import { Box, TextField, Button, Typography, Autocomplete } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DataContext } from 'App';

const SearchBar = ({searchParams, setParams, onSearch, onReset}) => {

  const { cities, destinations } = useContext(DataContext);
  const destinationsOptions = destinations.map(dest => dest.name);

  const setSearchParams = (newParams) => {
    setParams({
      ...searchParams,
      ...newParams
    });
  }

  return (
    <Box sx={{ padding: '20px', backgroundColor: 'white' }}>
      <Typography variant="h5" gutterBottom>
        Find Your Next Adventure
      </Typography>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Box sx={{ flex: '1 1 30%' }}>
            <Autocomplete
              value={searchParams.departureCity}
              onChange={(event, newValue) => setSearchParams({ departureCity: newValue })}
              options={cities}
              freeSolo // Allow typing a custom destination if not in the list
              renderInput={(params) => <TextField {...params} label="Departure City" fullWidth />}
            />
          </Box>
          <Box sx={{ flex: '1 1 30%' }}>
            <DatePicker
              label="Departure Date"
              value={searchParams.departureDate}
              onChange={(newDate) => setSearchParams({ departureDate: newDate })}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Box>
          <Box sx={{ flex: '1 1 30%' }}>
            <Autocomplete
              value={searchParams.destination}
              onChange={(event, newValue) => setSearchParams({ destination: newValue })}
              options={destinationsOptions}
              freeSolo // Allow typing a custom destination if not in the list
              renderInput={(params) => <TextField {...params} label="Destination" fullWidth />}
              sx={{
                '& .MuiInputBase-root': {
                  width: '100%', // Ensures Autocomplete stretches full width
                },
              }}
            />
          </Box>
        </Box>
        <Box mt={2}>
          <Button variant="outlined" color="primary" onClick={onSearch}>
            Search
          </Button>
          <Button variant="outlined" color="primary" onClick={onReset} sx={{ marginLeft: 2 }}>
            Reset
          </Button>
        </Box>
      </LocalizationProvider>
    </Box>
  );
};

export default SearchBar;
