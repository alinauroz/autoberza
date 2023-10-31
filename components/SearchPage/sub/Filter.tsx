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
  setVariables: (x: any) => void;
  variables: any;
}

const FilterComp = ({
  data,
  setShowFilter,
  showFilter,
  setVariables,
  variables,
}: Props) => {
  const [processedData, setProcessedData] = React.useState<ProcessedData>();
  const [activeFilterTitles, setActiveFilterTitles] = React.useState<string[]>(
    []
  );

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
    let arr = [...activeFilterTitles];
    activeFilterTitles.includes(fieldTitle)
      ? (arr = activeFilterTitles.filter((item: string) => fieldTitle != item))
      : arr.push(fieldTitle);
    setActiveFilterTitles(arr);
  };

  return (
    <div
      className={`lg:block lg:w-1/2 sm:w-full sm:absolute lg:mt-1.5 mx-4 lg:mx-0 lg:static top-[68px] ${
        !showFilter ? 'hidden' : ''
      }`}
      style={{
        minHeight: 'calc(100vh - 68px)',
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
        const isFilterActive = activeFilterTitles.includes(fieldTitle);
        return (
          <div key={i} className="">
            <div
              onClick={() => handleNavItems(fieldTitle)}
              className={`bg-white flex items-center justify-between px-4 py-3 cursor-pointer ${
                activeFilterTitles ? 'border-t' : 'hidden'
              }`}
            >
              <span className="text-md py-2 font-semibold">{fieldTitle}</span>
              <Image
                src={DropdwonIcon}
                alt=""
                className={`w-[10px] lg:w-[13px] 
                ${isFilterActive ? 'rotate-180 ' : ''}
                `}
              />
            </div>

            <div
              className={`bg-white px-6 text-md py-3 ${
                !isFilterActive && 'hidden'
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
                      {filterObj.options.map((value, yearsIndex) => {
                        return (
                          <div
                            key={yearsIndex}
                            className="flex items-center gap-2 pt-2"
                          >
                            <input
                              type="checkbox"
                              className=""
                              onChange={(e) => {
                                if (filterObj.name in variables) {
                                  if (e.target.checked) {
                                    variables[filterObj.name].push(value);
                                  } else {
                                    variables[filterObj.name] = variables[
                                      filterObj.name
                                    ].filter((v: string) => v !== value);
                                  }
                                } else {
                                  variables[filterObj.name] = [value];
                                }
                                if (variables[filterObj.name].length === 0) {
                                  delete variables[filterObj.name];
                                }
                                setVariables({ ...variables });
                              }}
                            />
                            {value}
                          </div>
                        );
                      })}
                    </div>
                  );
                } else if (filterObj.type === 'text') {
                  return (
                    <div key={elIndex} className="py-2 flex items-center gap-3">
                      <div className="flex items-center relative w-full">
                        <Input
                          onChange={(e) => {
                            if (e.target.value) {
                              variables[filterObj.name] = e.target.value;
                            } else {
                              if (filterObj.name in variables) {
                                delete variables[filterObj.name];
                              }
                            }
                            setVariables({ ...variables });
                          }}
                        />
                        <div className="absolute right-2 text-sm font-bold">
                          {filterObj.addon}
                        </div>
                      </div>
                    </div>
                  );
                } else if (filterObj.type === 'minmax') {
                  return (
                    <div key={elIndex} className="py-2 flex items-center gap-3">
                      <div className="flex items-center gap-4 relative w-full">
                        <p className="text-sm font-bold">Min</p>
                        <Input
                          onChange={(e) => {
                            if (e.target.value) {
                              variables[filterObj.name] = e.target.value;
                            } else {
                              if (filterObj.name in variables) {
                                delete variables[filterObj.name];
                              }
                            }
                            setVariables({ ...variables });
                          }}
                        />
                        <div className="absolute right-2 text-sm font-bold">
                          {filterObj.addon}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 relative w-full">
                        <p className="text-sm font-bold">Max</p>
                        <Input
                          onChange={(e) => {
                            if (e.target.value) {
                              variables[filterObj.name2] = e.target.value;
                            } else {
                              if (filterObj.name2 in variables) {
                                delete variables[filterObj.name2];
                              }
                            }
                            setVariables({ ...variables });
                          }}
                        />
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
