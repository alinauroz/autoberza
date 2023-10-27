import DropDownMenu from '@/components/Elements/Dropdown';
import Input from '@/components/Elements/Input';
import { DynamicFiltersResponse } from '@/types';
import Image from 'next/image';
import React from 'react';
import DropdwonIcon from '@/public/assets/common/searchPage/dropdownIcon.svg';

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
      className={`lg:block lg:w-1/2 sm:w-full sm:absolute lg:static top-[68px] ${
        !showFilter ? 'hidden' : ''
      }`}
      style={{
        height: 'calc(100vh - 68px)',
      }}
    >
      <button
        onClick={() => {
          setShowFilter(false);
        }}
      >
        Close
      </button>
      {fieldTitles.map((fieldTitle, i) => {
        const currentSectionElements = processedData[fieldTitle];
        return (
          <div key={i} className="">
            <div
              onClick={() => handleNavItems(fieldTitle)}
              className={`border-b bg-white border-gray-300 flex items-center justify-between px-4 py-2 cursor-pointer`}
            >
              <span
                // onClick={handleNavItems}
                className="text-lg py-2 font-semibold"
              >
                {fieldTitle}
              </span>
              <Image src={DropdwonIcon} alt="" className="w-[13px]" />
            </div>

            <div
              className={`bg-white px-6 text-md pt-2 ${
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
                      <label htmlFor=""></label>
                    </div>
                  );
                } else if (filterObj.type === 'text') {
                  return (
                    <div key={elIndex} className="py-2 flex items-center gap-3">
                      <p className="pb-1 leading-3">
                        Min{' '}
                        <span className="text-[10px] pl-0.5 font-black">
                          {filterObj.addon}
                        </span>{' '}
                      </p>
                      <Input
                        style={{
                          height: '50px',
                          borderRadius: '5px',
                        }}
                      />
                      <p className="pb-1 leading-3">
                        Max{' '}
                        <span className="text-[10px] pl-0.5 font-black">
                          {filterObj.addon}
                        </span>{' '}
                      </p>
                      <Input
                        style={{
                          height: '50px',
                          borderRadius: '5px',
                        }}
                      />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterComp;
