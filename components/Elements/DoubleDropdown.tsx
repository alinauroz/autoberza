import React from 'react';
import DropDownMenu, { LV } from './Dropdown';
import { DoubleDropdown } from '@/types';

interface Props {
  DoubleDropdownData: DoubleDropdown;
}

const DoubleDropdown: React.FC<Props> = ({ DoubleDropdownData }) => {
  const [selectedFirst, setSelectedFirst] = React.useState<LV>();
  const [selectedSecond, setSelectedSecond] = React.useState<LV>();

  const options1 = React.useMemo(() => {
    return Object.keys(DoubleDropdownData.doubleOptions).map((e) => ({
      label: e,
      value: e,
    }));
  }, [DoubleDropdownData]);

  const options2 = React.useMemo(() => {
    if (typeof selectedFirst == 'undefined') return [];

    return DoubleDropdownData.doubleOptions[selectedFirst.value].map((e) => ({
      label: e,
      value: e,
    }));
  }, [selectedFirst]);

  React.useEffect(() => {
    console.log('{{{{DoubleDropdownData}}}}', DoubleDropdownData);
  }, [DoubleDropdownData]);

  return (
    <>
      <DropDownMenu
        name={DoubleDropdownData.label}
        options={options1}
        selectedLV={selectedFirst}
        setSelectedLV={setSelectedFirst}
      />
      <DropDownMenu
        name={DoubleDropdownData.label2}
        options={options2}
        selectedLV={selectedSecond}
        setSelectedLV={setSelectedSecond}
        isDisabled={typeof selectedFirst == 'undefined'}
      />
    </>
  );
};

export default DoubleDropdown;
