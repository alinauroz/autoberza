'use client';
import { DynamicSectionsResponse } from '@/types';
import React from 'react';

interface Props {
  data: DynamicSectionsResponse[];
}

const Dynamic: React.FC<Props> = ({ data }) => {
  React.useEffect(() => {
    console.log('{{{data}}}', data);
  }, [data]);

  return <div className="dynamic-part">Dynamic part will go here!</div>;
};

export default Dynamic;
