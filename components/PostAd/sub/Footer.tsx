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
        title: 'VEHICLE CATEGORIES',
        items: [
          { text: 'Automobiles', link: 'home-page' },
          { text: 'Motorcycles and bicycles', link: 'home-page' },
          { text: 'Transport vehicles', link: 'home-page' },
          { text: 'Agricultural vehicles', link: 'home-page' },
          { text: 'Working machines', link: 'home-page' },
          { text: 'Nautical', link: 'home-page' },
          { text: 'Other categories', link: 'home-page' },
          { text: 'Parts and equipment', link: 'home-page' },
          { text: 'Service and services', link: 'home-page' },
          { text: 'Add an ad', link: 'post-ad?category=Bike#' },
        ],
      },
      {
        title: 'NAVIGATION',
        items: [
          { text: 'Shops', link: '#' },
          { text: 'Auto parts', link: '#' },
          { text: 'Car salons', link: '#' },
          { text: 'Auto waste', link: '#' },
          { text: 'Directory', link: '#' },
          { text: 'Vehicle insurance', link: '#' },
          { text: 'Auto news', link: '#' },
          { text: 'SMS ads', link: '#' },
          { text: 'Marketing', link: '#' },
          { text: 'Site map', link: '#' },
        ],
      },
      {
        title: 'YOUR AUTODEALER',
        items: [
          {
            text: intl.formatMessage({
              defaultMessage: 'Mobile applications',
              id: 'footer.mobile-application',
            }),
            link: '#',
          },
          { text: 'Contact', link: 'contact-us' },
          { text: 'Help', link: '#' },
          { text: 'Terms of use', link: 'terms-conditions' },
          { text: 'Privacy policy', link: 'privacy-policy' },
          { text: 'Consumer rights', link: '#' },
          { text: 'Safe trade', link: '#' },
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
