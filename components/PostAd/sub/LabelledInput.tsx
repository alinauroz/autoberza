import Input from '@/components/Elements/Input';
import React from 'react';

interface Props {
  labelText: string;
}

const LabelledInput = ({ labelText }: Props) => {
  return (
    <div className="label-input">
      <div className="label-text">{labelText}</div>
      <Input
        style={{
          border: '0.5px solid #5E6762',
          height: '56px',
        }}
      />
    </div>
  );
};

export default LabelledInput;
