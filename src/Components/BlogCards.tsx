import React from 'react';
import resources from "../assets/resources_bg.png";
import Image from 'next/image';

interface Props {
    blogImage: string;
    date: string;
    blogTitle: string;
    onClick?: () => void;
}

const BlogCards: React.FC<Props> = ({ blogImage, date, blogTitle, onClick }) => {
    return (
        <div onClick={onClick} className='bg-white rounded-[12px] shadow-md flex flex-col h-full'>
            <Image src={blogImage} alt='' className='rounded-tr-[12px] rounded-tl-[12px] h-60' />
            <div className='px-3 py-4 flex flex-col justify-between flex-grow'>
                <div>
                    <p className='font-medium text-[#3D60AC] hover:underline cursor-pointer text-sm'>{blogTitle}</p>
                </div>
                <div className='flex items-center space-x-3 pt-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-graytext1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>

                    <p className='font-medium text-[#3D60AC] text-sm'>{date}</p>
                </div>
            </div>
        </div>

    )
}

export default BlogCards;