import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface Props {
    image?:  string | StaticImageData;
    VName?: string;
}

const VeriificationsCards: React.FC<Props> = ({ image, VName }) => {
    return (
        <div className=' bg-white rounded-[8px] p-5 hover:scale-110 duration-300 cursor-pointer'>
            <div className=' grid place-items-center'>
                {image ?
                    <Image src={image} alt='no image' width={50} height={50} />
                    : <Image src="/path-to-fallback-image.jpg" alt="No image" width={50} height={50} />}
            </div>
            <h1 className=' text-secondary font-semibold text-sm pt-3 outfit text-center'>{VName}</h1>
        </div>
    )
}

export default VeriificationsCards;