import React from 'react';
import styled from '@emotion/styled';
import {theme} from 'styles/theme';

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  width: 100%;
  background-color: ${theme.colors.primary};
  padding: 7px 30px 7px 20px;
  height: 66px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  height: 66px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 4px 9px;
  border-radius: 4px;
  margin-right: 5px;
`;

const InputLabel = styled.label`
  font-size: ${theme.fontSizes.md};
  margin-bottom: 5px;
  font-weight: ${theme.fontWeights.light};
  text-transform: uppercase;
  font-size: 12px;
  line-height: 12px;
  font-weight: 700;
  color: ${theme.colors.white};
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: 0;
  outline: 0;
  background: none;
  min-width: 140px;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.md};
  line-height: 16px;
  font-weight: ${theme.fontWeights.bold};
  text-transform: capitalize;
  font-family: 'Quicksand', sans-serif;
`;

const Button = styled.button`
  display: inline-block;
  flex-shrink: 0;
  color: #fff;
  text-transform: uppercase;
  font-weight: 900;
  cursor: pointer;
  outline: 0;
  border: 0;
  text-align: center;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.lg}; 
  font-family: 'Quicksand', sans-serif;
  border-radius: 34px;
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, .2);
  padding: 9px 20px;
  width: 176px;
  margin-left: 30px;
`;

const SearchBarComponent = () => {
  return (
    <SearchBar>
        <Wrapper>
          <InputBox>
            <InputLabel for="src" class="modify-search_inputlbl">starting from</InputLabel>
            <Input id="src" name="src" type="text" readonly="" placeholder="Select" value="New Delhi" />
          </InputBox>
          <InputBox>
            <InputLabel for="dest" class="modify-search_inputlbl">going to</InputLabel>
            <Input id="dest" name="dest" type="text" readonly="" placeholder="Select" value="Kerala" />
          </InputBox>
          <InputBox>
            <InputLabel for="dest" class="modify-search_inputlbl">starting date</InputLabel>
            <Input id="dest" name="dest" type="text" readonly="" placeholder="Select" value="Mon, 5 May 2025" />
          </InputBox>
          <Button>Search</Button>
        </Wrapper>
      </SearchBar>               
  );
};
export default SearchBarComponent;
