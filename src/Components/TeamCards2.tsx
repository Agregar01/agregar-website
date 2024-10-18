import Image, { StaticImageData } from 'next/image';
import React from 'react';
import socila1 from "../assets/mdi_instagram.png";
import social2 from "../assets/ic_round-linkedIn.png";
import social3 from "../assets/ri_twitter-fill.png";

interface Props {
    memberImage?: string | StaticImageData;
    memberName?: string | null;
    memberRole?: string | null;
    image?: boolean;
}

const TeamCards2: React.FC<Props> = ({ memberImage, memberName, memberRole, image }) => {
    return (
        <div className=' bg-white rounded-[9px] cursor-pointer hover:transition-transform transform hover:scale-110 duration-300'>
            <div className=' grid place-items-center pt-4'>
                {image ? (
                    <div className=' grid place-items-center'>
                        <Image 
                            width={210} 
                            height={210} 
                            src={memberImage || "/path-to-fallback-image.jpg"}  // Provide fallback if memberImage is null/undefined
                            alt={memberName || "No image"} 
                        />
                    </div>
                ) : (
                    <Image 
                        src="/path-to-fallback-image.jpg" 
                        alt="No image" 
                        width={50} 
                        height={50} 
                    />
                )}
            </div>

            <div className=' my-6'>
                <h1 className=' text-center font-bold text-secondary text-xl'>{memberName || 'Unknown Name'}</h1> {/* Fallback for name */}
                <h1 className=' text-center text-primary font-semibold'>{memberRole || 'Unknown Role'}</h1> {/* Fallback for role */}
                <div className=' grid place-items-center'>
                    <div className=' flex items-center space-x-3 mt-8 mb-5'>
                        <Image alt='Instagram' src={socila1} width={30} height={30} />
                        <Image alt='LinkedIn' src={social2} width={30} height={30} />
                        <Image alt='Twitter' src={social3} width={30} height={30} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamCards2;









// import Image, { StaticImageData } from 'next/image';
// import React from 'react';
// import socila1 from "../assets/mdi_instagram.png";
// import social2 from "../assets/ic_round-linkedIn.png";
// import social3 from "../assets/ri_twitter-fill.png";

// interface Props {
//     memberImage?: string | StaticImageData;
//     memberName?: string | null;
//     memberRole?: string | null;
//     image?: boolean;
// }

// const TeamCards2: React.FC<Props> = ({ memberImage, memberName, memberRole, image }) => {
//     return (
//         <div className=' bg-white rounded-[9px] cursor-pointer hover:transition-transform transform hover:scale-110 duration-300'>

//             <div className=' grid place-items-center pt-4'>
//                 {image ?
//                     <div className=' grid place-items-center'>
//                         <Image width={210} height={210} src={memberImage} alt='no image' />
//                     </div>
//                     : <Image src="/path-to-fallback-image.jpg" alt="No image" width={50} height={50} />}
//             </div>

//             <div className=' my-6'>
//                 <h1 className=' text-center font-bold text-secondary text-xl'>{memberName}</h1>
//                 <h1 className=' text-center text-primary font-semibold'>{memberRole}</h1>
//                 <div className=' grid place-items-center'>
//                     <div className=' flex items-center space-x-3 mt-8 mb-5'>
//                         <Image alt='no image' src={socila1} width={30} height={30} />
//                         <Image alt='no image' src={social2} width={30} height={30} />
//                         <Image alt='no image' src={social3} width={30} height={30} />

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default TeamCards2;



{/* <div className=' bg-white rounded-[9px] cursor-pointer'>
                                   
                                   <div className=' grid place-items-center pt-4'>
                                       <Image width={210} height={210} src={member2} alt='no image' />
                                   </div>
                                 
                               <div className=' my-6'>
                                   <h1 className=' text-center font-bold text-secondary text-xl'>Harry Baiden</h1>
                                   <h1 className=' text-center text-primary font-semibold'>CEO</h1>
                                   <div className=' grid place-items-center'>
                                       <div className=' flex items-center space-x-3 mt-8 mb-5'>
                                           <Image alt='no image' src={socila1} width={30} height={30} />
                                           <Image alt='no image' src={social2} width={30} height={30} />
                                           <Image alt='no image' src={social3} width={30} height={30} />

                                       </div>
                                   </div>
                               </div>
                           </div> */}