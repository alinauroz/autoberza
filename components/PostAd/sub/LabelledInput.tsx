import React from 'react';

interface Props {
  labelText: string;
}

const LabelledInput = ({ labelText }: Props) => {
  return <div>{labelText}</div>;
};

export default LabelledInput;
