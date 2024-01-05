'use client';
import ButtonGroup from '@/components/Elements/ButtonGroup';
import Dropdown from '@/public/assets/common/dropdown-icon.svg';
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Facebook from '@/public/assets/common/facebok.svg';
import Instagram from '@/public/assets/common/instagram.svg';
import Twitter from '@/public/assets/common/twitter.svg';
import LogoImg from '@/public/assets/common/logo.svg';
import FooterDropdown from '@/public/assets/common/footerDropdown.svg';
import Link from 'next/link';
import { FormattedMessage, useIntl } from 'react-intl';

const Footer = ({ containerClass }: { containerClass?: string }) => {
  const [isActive, setIsActive] = useState('');

  const handleNavItems = (item: string) => {
    item === isActive ? setIsActive('') : setIsActive(item);
  };
  const intl = useIntl();

  const footerMenus = useMemo(
    () => [
      {
        title: intl.formatMessage({
          defaultMessage: 'VEHICLE CATEGORIES',
          id: 'footer.categories',
        }),
        items: [
          {
            text: intl.formatMessage({
              defaultMessage: 'Automobiles',
              id: 'footer.home-page',
            }),
            link: 'home-page',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Motorcycles and bicycles',
              id: 'footer.home-page-2',
            }),
            link: 'home-page',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Transport vehicles',
              id: 'footer.home-page-3',
            }),
            link: 'home-page',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Agricultural vehicles',
              id: 'footer.home-page-4',
            }),
            link: 'home-page',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Working machines',
              id: 'footer.home-page-5',
            }),
            link: 'home-page',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Nautical',
              id: 'footer.home-page-6',
            }),
            link: 'home-page',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Other categories',
              id: 'footer.home-page-7',
            }),
            link: 'home-page',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Parts and equipment',
              id: 'footer.home-page-8',
            }),
            link: 'home-page',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Service and services',
              id: 'footer.home-page-9',
            }),
            link: 'home-page',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Add an ad',
              id: 'footer.post-ad?category=Bike#',
            }),
            link: 'post-ad?category=Bike#',
          },
        ],
      },
      {
        title: intl.formatMessage({
          defaultMessage: 'NAVIGATION',
          id: 'footer.navigation',
        }),
        items: [
          {
            text: intl.formatMessage({
              defaultMessage: 'Shops',
              id: 'footer.shops',
            }),
            link: '#',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Auto parts',
              id: 'footer.auto-parts',
            }),
            link: '#',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Car salons',
              id: 'footer.car-salons',
            }),
            link: '#',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Auto waste',
              id: 'footer.auto-waste',
            }),
            link: '#',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Directory',
              id: 'footer.directory',
            }),
            link: '#',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Vehicle insurance',
              id: 'footer.vehicle-insurance',
            }),
            link: '#',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Auto news',
              id: 'footer. auto-news',
            }),
            link: '#',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'SMS ads',
              id: 'footer.sms-ads',
            }),
            link: '#',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Marketing',
              id: 'footer.marketing',
            }),
            link: '#',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Site map',
              id: 'footer.site-map',
            }),
            link: '#',
          },
        ],
      },
      {
        title: intl.formatMessage({
          defaultMessage: 'YOUR AUTODEALER',
          id: 'footer.auto-dealer',
        }),
        items: [
          {
            text: intl.formatMessage({
              defaultMessage: 'Mobile applications',
              id: 'footer.mobile-application',
            }),
            link: '#',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Contact',
              id: 'footer.contact',
            }),
            link: 'contact-us',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Help',
              id: 'footer.help',
            }),
            link: '#',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Terms of use',
              id: 'footer.terms-conditions',
            }),
            link: 'terms-conditions',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Privacy policy',
              id: 'footer.privacy-policy',
            }),
            link: 'privacy-policy',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Delivery policy',
              id: 'deliverypolicy.delivery-policy',
            }),
            link: 'delivery',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Refund policy',
              id: 'refundpolicy.refund-policy-1',
            }),
            link: 'refund',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Consumer rights',
              id: 'footer.customer-rights',
            }),
            link: '#',
          },
          {
            text: intl.formatMessage({
              defaultMessage: 'Safe trade',
              id: 'footer.safe-trade',
            }),
            link: '#',
          },
        ],
      },
    ],
    [intl]
  );

  return (
    <div className={containerClass}>
      <div className="footer">
        <div className="footer-logo-profile">
          <div className="footer-logo">
            <Image src={LogoImg} alt="" className="footer-logo-img" />
          </div>
          <div className="social-media-profiles">
            <Image src={Facebook} alt="" />
            <Image src={Instagram} alt="" />
            <Image src={Twitter} alt="" />
          </div>
        </div>
        <div className="footer-navigations">
          {footerMenus.map((footerMenu, index) => {
            return (
              <div key={index} className="nav-container">
                <div className="list-heading">{footerMenu.title}</div>
                <div className="list-items">
                  {footerMenu.items.map(({ text, link }, index) => {
                    return (
                      <div
                        key={index}
                        className={`list-contaier ${
                          isActive != footerMenu.title && 'list-container-media'
                        }`}
                      >
                        <div className="bullet"></div>
                        <a href={link}>{text}</a>
                      </div>
                    );
                  })}
                </div>
                <Image
                  src={FooterDropdown}
                  alt=""
                  className="footer-dropdown-img"
                  onClick={() => handleNavItems(footerMenu.title)}
                />
              </div>
            );
          })}
        </div>
        <div className="footer-btn">
          <Link href="/post-ad">
            <ButtonGroup
              text={intl.formatMessage({
                defaultMessage: 'Post an Ad',
                id: 'header.header-ad',
              })}
              icon={Dropdown}
              style={{
                fontSize: '22px',
                padding: '10px 30px',
                paddingRight: '45px',
              }}
            />
          </Link>
        </div>
      </div>
      <div className="bg-black text-white text-center font-semibold pb-5 text-sm italic md:text-base">
        {' '}
        <FormattedMessage
          defaultMessage="Copyright 2020-2023 ©"
          id="footer.copyright1"
        />{' '}
        <a href="home-page">
          {' '}
          <FormattedMessage
            defaultMessage="Autoberza.me"
            id="footer.copyright2"
          />
        </a>{' '}
        <FormattedMessage
          defaultMessage="All Rights Reserved"
          id="footer.copyright"
        />
      </div>
    </div>
  );
};

export default Footer;
