import React from 'react';
import { BtnHolder } from './Button.styles';

const Button = ({category, txt}) => {

  console.log(category)
  return (
    <BtnHolder $category={category}>
      {txt? txt : 'default'}
    </BtnHolder>
  );
}

export default Button;
