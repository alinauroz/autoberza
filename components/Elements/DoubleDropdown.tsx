import React, { useEffect } from 'react';
import DropDownMenu, { LV } from './Dropdown';
import { DoubleDropdown } from '@/types';

interface Props {
  DoubleDropdownData: DoubleDropdown;
  prefill?: any;
}

const DoubleDropdown: React.FC<Props> = ({ DoubleDropdownData, prefill }) => {
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

  useEffect(() => {
    if (prefill) {
      setSelectedFirst(
        options1.find(
          (option) => option.value === prefill?.[DoubleDropdownData.id]
        )
      );
      setSelectedSecond(
        options2.find((option) => option.value === DoubleDropdownData.id2)
      );
    }
  }, [prefill, options1, options2]);

  return (
    <>
      <input
        type="hidden"
        name={DoubleDropdownData.id}
        value={selectedFirst?.value}
      />
      <input
        type="hidden"
        name={DoubleDropdownData.id2}
        value={selectedSecond?.value}
      />
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
