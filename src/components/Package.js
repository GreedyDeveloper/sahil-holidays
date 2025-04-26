import React from 'react';
import styled from 'styled-components';
import {device} from 'styles/breakpoints';

const getImage = (imageName) => {
  try {
    return require(`../assets/${imageName}`);
  } catch {
    return require(`../assets/default.avif`); // fallback if image missing
  }
};

const Container = styled.div`
  height: 207px;
  width: 134px;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;

  @media ${device.mobile} {
    width: 90px;
    height: 120px;
    display: flex;
    flex-direction: column;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  @media ${device.mobile} {
    border-radius: 54px;
    height: 90px;
    width: 90px;
    margin-bottom: 10px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  background: linear-gradient(180deg, transparent -4.82%, #000 87.02%);
  position: absolute;
  bottom: 0;
  left: 0;

  @media ${device.mobile} {
    background: none;
    position: static;
    justify-content: center;
  }
`;

const Title = styled.p`
  font-size: ${({theme}) => theme.fontSizes.xs};
  color: ${({theme}) => theme.colors.white};
  font-weight: ${({theme}) => theme.fontWeights.heavy};
  padding: 10px 15px;
  margin: 0;

  @media ${device.mobile} {
    font-size: ${({theme}) => theme.fontSizes.md};
    color: ${({theme}) => theme.colors.black};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    padding: 0;
  }
`;

const Package = ({title, picture}) => {
  return (
    <Container>
      <Image src={getImage(picture)} alt={title} />
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
    </Container>
  );
};

export default Package;
