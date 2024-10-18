import React from 'react';
import image from "../assets/“.png";
import Image from 'next/image';

interface Props {
    stories?: string;
    clientName?: string;
    clientCompany?: string;
}

const TestimoniasCards: React.FC<Props> = ({ stories, clientName, clientCompany }) => {
    return (
        <div className='bg-white rounded-[6px] cursor-pointer h-[450px] flex flex-col justify-between hover:scale-110 duration-300'>
            <div className='px-4 py-3 flex-grow'>
                <Image height={15} src={image} alt='no image' className='py-3' />
                <p className='text-[#454545] text-[14px] mb-9'>
                    {stories}
                </p>
            </div>

            <div className='bg-primary py-3 px-3 rounded-br-[6px] rounded-bl-[6px]'>
                <h1 className='text-center font-bold text-xl text-secondary outfit'>{clientName}</h1>
                <h1 className='text-center capitalize font-bold text-sm text-secondary outfit'>{clientCompany}</h1>
            </div>
        </div>






        // <div className='bg-white rounded-[6px] cursor-pointer h-[410px] flex flex-col justify-between hover:scale-110 duration-300 '>
        //     <div className='px-4'>
        //         <Image height={15} src={image} alt='no image' className='py-3' />
        //         <p className='text-[#454545] text-[14px] mb-9'>
        //             {stories}
        //         </p>
        //     </div>
        //     <div className='bg-primary py-3 px-3 rounded-br-[6px] rounded-bl-[6px]'>
        //         <h1 className='text-center font-bold text-xl text-secondary outfit'>{clientName}</h1>
        //         <h1 className='text-center capitalize font-bold text-sm text-secondary outfit'>{clientCompany}</h1>
        //     </div>
        // </div>

    )
}

export default TestimoniasCards;