'use client';
import { ReactElement, useState, useEffect } from 'react';
import downBtn from '@/public/assets/common/dd-icon-dark-filled.svg';
import useClickOutside from '@/utils/useClickOutside';
import '@/styles/elements.css';
import Image from 'next/image';

export interface LV {
  label: string | number | ReactElement;
  value: string | number;
}

interface Props {
  options: LV[];
  selectedLV: LV | undefined;
  setSelectedLV: (x: LV) => void;
  conatinerClass?: string;
  containerStyles?: React.CSSProperties;
  inputStyles?: React.CSSProperties;
  name: string;
  img?: string;
  isDisabled?: boolean;
  inputClass?: string;
}

const DropDownMenu = ({
  options,
  selectedLV,
  setSelectedLV,
  conatinerClass,
  containerStyles = {},
  name,
  img,
  isDisabled = false,
  inputClass = '',
  inputStyles = {},
}: Props) => {
  const [isDDActive, setIsDDActive] = useState(false);
  const [searchStr, setSearchStr] = useState('');

  useEffect(() => {
    if (isDisabled) setIsDDActive(false);
  }, [isDisabled]);

  const handleCloseDD = () => {
    setIsDDActive(false);
  };

  const ddRef = useClickOutside(handleCloseDD);

  const handlerDropdown = () => {
    if (isDisabled) {
      setIsDDActive(false);
      return;
    }
    setIsDDActive(!isDDActive);
  };

  return (
    <div
      className={'dd-wrapper ' + conatinerClass}
      ref={ddRef}
      style={{
        ...containerStyles,
        opacity: isDisabled ? '0.5' : '1',
        pointerEvents: isDisabled ? 'none' : undefined,
      }}
    >
      <div
        className={`dd-title ${inputClass}`}
        style={{
          ...inputStyles,
          color: typeof selectedLV?.label === 'undefined' ? '#444' : '#000',
        }}
        onClick={handlerDropdown}
      >
        {selectedLV?.label || name}
      </div>
      <div
        onClick={handlerDropdown}
        className="dd-btn-container"
        style={{
          backgroundColor: isDDActive ? '#0001' : '',
        }}
      >
        <Image src={img ? img : downBtn} alt="" style={containerStyles} />
      </div>

      {isDDActive && (
        <div className={`dropdown-menu`}>
          {options
            .filter((option) =>
              option.label
                .toString()
                .toLowerCase()
                .includes(searchStr.toLowerCase())
            )
            .map((option) => {
              const isSelected = selectedLV?.value === option.value;
              return (
                <div
                  key={option.value}
                  className="dropdown-menu-item"
                  onClick={() => {
                    setSelectedLV(option);
                    setTimeout(() => {
                      setSearchStr('');
                    }, 100);
                    setTimeout(() => {
                      handleCloseDD();
                    }, 100);
                  }}
                  style={{
                    backgroundColor: isSelected ? '#0002' : '',
                    color: isSelected ? '#000' : '',
                  }}
                >
                  {option.label}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
