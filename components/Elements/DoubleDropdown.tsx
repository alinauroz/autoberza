import React, { useEffect } from 'react';
import DropDownMenu, { LV } from './Dropdown';
import { DoubleDropdown } from '@/types';
import Cookies from 'js-cookie';

interface Props {
  DoubleDropdownData: DoubleDropdown;
  prefill?: any;
  inputsClass?: string;
  inputsStyles?: React.CSSProperties;
  onChange?: (x: string, y: string) => void;
}

const DoubleDropdown: React.FC<Props> = ({
  DoubleDropdownData,
  prefill,
  inputsClass = '',
  inputsStyles = {},
  onChange,
}) => {
  const [selectedFirst, setSelectedFirst] = React.useState<LV>();
  const [selectedSecond, setSelectedSecond] = React.useState<LV>();

  const options1 = React.useMemo(() => {
    const locale = Cookies.get('locale');
    const optionsMn = Object.keys(
      (DoubleDropdownData as any).doubleOptionsMn || {}
    );
    return Object.keys(DoubleDropdownData.doubleOptions).map((e, i) => ({
      label: optionsMn[i] && locale === 'mr' ? optionsMn[i] : e,
      value: e,
    }));
  }, [DoubleDropdownData]);

  const options2 = React.useMemo(() => {
    if (typeof selectedFirst == 'undefined') return [];
    const optionsMn = (DoubleDropdownData as any).doubleOptionsMn?.[
      selectedFirst?.label as string
    ];
    const locale = Cookies.get('locale');
    return DoubleDropdownData.doubleOptions[selectedFirst.value].map(
      (e, i) => ({
        label: locale === 'mr' && optionsMn?.[i] ? optionsMn[i] : e,
        value: e,
      })
    );
  }, [selectedFirst]);

  useEffect(() => {
    if (prefill) {
      setSelectedFirst(
        options1.find(
          (option) => option.value === prefill?.[DoubleDropdownData.id]
        )
      );
      setSelectedSecond(
        options2.find(
          (option) => option.value === prefill?.[DoubleDropdownData.id2]
        )
      );
      console.log('Prefill', DoubleDropdownData.id2, options2);
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
        setSelectedLV={(option) => {
          onChange?.(DoubleDropdownData.id, option.value + '');
          setSelectedFirst(option);
        }}
        inputClass={inputsClass}
        inputStyles={inputsStyles}
      />
      <DropDownMenu
        name={DoubleDropdownData.label2}
        options={options2}
        selectedLV={selectedSecond}
        setSelectedLV={(option) => {
          onChange?.(DoubleDropdownData.id2, option.value + '');
          setSelectedSecond(option);
        }}
        isDisabled={typeof selectedFirst == 'undefined'}
        inputClass={inputsClass}
        inputStyles={inputsStyles}
      />
    </>
  );
};

export default DoubleDropdown;
