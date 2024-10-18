"use client"
import React, { useState } from 'react';
import dash from "../assets/dash2.png";
import add from "../assets/add.png";
import Image from 'next/image';

interface Props {
    title: string;
    description: string;

}
// #3D60AC

const FqaCards: React.FC<Props> = ({ title, description }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className=' py-5'>
            <div className=' flex items-center justify-between border-b border-[#8F96A5] pb-3 px-4 lg:px-8'>
                <h1 style={{ color: isOpen ? "#3d60ac" : "#2a2929" }} className=' text-lg font-medium'>{title}</h1>
                {isOpen ?
                    <Image onClick={toggleDrawer} className=' cursor-pointer' src={add} height={25} alt='' />
                    : <Image onClick={toggleDrawer} className=' cursor-pointer' src={dash} height={25} alt='' />}
            </div>
            {isOpen ? <div className='animate__animated animate__slideInDown px-2 lg:px-14 py-4'>
                <p className=' px-3 lg:px-6 text-graytext1'>{description}</p>
            </div> :

                null
            }
        </div>
    )
}

export default FqaCards;