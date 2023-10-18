import Input from '@/components/Elements/Input';
import React from 'react';

interface Props {
  labelText: string;
  isDisabled?: boolean;
  labelStyles?: React.CSSProperties;
  value?: string;
}

const LabelledInput = ({
  labelText,
  isDisabled = false,
  labelStyles,
  value,
}: Props) => {
  return (
    <div className="label-input">
      <div className="label-text" style={labelStyles}>
        {labelText}
      </div>
      <Input
        style={{
          border: '0.5px solid #5E6762',
          height: '40px',
          backgroundColor: '#fff',
          borderRadius: '0px 5px 5px 5px',
          fontSize: '18px',
          paddingTop: '25px',
        }}
        value={value}
        disabled={isDisabled}
      />
    </div>
  );
};

export default LabelledInput;
