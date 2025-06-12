import PackageCard from 'components/PackageCard';
import SearchBarComponent from 'components/SearchBar';
import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import Card from 'components/Card';
import { DataContext } from 'App';
import Package from 'components/Package';
import { Box } from '@mui/material';
import moment from 'moment';

const Container = styled.div``;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Banner = styled.div`
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  display: inline-block;
  background-size: cover;
  width: 100%;
  height: 256px;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  -webkit-font-smoothing: antialiased;

  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;
    background: linear-gradient(270.47deg, rgba(0, 0, 0, 0) 3.65%, #000000 95.61%);
    opacity: .8;
    left: 0;
    transition: ease all .2s;
  }
`;

const BannerContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const ContentWrapper = styled.h1`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${theme.fontSizes.xxl};
  line-height: 27px;
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: 10px;
  font-family: 'Quicksand', sans-serif;
  color: ${theme.colors.white};
`;

const Description = styled.p`
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.light};
`;

function SearchScreen() {

  const { destinations, packages: packageData } = useContext(DataContext);
  const [searchParams, setSearchParams] = useState({
    departureCity: '',
    departureDate: null,
    destination: ''
  });

  const [packages, setPackages] = React.useState(null);

  const handleSearch = (params = searchParams) => {
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
  }

  const handleReset = () => {
    setSearchParams({
      departureCity: '',
      departureDate: null,
      destination: ''
    });
    setPackages(null);
  }

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
    <Container>
      <SearchBarComponent searchParams={searchParams} setParams={setSearchParams} onSearch={() => handleSearch()} onReset={handleReset} />
      {!packages ? <Card title={"Top Holiday Packages"} description={"Book now to grab best offers!"}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            width: '100%',
            overflowX: 'auto',
            marginTop: 20,
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            scrollBehavior: 'smooth',
          }}
        >
          {destinations.map((p) => (
            <Package key={p.name} title={p.name} picture={p.image} onClick={() => handleDestinationPress(p)} />
          ))}
        </div>
      </Card> : <Box sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center', margin: '0 auto', marginTop: 2, width: '70%' }}>
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.packageName}
            packageData={pkg}
          />
        ))}
      </Box>}

    </Container >
  );
}

export default SearchScreen;