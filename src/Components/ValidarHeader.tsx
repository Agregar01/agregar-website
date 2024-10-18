import React from 'react';
import geofy from "../assets/Geofy_logo.png";
import Image from 'next/image';

const ValidarHeader = () => {
  return (
    <div className=' flex justify-between shadow-2xl bg-white px-3 lg:px-14 py-4 sticky z-10 top-0'>
        <Image height={50} src={geofy} alt='' />
        <button className=' bg-[#79AB51] text-white px-8 rounded-[6px]'>Login</button>
    </div>
  )
}

export default ValidarHeader;