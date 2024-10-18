import Image from 'next/image';
import React from 'react';

interface Props {
    image?: string;
    title?: string;
    des1?: string;
    des2?: string;
    des3?: string;
    des4?: string;
    description?: string;
    onClick?: () => void;
}

const IndustriesCard: React.FC<Props> = ({ image, title, description, des1, des2, des3, des4, onClick }) => {
    return (
        <div className='bg-white rounded-[7px] px-7 py-7 hover:scale-110 duration-300 cursor-pointer flex flex-col h-full'>
            <div className='flex items-center space-x-4'>
                {image ? (
                    <Image height={50} src={image} alt='' />
                ) : (
                    <Image src="" alt='' />
                )}
                <h1 className='text-secondary text-[24px] font-semibold'>{title}</h1>
            </div>

            <div className='flex-grow'>
                <div className='py-6'>
                    <p className='text-sm text-graytext1'>{description}</p>
                </div>

                <div className='space-y-1'>
                    <div className='flex items-center space-x-3'>
                        <div className="text-lg font-extrabold text-graytext1">•</div>
                        <p className='text-graytext1 text-sm font-bold'>{des1}</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <div className="text-lg font-extrabold text-graytext1">•</div>
                        <p className='text-graytext1 text-sm font-bold'>{des2}</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <div className="text-lg font-extrabold text-graytext1">•</div>
                        <p className='text-graytext1 text-sm font-bold'>{des3}</p>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <div className="text-lg font-extrabold text-graytext1">•</div>
                        <p className='text-graytext1 text-sm font-bold'>{des4}</p>
                    </div>
                </div>
            </div>

            {/* Learn More button - sticks to the bottom */}
            <div className='grid place-items-center py-6'>
                <div onClick={onClick} className='flex items-center space-x-4 cursor-pointer hover:underline'>
                    <h1 className='text-secondary font-semibold'>Learn More</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-secondary font-bold">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div>
        </div>

        // <div className=' bg-white rounded-[7px] px-7 py-7 hover:scale-110 duration-300 cursor-pointer '>
        //     <div className=' flex items-center space-x-4'>
        //         {image ?
        //             <Image height={50} src={image} alt='' />
        //             : <Image src="" alt='' />}
        //         <h1 className=' text-secondary text-[24px] font-semibold'>{title}</h1>
        //     </div>
        //     <div>
        //         <div className=' py-6'>
        //             <p className=' text-sm text-graytext1'>{description}</p>
        //         </div>
        //         <div className=' space-y-1'>
        //             <div className=' flex items-center space-x-3'>
        //                 <div className="text-lg font-extrabold text-graytext1">•</div>
        //                 <p className=' text-graytext1 text-sm font-bold'>{des1}
        //                 </p>
        //             </div>
        //             <div className=' flex items-center space-x-3'>
        //                 <div className="text-lg font-extrabold text-graytext1">•</div>
        //                 <p className=' text-graytext1 text-sm font-bold'>{des2}
        //                 </p>
        //             </div>
        //             <div className=' flex items-center space-x-3'>
        //                 <div className="text-lg font-extrabold text-graytext1">•</div>
        //                 <p className=' text-graytext1 text-sm font-bold'>{des3}
        //                 </p>
        //             </div>
        //             <div className=' flex items-center space-x-3'>
        //                 <div className="text-lg font-extrabold text-graytext1">•</div>
        //                 <p className=' text-graytext1 text-sm font-bold'>{des4}
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        //     <div className=' grid place-items-center py-6'>
        //         <div onClick={onClick} className=' flex items-center space-x-4 cursor-pointer'>
        //             <h1 className=' text-secondary font-semibold'>Learn More</h1>
        //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-secondary font-bold">
        //                 <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        //             </svg>

        //         </div>
        //     </div>


        // </div>
    )
}

export default IndustriesCard;