import PackageCard from 'components/PackageCard';
import SearchBarComponent from 'components/SearchBar';
import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'styles/theme';

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

  return (
    <Container>
      <SearchBarComponent />
      <BannerContainer>
        <Banner background={require("../assets/kerala-banner-image.avif")} />
        <BannerContent>
          <ContentWrapper>
            <Title>Kerala Packages</Title>
            <Description>Plan Your Sojourn to God's Own Country</Description>
          </ContentWrapper>
        </BannerContent>
      </BannerContainer>
      <PackageCard />
    </Container >
  );
}

export default SearchScreen;