// src/components/HolidayPackageCard.js
import React from 'react';
import styled from 'styled-components';
import {device} from 'styles/breakpoints';

const Container = styled.div`
  width: 1200px;
  margin: 40px auto 0 auto;
  padding: 36px 0 25px 40px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 6px;
  box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${device.mobile} {
    width: 100%;
    padding: 20px;
    box-shadow: none;
    border-radius: 0;
    background-color: ${({theme}) => theme.colors.background};
  }
`;

const Title = styled.div`
  display: flex;
  color: #000000;
  line-height: 38px;
  font-weight: 900;
  font-size: ${({theme}) => theme.fontSizes.xxl};

  @media ${device.mobile} {
    font-size: ${({theme}) => theme.fontSizes.lg};
    line-height: 28px;
  }
`;

const Description = styled.div`
  line-height: 19px;
  font-size: ${({theme}) => theme.fontSizes.lg};
  font-weight: ${({theme}) => theme.fontWeights.regular};

  @media ${device.mobile} {
    font-size: ${({theme}) => theme.fontSizes.sm};
    line-height: 18px;
  }
`;

const Card = ({title, description, children}) => (
  <Container>
    <Title>{title}</Title>
    <Description>{description}</Description>
    {children}
  </Container>
);

export default Card;