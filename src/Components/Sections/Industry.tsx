import React from 'react';
import frame1 from "../../assets/Frame 635.png";
import frame2 from "../../assets/Frame 636.png";
import frame3 from "../../assets/Frame 637.png";
import frame4 from "../../assets/Frame 638.png";
import frame5 from "../../assets/Frame 639.png";
import frame6 from "../../assets/Frame 640.png";
import frame7 from "../../assets/Frame 641.png";
import frame8 from "../../assets/Frame 642.png";
import frame9 from "../../assets/Frame 643.png";
import frame10 from "../../assets/Frame 644.png";
import frame11 from "../../assets/Frame 645.png";
import IndustryCards from '../IndustryCards';
import industryArrow from "../../assets/IndustryArrow.png"
import Image from 'next/image';
import { useInView } from "react-intersection-observer";



const Industry: React.FC = () => {

    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the section is in view
        triggerOnce: true, // Trigger animation only once
    });


    const Industry = [
        {
            image: frame1,
            industryName: "Banking and Financial Services"

        },
        {
            image: frame2,
            industryName: "Healthcare & Pharma"

        },
        {
            image: frame3,
            industryName: "Education"

        },
        {
            image: frame4,
            industryName: "Manufacturing"

        },
        {
            image: frame5,
            industryName: "Travel & Hospitality"

        },
        {
            image: frame6,
            industryName: "E-Commerce & Retail"

        },
        {
            image: frame7,
            industryName: "Insurance"

        },
        {
            image: frame8,
            industryName: "Telecommunications"

        },
        {
            image: frame9,
            industryName: "FMCG & FMCD"

        },
        {
            image: frame10,
            industryName: "Banking and Financial Services"

        },
        {
            image: frame11,
            industryName: "Staffing & Recruitment"

        },
    ]
    return (
        <div 
        className='  lg:px-36 px-2'>
            <div  ref={ref}
            // className={`bg-[#F1F6FB] py-10 lg:py-28 ${inView ? 'animate__animated animate__bounceInDown' : ''}`}
             className={`grid grid-cols-10  gap-5 ${inView ? 'animate__animated animate__slideInLeft' : ''}`}>
                <div className=' col-span-10 lg:col-span-3'>
                    <div className=' bg-white rounded-[8px] py-5 px-8'>
                        <div className=' grid place-items-center h-[100px]'>
                            <div className=' space-y-1'>
                                <h1 className=' font-bold text-3xl text-secondary  outfit'>Pick your Industry</h1>
                                <p className='  text-textcolor outfit text-[15px]'>Discover how we enable 40+ companies with comprehensive Screeningv& Due Diligence </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-span-10 lg:col-span-7 '>
                    <div className=' grid grid-cols-2 lg:grid-cols-4  gap-5 bg-[#F1F6FB]'>
                        {
                            Industry.slice(0, 4).map((list: any) => {
                                return (
                                    <IndustryCards image={list.image} industryName={list.industryName} />
                                );
                            })
                        }
                        
                    </div>
                </div>

            </div>
            <div className=' grid grid-cols-2 lg:grid-cols-6  gap-5 bg-[#F1F6FB] mt-5'>
                {
                    Industry.slice(5,12).map((list: any) => {
                        return (
                            <IndustryCards image={list.image} industryName={list.industryName} />
                        );
                    })
                }
                {/* <div className=' pt-10'>
                            <Image src={industryArrow} alt='' height={40} />
                        </div> */}

            </div>
        </div>
    )
}

export default Industry;