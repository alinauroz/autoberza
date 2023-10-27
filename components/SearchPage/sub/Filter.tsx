import DropDownMenu from '@/components/Elements/Dropdown';
import Input from '@/components/Elements/Input';
import { DynamicFiltersResponse } from '@/types';
import Image from 'next/image';
import React from 'react';
import DropdwonIcon from '@/public/assets/common/searchPage/dropdownIcon.svg';

// const data = [
//   { type: 'checkbox', label: 'Airbags', section: 'Security' },
//   {
//     type: 'select',
//     label: 'Year',
//     section: 'Basic',
//     options: ['2001', '2002', '2003', '2204', '2005'],
//   },
//   { type: 'text', label: 'Other Info', section: 'Additional' },
//   { type: 'text', label: 'Power Info', section: 'Additional', addon: 'KM' },
// ];

interface Props {
  data: DynamicFiltersResponse[];
}

type ProcessedData = { [x: string]: DynamicFiltersResponse[] };

const FilterComp = ({ data }: Props) => {
  const [processedData, setProcessedData] = React.useState<ProcessedData>();
  const [isActive, setIsActive] = React.useState('');

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

  // const handleNavItems = () => {
  //   fieldTitles === isActive ? setIsActive('') : setIsActive(fieldTitles);
  // };

  return (
    <div className="mt-4">
      {fieldTitles.map((fieldTitle, i) => {
        const currentSectionElements = processedData[fieldTitle];
        return (
          <div key={i} className="">
            <div className="border-b bg-white border-gray-300 flex items-center justify-between px-4 py-2 cursor-pointer">
              <span
                // onClick={handleNavItems}
                className="text-lg py-2 font-semibold"
              >
                {fieldTitle}
              </span>
              <Image src={DropdwonIcon} alt="" className="w-[13px]" />
            </div>

            <div className="bg-white px-6 text-md pt-2">
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
                          <div className="flex items-center gap-2 pt-2">
                            <input
                              key={yearsIndex}
                              type="checkbox"
                              className=""
                            />
                            {years}
                          </div>
                        );
                      })}
                      <label key={elIndex} htmlFor=""></label>
                    </div>
                  );
                } else if (filterObj.type === 'text') {
                  return (
                    <div key={elIndex} className="py-2 flex items-center gap-3">
                      <p className="pb-1 leading-3" key={elIndex}>
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
                      <p className="pb-1 leading-3" key={elIndex}>
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
