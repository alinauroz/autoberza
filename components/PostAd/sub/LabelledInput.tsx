import Input from '@/components/Elements/Input';
import React from 'react';

interface Props {
  labelText: string;
  isDisabled?: boolean;
}

const LabelledInput = ({ labelText, isDisabled = false }: Props) => {
  return (
    <div className="label-input">
      <div className="label-text">{labelText}</div>
      <Input
        style={{
          border: '0.5px solid #5E6762',
          height: '40px',
          backgroundColor: '#F4F4F4',
          borderRadius: '0px 5px 5px 5px',
          fontSize: '18px',
          paddingTop: '25px',
        }}
        disabled={isDisabled}
      />
    </div>
  );
};

export default LabelledInput;
