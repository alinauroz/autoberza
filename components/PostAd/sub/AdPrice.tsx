'use client';
import React from 'react';
import DropDownMenu from '@/components/Elements/UCDropdown';
import Input from '@/components/Elements/Input';
import { FormattedMessage, useIntl } from 'react-intl';

const intl = useIntl();

const AdPrice = ({ prefill }: { prefill: any }) => {
  return (
    <div className="ad-price-section-wrapper">
      <div className="ad-type-section-header">
        <div className="post-ad-section-heading">
          <span>
            <FormattedMessage
              defaultMessage="PRICE DESCRIPTION & REPLACEMENT"
              id="adprice.price"
            />
          </span>
        </div>
      </div>
      <div className="ad-price">
        <div className="ad-price-section-pricing">
          <div className="price-input">
            <Input
              placeholder={intl.formatMessage({
                defaultMessage: 'Price',
                id: 'adprice.price-2',
              })}
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
              placeholder={intl.formatMessage({
                defaultMessage: 'Discounted Price',
                id: 'adprice.discounted-price',
              })}
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
                    {
                      value: intl.formatMessage({
                        defaultMessage: 'tempId1',
                        id: 'adprice.temp-id-1',
                      }),
                      label: intl.formatMessage({
                        defaultMessage: 'Cash',
                        id: 'adprice.cash',
                      }),
                    },
                    {
                      value: intl.formatMessage({
                        defaultMessage: 'tempId1',
                        id: 'adprice.temp-id-1',
                      }),
                      label: intl.formatMessage({
                        defaultMessage: 'Credit Card',
                        id: 'adprice.credit',
                      }),
                    },
                    {
                      value: intl.formatMessage({
                        defaultMessage: 'tempId1',
                        id: 'adprice.temp-id-1',
                      }),
                      label: intl.formatMessage({
                        defaultMessage: 'Easypaisa',
                        id: 'adprice.easypaisa',
                      }),
                    },
                    {
                      value: intl.formatMessage({
                        defaultMessage: 'tempId1',
                        id: 'adprice.temp-id-1',
                      }),
                      label: intl.formatMessage({
                        defaultMessage: 'Raast',
                        id: 'adprice.raast',
                      }),
                    },
                  ]}
                  name="Price type"
                />
              </div>
              <div className="ad-price-section-pricing-type">
                <DropDownMenu
                  options={[
                    {
                      value: intl.formatMessage({
                        defaultMessage: 'tempId2',
                        id: 'adprice.temp-id-2',
                      }),
                      label: intl.formatMessage({
                        defaultMessage: 'Here is the replacement-1',
                        id: 'adprice.replacement-1',
                      }),
                    },
                    {
                      value: intl.formatMessage({
                        defaultMessage: 'tempId2',
                        id: 'adprice.temp-id-2',
                      }),
                      label: intl.formatMessage({
                        defaultMessage: 'Here is the replacement-2',
                        id: 'adprice.replacement-2',
                      }),
                    },
                    {
                      value: intl.formatMessage({
                        defaultMessage: 'tempId2',
                        id: 'adprice.temp-id-2',
                      }),
                      label: intl.formatMessage({
                        defaultMessage: 'Here is the replacement-3',
                        id: 'adprice.replacement-5',
                      }),
                    },
                    {
                      value: intl.formatMessage({
                        defaultMessage: 'tempId2',
                        id: 'adprice.temp-id-2',
                      }),
                      label: intl.formatMessage({
                        defaultMessage: 'Here is the replacement-4',
                        id: 'adprice.replacement-3',
                      }),
                    },
                  ]}
                  name="Replacement"
                />
              </div>
            </>
          )}
        </div>
        <div className="price-description-detail">
          <p className="price-description-detail-heading">
            <FormattedMessage
              defaultMessage="Ad Description"
              id="adprice.description"
            />{' '}
            <span className="steric">*</span>
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
