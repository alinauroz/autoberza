'use client';
import { DynamicSectionsResponse } from '@/types';
import React from 'react';
import '@/styles/postAd.css';
import './tempStyles.css';

interface Props {
  data: DynamicSectionsResponse[];
}

type ProcessedData = { [x: string]: DynamicSectionsResponse[] };

const Dynamic: React.FC<Props> = ({ data }) => {
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
    <div className="dynamic-part-wrapper">
      {sectionTitles.map((sectionTitle, i) => {
        return (
          <div className="section-conatiner" key={i}>
            <div className="post-ad-section-heading">
              <span>{sectionTitle}</span>
            </div>
            This section has elements:
            {processedData[sectionTitle].length}
          </div>
        );
      })}
    </div>
  );
};

export default Dynamic;
