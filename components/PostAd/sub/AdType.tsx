'use client';
import React from 'react';
import '@/styles/tempPostAd.css';
import '@/styles/postAd.css';
import Button from '@/components/Elements/Button';

const cardsData = [
  {
    title: 'FREE',
    amount: 0,
    featureList: ['Standard display of ads'],
  },
  {
    title: 'PROMO 5',
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
    title: 'PROMO 10',
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

const AdType = () => {
  const [isLeftScrolled, setIsLeftScrolled] = React.useState(false);

  return (
    <div className="ad-type-wrapper">
      <div className="ad-type-section-header">
        <div className="post-ad-section-heading">
          <span>CHOOSE THE TYPE OF AD</span>
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
        {cardsData.map(({ amount, featureList, title }, i) => {
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
                <Button text="CHOOSE" style={{ padding: '10px 35px' }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdType;
