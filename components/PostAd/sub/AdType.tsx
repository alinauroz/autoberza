'use client';
import React, { useMemo } from 'react';
import '@/styles/postAd.css';
import Button from '@/components/Elements/Button';
import Link from 'next/link';
import { FormattedMessage, useIntl } from 'react-intl';

const AdType = ({ id }: { id?: string }) => {
  const [isLeftScrolled, setIsLeftScrolled] = React.useState(false);
  const intl = useIntl();
  const cardsData = useMemo(
    () => [
      {
        title: intl.formatMessage({
          defaultMessage: 'FREE',
          id: 'adtype.free',
        }),
        amount: 0,
        featureList: [
          intl.formatMessage({
            defaultMessage: 'Standard display of ads',
            id: 'adtype.free-f-1',
          }),
        ],
        plan: 'FREE',
      },
      {
        title: 'PROMO 5',
        plan: 'PROMO-5',
        amount: process.env.NEXT_PUBLIC_PRICE_5_DAY || 10,
        featureList: [
          intl.formatMessage({
            defaultMessage: 'Faster sales',
            id: 'promo-5-f-1',
          }),
          intl.formatMessage({
            defaultMessage: 'Always before FREE',
            id: 'promo-5-f-2',
          }),
          intl.formatMessage({
            defaultMessage: 'Marked as PAID AD',
            id: 'promo-5-f-3',
          }),
          intl.formatMessage({
            defaultMessage: 'Duration of 5 days',
            id: 'promo-5-f-4',
          }),
        ],
      },
      {
        title: 'PROMO 10',
        plan: 'PROMO-10',
        amount: process.env.NEXT_PUBLIC_PRICE_10_DAY || 15,
        featureList: [
          intl.formatMessage({
            id: 'promo-10-f-1',
            defaultMessage: 'Faster sales',
          }),
          intl.formatMessage({
            id: 'promo-10-f-2',
            defaultMessage: 'Always before FREE',
          }),
          intl.formatMessage({
            id: 'promo-10-f-3',
            defaultMessage: 'Marked as PAID AD',
          }),
          intl.formatMessage({
            id: 'promo-10-f-4',
            defaultMessage: 'Duration of 10 days',
          }),
        ],
      },
    ],
    [intl]
  );

  return (
    <div className="ad-type-wrapper">
      <div className="ad-type-section-header">
        <div className="post-ad-section-heading">
          <span>
            <FormattedMessage
              defaultMessage="CHOOSE THE TYPE OF AD"
              id="adtype.type"
            />
          </span>
        </div>
        <div
          className={`ad-cards-scroll-controls scrolled-${
            isLeftScrolled ? 'left' : 'right'
          }`}
        >
          <div
            className="ad-cards-scroll-controls__left"
            onClick={() => {
              setIsLeftScrolled(true);
            }}
          >
            <div className="arrow-icon"></div>
          </div>
          <div
            className="ad-cards-scroll-controls__right"
            onClick={() => {
              setIsLeftScrolled(false);
            }}
          >
            <div className="arrow-icon"></div>
          </div>
        </div>
      </div>

      <div
        className={`ad-types-cards cards-${isLeftScrolled ? 'left' : 'right'}`}
      >
        {cardsData.map(({ amount, featureList, title, plan }, i) => {
          return (
            <div className="ad-type-card" key={i}>
              <div className="ad-type-card__header">{title}</div>
              <div className="ad-type-card__body">
                <div className="ad-type-card__body__amount">€ {amount}</div>
                <div className="ad-type-card__body__features">
                  {featureList.map((item, itemIndex) => {
                    return (
                      <div className="feature-item" key={itemIndex}>
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="ad-type-card__footer">
                {plan === 'FREE' ? (
                  <Button
                    type="button"
                    text="CHOOSE"
                    style={{ padding: '10px 35px' }}
                  />
                ) : (
                  <Link
                    href={`/api/2co/create-checkout-session?adId=${id}&plan=${plan}`}
                  >
                    <Button
                      type="button"
                      text="CHOOSE"
                      style={{ padding: '10px 35px' }}
                    />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdType;
