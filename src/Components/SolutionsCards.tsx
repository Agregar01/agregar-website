import Image from 'next/image';
import React from 'react';

interface Props {
    image?: string;
    solutionTitle?: string;
    onClick?: () => void;
}

const SolutionsCards: React.FC<Props> = ({ image, solutionTitle, onClick }) => {
    return (
        <div className=' cursor-pointer bg-white  rounded-[9px] border-2 border-[#CCCCCC] p-4 hover:transition-transform transform hover:scale-110 duration-300'>
            {image ? (
                <Image src={image} alt={solutionTitle || 'No image'} width={50} height={50} />
            ) : (
                <Image src="/path-to-fallback-image.jpg" alt="No image" width={50} height={50} />
            )}
            <h1 className=' text-secondary font-bold pt-7 outfit'>{solutionTitle}</h1>
            <div onClick={onClick} className=' flex items-center space-x-4 pt-4 hover:underline cursor-pointer'>
                <p className=' text-secondary outfit'>Learn More</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-secondary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </div>
        </div>
    )
}

export default SolutionsCards;