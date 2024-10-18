import React from 'react';
import dropdown from "../assets/dropdown.png";
import Image from 'next/image';

interface Props {
    title: string;
}

const GeofyFAQCards: React.FC<Props> = ({ title }) => {
    return (
        <div>
            <div className=' flex justify-between items-center py-10 px-2 lg:px-5 rounded-[10px] shadow-xl bg-white my-4'>
                <h1 className=' text-sm lg:text-lg font-medium'>{title}</h1>
                <Image src={dropdown} alt='' height={15} />
            </div>
        </div>
    )
}

export default GeofyFAQCards;