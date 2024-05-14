import styled, { css } from 'styled-components';

export const PropertiesInput = styled.input`
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 5px;

  &:focus{
    outline: none;
    box-shadow: 0 0 5pt 2pt #1B2398;
  }
`;

export const PropertiesOptions = styled.select`
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 5px;

  &:focus{
    outline: none;
    box-shadow: 0 0 5pt 2pt #1B2398;
  }

  select::-ms-expand {
    display: none;
  }
`;

export const PropertiesContainer = styled.div`
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }
`