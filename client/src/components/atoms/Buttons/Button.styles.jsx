// import { darken, cssVar } from 'polished';
import styled, { css } from 'styled-components';
// import { ListboxButton } from '@reach/listbox';

export const IconHolder = styled.span``;

// const loadingCircle = keyframes`
//   to {
//     transform: rotate(1turn);
//   }
// `;

export const BtnHolder = styled.button`
  padding: 10px 20px;
  // background-color: red;
  border-radius: 15px;
  font-size: 18px;

  ${({ $category }) =>
    $category === 'green' &&
    css`
      background: #94CA60;
      &:hover {
        background: #94CA60;
      }
    `}

  ${({ $category }) =>
    $category === 'primary' &&
    css`
      background: #1B2398;
      color: white;
      &:hover {
        background: #1B2398;
      }
    `}

  ${({ $category }) =>
    $category === 'red' &&
    css`
      background: #d0191d;
      &:hover {
        background: #d0191d;
      }
    `}
`;
