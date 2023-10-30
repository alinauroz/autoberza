import DropDownMenu from '@/components/Elements/Dropdown';
import Input from '@/components/Elements/Input';
import { DynamicFiltersResponse } from '@/types';
import Image from 'next/image';
import React from 'react';
import DropdwonIcon from '@/public/assets/common/searchPage/dropdownIcon.svg';
import Button from '@/components/Elements/Button';

type ProcessedData = { [x: string]: DynamicFiltersResponse[] };

interface Props {
  data: DynamicFiltersResponse[];
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  showFilter: boolean;
}

const FilterComp = ({ data, setShowFilter, showFilter }: Props) => {
  const [processedData, setProcessedData] = React.useState<ProcessedData>();
  const [isActive, setIsActive] = React.useState<any>([]);

  React.useEffect(() => {
    const allSections = Array.from(new Set(data.map((e) => e.label)));
    let temp: ProcessedData = {};

    allSections.forEach((fieldTitle) => {
      temp[fieldTitle] = data.filter((d) => d.label === fieldTitle);
    });
    setProcessedData({ ...temp });
  }, [data]);

  const fieldTitles = React.useMemo(() => {
    return Object.keys(processedData || {});
  }, [processedData]);

  if (!processedData) return;

  const handleNavItems = (fieldTitle: string) => {
    let arr = [...isActive];
    isActive.includes(fieldTitle)
      ? (arr = isActive.filter((item: string) => fieldTitle != item))
      : arr.push(fieldTitle);
    setIsActive(arr);
  };

  return (
    <div
      className={`lg:block lg:w-1/2 sm:w-full sm:absolute lg:mt-1.5 mx-4 lg:mx-0 lg:static top-[68px] ${
        !showFilter ? 'hidden' : ''
      }`}
      style={{
        height: 'calc(100vh - 68px)',
      }}
    >
      <button
        className="flex justify-between text-gray-600 font-bold w-full px-4 py-4 mb-2 lg:hidden"
        onClick={() => {
          setShowFilter(false);
        }}
      >
        Filters
        <p className="font-semibold text-2xl text-gray-500">x</p>
      </button>
      {fieldTitles.map((fieldTitle, i) => {
        const currentSectionElements = processedData[fieldTitle];
        return (
          <div key={i} className="">
            <div
              onClick={() => handleNavItems(fieldTitle)}
              className={`bg-white flex items-center justify-between px-4 py-3 cursor-pointer ${
                isActive ? 'border-t' : 'hidden'
              }`}
            >
              <span className="text-md py-2 font-semibold">{fieldTitle}</span>
              <Image
                src={DropdwonIcon}
                alt=""
                className="w-[10px] lg:w-[13px]"
              />
            </div>

            <div
              className={`bg-white px-6 text-md py-3 ${
                !isActive.includes(fieldTitle) && 'hidden'
              }`}
            >
              {currentSectionElements.map((filterObj, elIndex) => {
                if (filterObj.type === 'checkbox') {
                  return (
                    <div key={elIndex} className="">
                      <input type="checkbox" className="mr-2 mb-4" />
                      <label>{filterObj.label}</label>
                    </div>
                  );
                } else if (filterObj.type === 'select') {
                  return (
                    <div key={elIndex}>
                      {filterObj.options.map((years, yearsIndex) => {
                        return (
                          <div
                            key={yearsIndex}
                            className="flex items-center gap-2 pt-2"
                          >
                            <input type="checkbox" className="" />
                            {years}
                          </div>
                        );
                      })}
                    </div>
                  );
                } else if (filterObj.type === 'text') {
                  return (
                    <div key={elIndex} className="py-2 flex items-center gap-3">
                      <div className="flex items-center relative w-full">
                        <Input />
                        <div className="absolute right-2 text-sm font-bold">
                          {filterObj.addon}
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        );
      })}
      <div className="lg:hidden bg-white">
        <Button
          text="Apply Filters"
          style={{
            height: '50px',
            fontSize: '14px',
            borderRadius: '8px',
            marginTop: '24px',
            marginLeft: '-0.5px',
          }}
        />
      </div>
    </div>
  );
};

export default FilterComp;
