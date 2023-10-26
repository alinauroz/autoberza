import Input from '@/components/Elements/Input';
import { DynamicFiltersResponse } from '@/types';
import React from 'react';

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

  React.useEffect(() => {
    const allSections = Array.from(new Set(data.map((e) => e.section)));
    let temp: ProcessedData = {};

    allSections.forEach((sectionTitle) => {
      temp[sectionTitle] = data.filter((d) => d.section === sectionTitle);
    });
    setProcessedData({ ...temp });
  }, [data]);

  const sectionTitles = React.useMemo(() => {
    return Object.keys(processedData || {});
  }, [processedData]);

  if (!processedData) return;

  return (
    <div className="mt-4">
      {sectionTitles.map((sectionTitle, i) => {
        const currentSectionElements = processedData[sectionTitle];
        return (
          <div key={i} className="">
            <div className="">
              <span>{sectionTitle}</span>
            </div>

            <div className={` bg-white `}>
              {currentSectionElements.map((filterObj, elIndex) => {
                if (filterObj.type === 'checkbox') {
                  return (
                    <div key={elIndex} className="">
                      <input type="checkbox" /* name={el.name} */ />
                      <label>{filterObj.label}</label>
                    </div>
                  );
                } else if (filterObj.type === 'select') {
                  return (
                    <div key={elIndex}>
                      <input type="checkbox" /* name={el.name} */ />
                      <label htmlFor="">{filterObj.label}</label>
                    </div>
                  );
                } else if (filterObj.type === 'text') {
                  return (
                    <div key={elIndex} className="">
                      <p key={elIndex}>Min</p>
                      <Input />
                      <p key={elIndex}>Max</p>
                      <Input />
                      {filterObj.addon}
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
