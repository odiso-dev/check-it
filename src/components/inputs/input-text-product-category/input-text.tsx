import React from 'react';
import './input-text.module.css';

type Input = 'category' | 'product';

interface Props {
  type: Input;
  placeholder: string;
  required: boolean;
}

export const InputTextItem: React.FC<Props> = (props) => {
  const { type, placeholder, required } = props;

  return (
    <>
      <label htmlFor={type}>{type}</label>
      <input
        type="text"
        name={type}
        id={type}
        placeholder={`Type ${placeholder} name`}
        required={required}
      />
    </>
  );
};
