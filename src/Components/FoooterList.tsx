import Image from 'next/image';
import React from 'react';
import image from "../assets/mdi_arrow-up-bold.png"

interface Props {
    listName?: string;
    onClick?: () => void;
}

const FoooterList: React.FC<Props> = ({ listName, onClick }) => {
    return (
        <div className=' flex items-center space-x-3 my-4 cursor-pointer'>
            <Image height={20}width={20} src={image} alt='no image' />
            <h1 onClick={onClick} className=' text-white font-semibold text-sm hover:text-primary'>{listName}</h1>
        </div>
    )
}

export default FoooterList;