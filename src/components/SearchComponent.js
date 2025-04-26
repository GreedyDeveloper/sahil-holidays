import React from 'react';
import styled from 'styled-components';
import {device} from 'styles/breakpoints';

const SearchBarContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: 10px;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  padding: 10px 20px;
  cursor: pointer;
  border-right: 1px solid ${({theme}) => theme.colors.border};

  &:last-child {
    border-right: none;
  }
  
  @media ${device.mobile} {
    flex: none;
    width: 100%;
    border-right: none;
    border-bottom: 1px solid ${({theme}) => theme.colors.border}
  }
`;

const Label = styled.div`
  font-size: ${({theme}) => theme.fontSizes.sm};
  margin-bottom: 5px;
  font-weight: ${({theme}) => theme.fontWeights.regular};
`;

const Value = styled.div`
  font-size: ${({theme}) => theme.fontSizes.xxl};
  font-weight: ${({theme}) => theme.fontWeights.heavy};
  color: #000;
`;

const SubText = styled.div`
  font-size: ${({theme}) => theme.fontSizes.sm};
  font-weight: ${({theme}) => theme.fontWeights.regular};
`;

const SearchButton = styled.button`
  background: linear-gradient(93deg, #FF6D38, #FF6D38);
  color: #fff;
  font-size: ${({theme}) => theme.fontSizes.xl};
  font-weight: ${({theme}) => theme.fontWeights.heavy};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  align-self: center;
  margin-top: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
  font-family: 'Quicksand', sans-serif;
  padding: 10px;
  width: 216px;

  &:hover {
    transform: translateY(-2px);
  }
`;

const SearchComponent = () => {
  return (
    <SearchBarContainer>
      <Row>
        <Column>
          <Label>From City</Label>
          <Value>New Delhi</Value>
          <SubText>India</SubText>
        </Column>
        <Column>
          <Label>To City/Country/Category</Label>
          <Value>Kerala</Value>
        </Column>
        <Column>
          <Label>Departure Date</Label>
          <Value>1 May, 2025</Value>
          <SubText>Thursday</SubText>
        </Column>
      </Row>
      <SearchButton>SEARCH</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchComponent;
