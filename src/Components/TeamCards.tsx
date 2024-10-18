import Image, { StaticImageData } from 'next/image';
import React from 'react';
import socila1 from "../assets/mdi_instagram.png";
import social2 from "../assets/ic_round-linkedIn.png";
import social3 from "../assets/ri_twitter-fill.png";

interface Props {
    memberImage: string | StaticImageData;
    memberName?: string;
    memberRole?: string;
    image: boolean;
    onClick?: () => void;
}

const TeamCards: React.FC<Props> = ({ memberImage, memberName, memberRole, image, onClick }) => {
    return (
        <div onClick={onClick} className=' bg-white rounded-[9px] cursor-pointer hover:transition-transform transform hover:scale-110 duration-300 h-[390px]'>
            {image ?
                <div className=' grid place-items-center'>
                    <Image width={210} height={210} src={memberImage} alt='no image' />
                </div>
                : <Image src="/path-to-fallback-image.jpg" alt="No image" width={50} height={50} />}
            <div className=' my-6'>
                <h1 className=' text-center font-bold text-secondary text-xl'>{memberName}</h1>
                <h1 className=' text-center text-primary font-semibold text-sm'>{memberRole}</h1>
                <div className=' grid place-items-center'>
                    <div className=' flex items-center space-x-3 my-6'>
                        <Image alt='no image' src={socila1} width={30} height={30} />
                        <Image alt='no image' src={social2} width={30} height={30} />
                        <Image alt='no image' src={social3} width={30} height={30} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCards;