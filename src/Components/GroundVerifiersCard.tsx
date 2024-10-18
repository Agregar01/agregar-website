import React from 'react';
import image from "../assets/“.png";
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface Props {
    stories?: string;
    vefName: string,
    vefImage: string | StaticImageData;
}

const GroundVerifiersCard: React.FC<Props> = ({ stories, vefName, vefImage }) => {
    return (
        <div className='bg-white rounded-[6px] cursor-pointer h-[410px] flex flex-col justify-between hover:scale-110 duration-300 '>
            <div className='px-4'>
                <Image height={15} src={image} alt='no image' className='py-3' />
                <p className='text-[#454545] text-[14px] mb-9'>
                    {stories}
                </p>
            </div>
            <div className=' space-y-4'>
                <div className=' grid place-items-center'>
                    <Image src={vefImage} alt='' height={80} />
                </div>
                <div className='bg-primary py-3 px-3 rounded-br-[6px] rounded-bl-[6px]'>
                    <h1 className='text-center font-medium text-xl text-white outfit'>{vefName}</h1>
                </div>
            </div>
        </div>

    )
}

export default GroundVerifiersCard;