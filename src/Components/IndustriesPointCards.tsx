"use client"
import React, { useState } from 'react';
import kye_dot from "../assets/kye_dot.png";
import Image from 'next/image';
import line from "../assets/line.png";


interface Props {
    header?: string;
    description?: string;
    showdescription?: boolean;
}

const IndustriesPointCards: React.FC<Props> = ({ header, description, showdescription }) => {

   
    return (
        <div className=' border-b border-[#dddddd]'>
            <div className=' flex items-center space-x-4'>
                <Image height={18} src={kye_dot} alt='' />
                <p className=' font-bold text-secondary lg:text-xl text-base'>{header}</p>

            </div>
            <div className=' pb-4'>
                {showdescription ? <p className=' pt-3 text-graytext1'>{description}</p> :
                    null
                }
            </div>
        </div>
    )
}

export default IndustriesPointCards;