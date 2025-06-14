import React, { useContext, useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import SearchBar from 'components/SearchBar'; // Assuming you have the fancy version
import logo from 'assets/logo.png';
import backgroundImage from 'assets/background.jpg';
import PackageCard from 'components/PackageCard';
import SearchBarComponent from 'components/SearchBar';
import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import { DataContext } from 'App';
import Package from 'components/Package';
import moment from 'moment';

export const DestinationCard = styled(Card)(({ theme }) => ({
  borderRadius: 12,
  overflow: 'hidden',
  position: 'relative',
  width: 250,
  transition: 'transform 0.3s ease',
  flex: '0 0 auto',
  scrollSnapAlign: 'start',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

export const Image = styled(CardMedia)({
  height: 200,
});

export const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
  color: '#fff',
  padding: theme.spacing(2),
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1.1rem',
}));

const TravelHomePage = () => {
  const { destinations, packages: packageData } = useContext(DataContext);
  const [searchParams, setSearchParams] = useState({
    departureCity: '',
    departureDate: null,
    destination: '',
  });

  const [packages, setPackages] = React.useState(null);

  const handleSearch = (params = searchParams) => {
    console.log('Search Params:', params);

    const filteredPackages = packageData.filter(pkg =>
      pkg.destination.toLowerCase().includes(params.destination.toLowerCase())
    ).filter(pkg => {
      if (params.departureDate) {
        return pkg.duration.days >= params.departureDate.diff(moment(), 'days');
      }
      return false;
    }).filter(pkg => {
      if (params.departureCity && params.departureCity !== '') {
        return pkg.cities.some(city => city.toLowerCase() === params.departureCity.toLowerCase());
      }
      return false;
    });
    setPackages(filteredPackages);
  };

  const handleReset = () => {
    setSearchParams({ departureCity: '', departureDate: null, destination: '' });
    setPackages(null);
  };
  const handleDestinationPress = (destination) => {
    setSearchParams({
      departureCity: 'Chennai',
      departureDate: moment(),
      destination: destination.name
    });
    handleSearch({
      departureCity: 'Chennai',
      departureDate: moment(),
      destination: destination.name
    });
  }

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '125px 20px',
          textAlign: 'center',
          color: '#fff',
          position: 'relative',
          zIndex: 1,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
            zIndex: -1,
          },
        }}
      >
        <Typography variant='h3' fontWeight={700} sx={{ fontSize: { xs: '2.5rem', sm: '3rem' } }}>
          Discover Your Dream Destination
        </Typography>
        <Typography variant="h6" mb={4}>
          Best travel packages, handpicked with love ❤️
        </Typography>
        <Container maxWidth="md">
          <SearchBar
            searchParams={searchParams}
            setParams={setSearchParams}
            onSearch={() => handleSearch()}
            onReset={handleReset}
          />
        </Container>
      </Box>

      {packages?.length > 0 ? <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0 auto', marginTop: 2, width: { md: '70%' } }}>
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.packageName}
            packageData={pkg}
          />
        ))}
      </Box> : packages ? (
        <Box
          sx={{
            textAlign: 'center',
            mt: 6,
            color: 'text.secondary',
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            No packages found.
          </Typography>
          <Typography variant="body2">
            Try adjusting your filters or check back later.
          </Typography>
        </Box>
      ) : null}

      {/* Popular Destinations */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight={600} textAlign="center" color='#003366' sx={{ fontSize: { xs: '2rem', sm: '2.4rem' } }} gutterBottom>
          Popular Destinations
        </Typography>

        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            gap: 3,
            py: 2,
            px: 1,
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {destinations.map((dest, index) => (
            <DestinationCard key={index} onClick={() => handleDestinationPress(dest)}>
              <Image component="img" image={dest.image} alt={dest.name} />
              <Overlay>
                <Title>{dest.name}</Title>
              </Overlay>
            </DestinationCard>
          ))}
        </Box>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: '#f4f4f4',
          textAlign: 'center',
          py: 3,
          mt: 1,
          fontSize: '0.9rem',
          color: '#555',
        }}
      >
        © {new Date().getFullYear()} Sahil Holidays. All rights reserved.
      </Box>
    </Box>
  );
};

export default TravelHomePage;