import Logo from '@/components/Elements/Logo';
import ButtonGroup from '@/components/Elements/ButtonGroup';
import Dropdown from '@/public/assets/common/dropdown-icon.svg';
import React from 'react';
import Image from 'next/image';
import Facebook from '@/public/assets/common/facebok.svg';
import Instagram from '@/public/assets/common/instagram.svg';
import Twitter from '@/public/assets/common/twitter.svg';

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

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-logo-profile">
          <Logo
            style={{
              width: '210px',
              cursor: 'pointer',
            }}
          />
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
                      <div key={index} className="list-contaier">
                        <div className="bullet"></div>
                        <a href={link}>{text}</a>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <ButtonGroup
          text="Post an Ad"
          icon={Dropdown}
          style={{
            fontSize: '22px',
            padding: '10px 30px',
            paddingRight: '45px',
          }}
        />
      </div>
      <div className="footer-copyright">
        Copyright 2020-2023 © AssurIles.com All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
