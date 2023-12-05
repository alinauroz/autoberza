'use client';
import React from 'react';
import '@/styles/postAd.css';
import Button from '@/components/Elements/Button';
import Link from 'next/link';
import { FormattedMessage, useIntl } from 'react-intl';

const AdType = ({ id }: { id?: string }) => {
  const [isLeftScrolled, setIsLeftScrolled] = React.useState(false);

  const intl = useIntl();

  const cardsData = [
    {
      title: intl.formatMessage({ defaultMessage: 'FREE', id: 'adtype.free' }),
      amount: 0,
      featureList: ['Standard display of ads'],
      plan: intl.formatMessage({ defaultMessage: 'FREE', id: 'adtype.free' }),
    },
    {
      title: intl.formatMessage({
        defaultMessage: 'PROMO 5',
        id: 'adtype.promo-5',
      }),
      plan: intl.formatMessage({
        defaultMessage: 'PROMO-5',
        id: 'adtype.promo-5',
      }),
      amount: 10,
      featureList: [
        'Faster sales',
        'Always before FREE',
        'Marked as PAID AD',
        <>
          Duration of <span style={{ color: '#00C489' }}>5 days</span>
        </>,
      ],
    },
    {
      title: intl.formatMessage({
        defaultMessage: 'PROMO 10',
        id: 'adtype.promo-10',
      }),
      plan: intl.formatMessage({
        defaultMessage: 'PROMO-10',
        id: 'adtype.promo-10',
      }),
      amount: 15,
      featureList: [
        'Faster sales',
        'Always before FREE',
        'Marked as PAID AD',
        <>
          Duration of <span style={{ color: '#00C489' }}>10 days</span>
        </>,
      ],
    },
  ];

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
