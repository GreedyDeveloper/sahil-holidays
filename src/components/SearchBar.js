import { Button, Typography, TextField, Box, Autocomplete } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useContext } from 'react';
import { DataContext } from 'App';

const SearchBar = ({ searchParams, setParams, onSearch, onReset }) => {
  const { cities, destinations } = useContext(DataContext);
  const destinationsOptions = destinations.map(dest => dest.name);

  const setSearchParams = (newParams) => {
    setParams({
      ...searchParams,
      ...newParams,
    });
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: 'white', borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h5" textAlign="center" fontWeight={600} color='#003366'>
        Find Your Next Adventure
      </Typography>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 2,
            mt: 2,
          }}
        >
          <Box sx={{ flex: '1 1 30%' }}>
            <Autocomplete
              value={searchParams.departureCity}
              onChange={(event, newValue) => setSearchParams({ departureCity: newValue })}
              options={cities}
              freeSolo
              renderInput={(params) => <TextField {...params} label="Departure City" fullWidth />}
            />
          </Box>
          <Box sx={{ flex: '1 1 30%' }}>
            <DatePicker
              label="Departure Date"
              value={searchParams.departureDate}
              onChange={(newDate) => setSearchParams({ departureDate: newDate })}
              slotProps={{
                textField: {
                  fullWidth: true,
                },
              }}
            />
          </Box>
          <Box sx={{ flex: '1 1 30%' }}>
            <Autocomplete
              value={searchParams.destination}
              onChange={(event, newValue) => setSearchParams({ destination: newValue })}
              options={destinationsOptions}
              freeSolo
              renderInput={(params) => <TextField {...params} label="Destination" fullWidth />}
            />
          </Box>
        </Box>

        <Box gap={2} display={{ xs: 'block', sm: 'flex' }} justifyContent="center">
          <Button
            onClick={onSearch}
            sx={{
              background: 'linear-gradient(90deg, #f0eceb, #b5e6fa, #90cafe)',
              color: '#003366',
              borderRadius: '50px',
              mt: 4,
              px: 4,
              py: 1.5,
              width: 150,
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(144, 202, 254, 0.4)',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                background: 'linear-gradient(90deg, #e5e0df, #a6dbf0, #78baf5)',
                transform: 'scale(1.05)',
              },
            }}
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                fill="#003366"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM10 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
              </svg>
            }
          >
            Search
          </Button>

          <Button
            variant="outlined"
            color="primary"
            onClick={onReset}
            sx={{
              borderRadius: '50px',
              mt: 4,
              px: 4,
              py: 1.5,
              width: 150,
              fontWeight: 500,
              textTransform: 'uppercase',
              '@media (max-width: 600px)': {
                mt: 2,
              },
            }}
          >
            Clear
          </Button>
        </Box>
      </LocalizationProvider>
    </Box>
  );
};

export default SearchBar;
