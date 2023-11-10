import Image from 'next/image';
import React from 'react';
import SpeedMeter from '@/public/assets/common/ad/speedmeter.svg';
import Engin from '@/public/assets/common/ad/engine-motor.svg';
import Horse from '@/public/assets/common/ad/horse.svg';
import Diesel from '@/public/assets/common/ad/gas-station-petrol-station.svg';
import Lever from '@/public/assets/common/ad/lever.svg';
import Calender from '@/public/assets/common/ad/calendar.svg';

const CarDescription = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mb-4 lg:w-full lg:flex lg:items-center lg:justify-between">
      <div className="flex items-center flex-col">
        <Image src={SpeedMeter} alt="" className="w-10" />
        <p className="text-sm font-bold">159000 km</p>
        <p className="text-xs text-gray-600">kilometraža</p>
      </div>
      <div className="flex items-center flex-col">
        <Image src={Engin} alt="" className="w-10" />
        <p className="text-sm font-bold">2000 cm3</p>
        <p className="text-xs text-gray-600">Kubikaza</p>
      </div>
      <div className="flex items-center flex-col">
        <Image src={Horse} alt="" className="w-10" />
        <p className="text-sm font-bold">184 KS</p>
        <p className="text-xs text-gray-600">Konjska snaga</p>
      </div>
      <div className="flex items-center flex-col">
        <Image src={Diesel} alt="" className="w-10" />
        <p className="text-sm font-bold">Dizel</p>
        <p className="text-xs text-gray-600">Gorivo</p>
      </div>
      <div className="flex items-center flex-col">
        <Image src={Lever} alt="" className="w-10" />
        <p className="text-sm font-bold">Automatski</p>
        <p className="text-xs text-gray-600">Mjenjac</p>
      </div>
      <div className="flex items-center flex-col">
        <Image src={Calender} alt="" className="w-10" />
        <p className="text-sm font-bold">2018</p>
        <p className="text-xs text-gray-600">Godiste</p>
      </div>
    </div>
  );
};

export default CarDescription;
