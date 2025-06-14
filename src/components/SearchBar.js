import { Button, Typography, TextField, Box, Autocomplete, IconButton, Tooltip, Stack, InputAdornment } from '@mui/material';
import { Close, Search, FlightTakeoff, LocationOn, EventRounded } from '@mui/icons-material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useContext } from 'react';
import { DataContext } from 'App';
import { isMobile } from 'styles/breakpoints';

const SearchBar = ({ searchParams, setParams, displayCompactLayout, onSearch, onReset }) => {
  const { cities, destinations } = useContext(DataContext);
  const destinationsOptions = destinations.map(dest => dest.name);

  const setSearchParams = (newParams) => {
    setParams({
      ...searchParams,
      ...newParams,
    });
  };

  if (isMobile() && displayCompactLayout) {
    return (
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: '#fff',
          padding: 2,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Stack spacing={1}>
            <Stack direction='row' spacing={1} justifyContent='space-between'>
              <Autocomplete
                value={searchParams.departureCity}
                onChange={(e, newVal) => setSearchParams({ departureCity: newVal })}
                options={cities}
                freeSolo
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Departure City" size="small" />
                )}
              />
              <Autocomplete
                value={searchParams.destination}
                onChange={(e, newVal) => setSearchParams({ destination: newVal })}
                options={destinationsOptions}
                freeSolo
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Destination" size="small" />
                )}
              />
            </Stack>

            <DatePicker
              label="Departure Date"
              value={searchParams.departureDate}
              onChange={(newDate) => setSearchParams({ departureDate: newDate })}
              slotProps={{
                textField: {
                  size: 'small',
                  fullWidth: true,
                },
              }}
              slots={{
                openPickerIcon: () => (
                  <EventRounded color="primary" />
                ),
              }}
            />
            <Stack direction='row' spacing={1} justifyContent='space-between'>
              <Button
                onClick={onSearch}
                variant="contained"
                startIcon={<Search />}
                sx={{
                  borderRadius: '50px',
                  textTransform: 'none',
                  background: 'linear-gradient(90deg, #f0eceb, #b5e6fa, #90cafe)',
                  color: '#003366',
                  fontWeight: 600,
                  mt: 1,
                }}
                fullWidth
              >
                Search
              </Button>
              <Button
                variant="outlined"
                onClick={onReset}
                sx={{
                  borderRadius: '50px',
                  textTransform: 'none',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.1)',
                  },
                }}
                fullWidth
              >
                Clear
              </Button>
            </Stack>

          </Stack>
        </LocalizationProvider>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: displayCompactLayout ? 1 : 4, backgroundColor: 'white', borderRadius: 2, boxShadow: 2 }}>
      {!displayCompactLayout && <Typography variant="h5" textAlign="center" fontWeight={600} color='#003366'>
        Find Your Next Adventure
      </Typography>}

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: displayCompactLayout ? 'nowrap' : 'wrap',
            gap: displayCompactLayout ? 1 : 2,
            mt: 2,
          }}
        >
          <Box sx={{ flex: '1 1 30%' }}>
            <Autocomplete
              value={searchParams.departureCity}
              onChange={(event, newValue) => setSearchParams({ departureCity: newValue })}
              options={cities}
              freeSolo
              renderInput={(params) =>
                <TextField
                  {...params}
                  label="Departure City"
                  placeholder='Enter from city'
                  size={displayCompactLayout ? 'small' : 'medium'}
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <FlightTakeoff color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              }
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
                  size: displayCompactLayout ? 'small' : 'medium'
                },
              }}
              slots={{
                openPickerIcon: () => (
                  <EventRounded color="primary" />
                ),
              }}
            />
          </Box>
          <Box sx={{ flex: '1 1 30%' }}>
            <Autocomplete
              value={searchParams.destination}
              onChange={(event, newValue) => setSearchParams({ destination: newValue })}
              options={destinationsOptions}
              freeSolo
              renderInput={(params) =>
                <TextField
                  {...params}
                  label="Destination"
                  size={displayCompactLayout ? 'small' : 'medium'}
                  fullWidth
                  placeholder='Enter destination'
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOn color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              }
            />
          </Box>
          {displayCompactLayout && <>
            <Tooltip title="Search">
              <IconButton
                onClick={onSearch}
                sx={{
                  background: 'linear-gradient(90deg, #f0eceb, #b5e6fa, #90cafe)',
                  color: '#003366',
                  borderRadius: '50%',
                  padding: 1,
                  '&:hover': {
                    background: 'linear-gradient(90deg, #e5e0df, #a6dbf0, #78baf5)',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <Search />
              </IconButton>
            </Tooltip>
            <Tooltip title="Clear">
              <IconButton
                onClick={onReset}
                sx={{

                  color: 'primary.main',
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.1)',
                  },
                }}
              >
                <Close />
              </IconButton>
            </Tooltip>
          </>
          }
        </Box>

        {!displayCompactLayout && <Box gap={2} display={{ xs: 'block', sm: 'flex' }} justifyContent="center">
          <Button
            onClick={onSearch}
            sx={{
              background: 'linear-gradient(90deg, #f0eceb, #b5e6fa, #90cafe)',
              color: '#003366',
              borderRadius: '50px',
              mt: 4,
              px: 4,
              py: 1.5,
              width: { xs: '100%', sm: 150 },
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(144, 202, 254, 0.4)',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                background: 'linear-gradient(90deg, #e5e0df, #a6dbf0, #78baf5)',
                transform: 'scale(1.05)',
              },
            }}
            startIcon={<Search sx={{ color: '#003366' }} />}
            fullWidth
          >
            Search
          </Button>
        </Box>}
      </LocalizationProvider>
    </Box>
  );
};

export default SearchBar;
