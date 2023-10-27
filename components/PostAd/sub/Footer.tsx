'use client';
import ButtonGroup from '@/components/Elements/ButtonGroup';
import Dropdown from '@/public/assets/common/dropdown-icon.svg';
import React, { useState } from 'react';
import Image from 'next/image';
import Facebook from '@/public/assets/common/facebok.svg';
import Instagram from '@/public/assets/common/instagram.svg';
import Twitter from '@/public/assets/common/twitter.svg';
import LogoImg from '@/public/assets/common/logo.svg';
import FooterDropdown from '@/public/assets/common/footerDropdown.svg';
import Link from 'next/link';

const footerMenus = [
  {
    title: 'VEHICLE CATEGORIES',
    items: [
      ['Automobiles', '#'],
      ['Motorcycles and bicycles', '#'],
      ['Transport vehicles', '#'],
      ['Agricultural vehicles', '#'],
      ['Working machines', '#'],
      ['Nautical', '#'],
      ['Other categories', '#'],
      ['Parts and equipment', '#'],
      ['Service and services', '#'],
      ['Add an ad', '#'],
    ],
  },
  {
    title: 'NAVIGATION',
    items: [
      ['Shops', '#'],
      ['Auto parts', '#'],
      ['Car salons', '#'],
      ['Auto waste', '#'],
      ['Directory', '#'],
      ['Vehicle insurance', '#'],
      ['Auto news', '#'],
      ['SMS ads', '#'],
      ['Marketing', '#'],
      ['Site map', '#'],
    ],
  },
  {
    title: 'YOUR AUTODEALER',
    items: [
      ['Sign in', '#'],
      ['Mobile applications', '#'],
      ['Contact', '#'],
      ['Help', '#'],
      ['Terms of use', '#'],
      ['Privacy policy', '#'],
      ['Consumer rights', '#'],
      ['Safe trade', '#'],
    ],
  },
];

const Footer = ({ containerClass }: { containerClass?: string }) => {
  const [isActive, setIsActive] = useState('');

  const handleNavItems = (item: string) => {
    item === isActive ? setIsActive('') : setIsActive(item);
  };

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
                  {footerMenu.items.map(([text, link], index) => {
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
              text="Post an Ad"
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
      <div className="footer-copyright">
        Copyright 2020-2023 © Autoberza.me All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
