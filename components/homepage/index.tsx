import React from 'react';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import '@/styles/PostAd.css';
import Image from 'next/image';
import homepageCarImg from '@/public/assets/common/homepage/homepage-img.svg';
import Heading from './sub/Heading';
import CarCardComp from './sub/CarCardComp';
import BikeCardComp from './sub/BikeCardComp copy';
import TransCardComp from './sub/TransCardComp';
import MachineCardComp from './sub/MachineCardComp';
import VesselCardComp from './sub/VesselCardComp';
import AgriculCardComp from './sub/AgriculCardComp';
import CycleCardComp from './sub/CycleCardComp';
import AutoPartsCardComp from './sub/AutoPartsCardComp';
import Services from './sub/Services';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="relative">
        <Image src={homepageCarImg} alt="" />
        <div className="absolute text-yellow-300 font-black text-3xl top-28 left-5">
          DropDown Container
        </div>
      </div>
      <Heading text="Featured Car" />
      <CarCardComp />
      <Heading text="Featured Car" textGreen="Sedan" />
      <CarCardComp />
      <Heading text="Featured Motobike" />
      <BikeCardComp />
      <Heading text="Transport vehicles" />
      <TransCardComp />
      <Heading text="Working Machine" />
      <MachineCardComp />
      <Heading text="Vessels" />
      <VesselCardComp />
      <Heading text="Agricultural machine" />
      <AgriculCardComp />
      <Heading text="Cycles" />
      <CycleCardComp />
      <Heading text="Auto Parts" />
      <AutoPartsCardComp />
      <Services />
      <Footer />
    </div>
  );
};

export default HomePage;
