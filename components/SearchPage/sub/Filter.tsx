import React from 'react';

const data = [
  { type: 'checkbox', label: 'Airbags', section: 'Security' },
  {
    type: 'select',
    label: 'Year',
    section: 'Basic',
    options: ['2001', '2002', '2003', '2204', '2005'],
  },
  { type: 'text', label: 'Other Info', section: 'Additional' },
  { type: 'text', label: 'Power Info', section: 'Additional', addon: 'KM' },
];

const Filter = () => {
  return (
    <div className="px-4 mt-6 bg-white">
      <p className="py-2">Here will be Filter</p>
      <p className="py-2">Here will be Filter</p>
      <p className="py-2">Here will be Filter</p>
      <p className="py-2">Here will be Filter</p>
      <p className="py-2">Here will be Filter</p>
      <p className="py-2">Here will be Filter</p>
      <p className="py-2">Here will be Filter</p>
      <p className="py-2">Here will be Filter</p>
      <p className="py-2">Here will be Filter</p>
      <p className="py-2">Here will be Filter</p>
      <p className="py-2">Here will be Filter</p>
      <p className="py-2">Here will be Filter</p>
      <p className="py-2">Here will be Filter</p>
      <p className="py-2">Here will be Filter</p>
    </div>
  );
};

export default Filter;
