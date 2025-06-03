// src/components/HolidayPackageCard.js
import React from 'react';
import styled from '@emotion/styled';
import {device} from 'styles/breakpoints';
import {theme} from 'styles/theme';

const Container = styled.div`
  width: 1200px;
  margin: 40px auto 0 auto;
  padding: 36px 0 25px 40px;
  background-color: ${theme.colors.white};
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
    background-color: ${theme.colors.background};
  }
`;

const Title = styled.div`
  display: flex;
  color: #000000;
  line-height: 38px;
  font-weight: 900;
  font-size: ${theme.fontSizes.xxl};

  @media ${device.mobile} {
    font-size: ${theme.fontSizes.lg};
    line-height: 28px;
  }
`;

const Description = styled.div`
  line-height: 19px;
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.regular};

  @media ${device.mobile} {
    font-size: ${theme.fontSizes.sm};
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