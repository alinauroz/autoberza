'use client';
import {
  DynamicSectionsResponse,
  DoubleDropdown as IDoubleDropdown,
} from '@/types';
import React from 'react';
import '@/styles/postAd.css';
import Input from '@/components/Elements/Input';
import UCDropdown from '@/components/Elements/UCDropdown';
import DoubleDropdown from '@/components/Elements/DoubleDropdown';

interface Props {
  data: DynamicSectionsResponse[];
  prefill?: any;
}

type ProcessedData = { [x: string]: DynamicSectionsResponse[] };

const Dynamic: React.FC<Props> = ({ data, prefill }) => {
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
    <>
      <div className="dynamic-part-wrapper">
        {sectionTitles.map((sectionTitle, i) => {
          const currentSectionElements = processedData[sectionTitle];
          const isBasicSection = sectionTitle.toLowerCase() === 'basic';
          return (
            <div className="section-conatiner" key={i}>
              <div className="post-ad-section-heading">
                <span>{sectionTitle}</span>
              </div>

              <div
                className="section-body grid-cols-1 md:grid-cols-4"
                style={{
                  backgroundColor: isBasicSection ? '#fff0' : '#fff',
                  padding: isBasicSection ? '0 5%' : '24px 5%',
                }}
              >
                {isBasicSection && (
                  <div className="md:col-span-4">
                    <Input
                      placeholder="Title"
                      name="title"
                      required
                      style={{
                        height: '65px',
                        margin: 0,
                        boxShadow: '0px 1px 4px 2px #00000017',
                        border: 'none',
                      }}
                      prefill={prefill?.details}
                    />
                  </div>
                )}
                {currentSectionElements.map((el, elIndex) => {
                  if (el.type === 'checkbox') {
                    return (
                      <div key={elIndex} className="checkbox-container">
                        <input
                          type="checkbox"
                          name={el.name}
                          defaultChecked={prefill?.details?.[el.name]}
                        />
                        <label>{el.label}</label>
                      </div>
                    );
                  } else if (el.type === 'text') {
                    return (
                      <div key={elIndex}>
                        <Input
                          placeholder={el.label}
                          style={{
                            height: '65px',
                            margin: 0,
                            boxShadow: '0px 1px 4px 2px #00000017',
                            border: 'none',
                          }}
                          addon={el.addon}
                          name={el.name}
                          prefill={prefill?.details}
                        />
                      </div>
                    );
                  } else if (el.type === 'select') {
                    const options = el.options.map((e) => ({
                      value: e,
                      label: e,
                    }));
                    return (
                      <UCDropdown
                        key={elIndex}
                        name={el.label}
                        options={options}
                        id={el.name}
                        prefill={prefill?.details}
                      />
                    );
                  } else if (el.type.toLowerCase() === 'doubledropdown') {
                    return (
                      <DoubleDropdown
                        key={elIndex}
                        DoubleDropdownData={el}
                        prefill={prefill?.details}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dynamic;
