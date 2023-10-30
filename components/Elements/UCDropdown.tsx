'use client';
import { ReactElement, useState } from 'react';
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
  conatinerClass?: string;
  containerStyles?: React.CSSProperties;
  name: string;
  img?: string;
  id?: string;
  prefill?: any;
}

const UCDropDownMenu = ({
  options,
  conatinerClass,
  containerStyles,
  name,
  img,
  id,
  prefill,
}: Props) => {
  const [isDDActive, setIsDDActive] = useState(false);
  const [searchStr, setSearchStr] = useState('');
  const [selectedLV, setSelectedLV] = useState<LV | undefined>(
    options.find((option) => option.value === prefill?.[id as string])
  );

  console.log('Selected', name, selectedLV);

  const handleCloseDD = () => {
    setIsDDActive(false);
  };

  const ddRef = useClickOutside(handleCloseDD);

  const handlerDropdown = () => {
    setIsDDActive(!isDDActive);
  };

  return (
    <div
      className={'dd-wrapper ' + conatinerClass}
      ref={ddRef}
      style={containerStyles}
    >
      <div
        className="dd-title"
        style={{
          color: typeof selectedLV?.label === 'undefined' ? '#444' : '#000',
        }}
        onClick={handlerDropdown}
      >
        {selectedLV?.label || name}
      </div>
      <input type="hidden" name={id} value={selectedLV?.value} />
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

export default UCDropDownMenu;
