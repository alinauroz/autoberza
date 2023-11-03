'use client';
import React from 'react';
import DropDownMenu from '@/components/Elements/UCDropdown';
import Input from '@/components/Elements/Input';

const AdPrice = ({ prefill }: { prefill: any }) => {
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
              required
              name="price"
              defaultValue={prefill?.price ? prefill?.price + '' : ''}
            />
          </div>
          <div className="price-input">
            <Input
              placeholder="Discounted Price"
              style={{
                borderRadius: '15px',
                border: 'none',
                boxShadow: '0px 0 4px 2px #00000017',
              }}
              name="discountedPrice"
              defaultValue={
                prefill?.discountedPrice ? prefill?.discountedPrice + '' : ''
              }
            />
          </div>
          {false && (
            <>
              <div className="ad-price-section-pricing-type">
                <DropDownMenu
                  options={[
                    { value: 'tempId1', label: 'Cash' },
                    { value: 'tempId1', label: 'Credit Card' },
                    { value: 'tempId1', label: 'Easypaisa' },
                    { value: 'tempId1', label: 'Raast' },
                  ]}
                  name="Price type"
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
                />
              </div>
            </>
          )}
        </div>
        <div className="price-description-detail">
          <p className="price-description-detail-heading">
            Ad Description <span className="steric">*</span>
          </p>
          <textarea
            name="description"
            className="price-description-detail-text"
            defaultValue={prefill?.description}
          />
        </div>
      </div>
    </div>
  );
};

export default AdPrice;
