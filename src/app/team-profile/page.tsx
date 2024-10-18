"use client"
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import aboutUsImage from "../../assets/about_us_image.png";
import React from 'react'
import Image from 'next/image';
import member1 from "../../assets/member1.png";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";
import member4 from "../../assets/member4.png";
import member5 from "../../assets/member5.png";
import member6 from "../../assets/member6.png";
import member7 from "../../assets/member7.png";
import member9 from "../../assets/member9.png";
import member10 from "../../assets/member10.png"
import member11 from "../../assets/member11.png"
import member12 from "../../assets/member12.png"
import member13 from "../../assets/member13.png";
import member14 from "../../assets/mersack.png";
import TeamCards from '@/Components/TeamCards';
import socila1 from "../../assets/mdi_instagram.png";
import social2 from "../../assets/ic_round-linkedIn.png";
import social3 from "../../assets/ri_twitter-fill.png";
import TeamCards2 from '@/Components/TeamCards2';
import { useRouter } from 'next/compat/router';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const page = () => {
    const router = useRouter();

    const searchParams = useSearchParams();

    // Access query parameters
    const memberName = searchParams.get('memberName');
    const memberRole = searchParams.get('memberRole');
    const memberImage = searchParams.get('memberImage');
    const details = searchParams.get("details");

    return (
        <div className='outfit bg-background'>
              <ScrollToTopButton /> 
            <MobileHeader />
            <Header />

            <div className=''>
                <Image src={aboutUsImage} alt='' />
                <div className='lg:px-44 px-2'>
                    <div className=' my-5 lg:mt-10 lg:mb-32'>
                        <h1 className=' text-2xl lg:text-4xl text-secondary font-bold py-7'>Team Member Profile</h1>
                        <div>
                            <div className=' grid grid-cols-10 gap-6'>
                                <div className=' col-span-10 lg:col-span-3'>
                                    <TeamCards2 image memberName={memberName} memberRole={memberRole}  />
                                </div>
                                <div className=' col-span-10 lg:col-span-7'>
                                    <div className=' bg-white px-4 py-8 rounded-[8px]'>
                                        <p className=' text-base lg:text-lg text-secondary'>{details}</p>
                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>




                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page;