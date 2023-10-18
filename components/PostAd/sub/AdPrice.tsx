'use client';
import React, { useState } from 'react';
import DropDownMenu, { LV } from '@/components/Elements/Dropdown';
import Input from '@/components/Elements/Input';

const AdPrice = () => {
  const [slectedPriceType, setSlectedPriceType] = useState<LV>();
  const [slectedReplacement, setSlectedReplacement] = useState<LV>();

  return (
    <div className="ad-price-section-wrapper">
      <div className="ad-type-section-header">
        <div className="post-ad-section-heading">
          <span>PRICE DESCRIPTION & REPLACEMENT</span>
        </div>
      </div>
      <div className="ad-price">
        <div className="ad-price-section-pricing">
          <div className="price-input">
            <Input
              placeholder="Price"
              style={{
                borderRadius: '15px',
                border: 'none',
                boxShadow: '0px 0 4px 2px #00000017',
              }}
            />
          </div>
          <div className="ad-price-section-pricing-type">
            <DropDownMenu
              options={[
                { value: 'tempId1', label: 'Cash' },
                { value: 'tempId1', label: 'Credit Card' },
                { value: 'tempId1', label: 'Easypaisa' },
                { value: 'tempId1', label: 'Raast' },
              ]}
              name="Price type"
              selectedLV={slectedPriceType}
              setSelectedLV={setSlectedPriceType}
            />
          </div>
          <div className="ad-price-section-pricing-type">
            <DropDownMenu
              options={[
                { value: 'tempId2', label: 'Here is the replacement-1' },
                { value: 'tempId2', label: 'Here is the replacement-2' },
                { value: 'tempId2', label: 'Here is the replacement-3' },
                { value: 'tempId2', label: 'Here is the replacement-4' },
              ]}
              name="Replacement"
              selectedLV={slectedReplacement}
              setSelectedLV={setSlectedReplacement}
            />
          </div>
        </div>
        <div className="price-description-detail">
          <p className="price-description-detail-heading">
            Ad Description <span className="steric">*</span>
          </p>
          <p className="price-description-detail-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            laboriosam blanditiis deserunt amet voluptates dolorum odit,
            expedita eum ipsa, reprehenderit ullam repellendus error placeat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdPrice;
