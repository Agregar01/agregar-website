import Image from 'next/image';
import React from 'react'

interface Props {
  image?: string;
  industryName?: string;
}

const IndustryCards: React.FC<Props> = ({ image, industryName }) => {
  return (
    <div className=' bg-white rounded-[8px] p-5 hover:transition-transform transform hover:scale-110 duration-300 cursor-pointer'>
      {image ?
        <Image src={image} alt='no image' width={50} height={50} />
        : <Image src="/path-to-fallback-image.jpg" alt="No image" width={50} height={50} />}
      <h1 className=' text-secondary font-semibold text-sm pt-3 outfit'>{industryName}</h1>
    </div>
  )
}

export default IndustryCards;