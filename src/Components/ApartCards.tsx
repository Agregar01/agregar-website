import Image from 'next/image';
import React from 'react';

interface Props {
    image?: string;
    title?: string;
    desscription: string;
}

const ApartCards: React.FC<Props> = ({ image, title, desscription }) => {
    return (
        <div className='bg-white  rounded-[9px] border-2 border-[#CCCCCC] p-2 outfit hover:transition-transform transform hover:scale-110 duration-300 cursor-pointer'>
            <div className=' grid place-items-center py-5'>
                {image ?
                    <Image src={image} alt='no image' width={80} height={80} />
                    : <Image src="/path-to-fallback-image.jpg" alt="No image" width={80} height={80} />}
            </div>
            <h1 className=' text-secondary text-lg font-bold text-center pb-3'>{title}</h1>
            <p className=' text-base pb-5 text-[#666666] text-center'>{desscription}</p>
        </div>
    )
}

export default ApartCards;