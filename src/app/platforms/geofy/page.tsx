"use client";
import GeofyHeader from '@/Components/GeofyHeader';
import React from 'react';
import geofy_vector from "../../../assets/geofy_vector.png"
import Image from 'next/image';
import GeofyListTile from '@/Components/GeofyListTile';
import location_point from "../../../assets/location_point.png";
import geofy_mobile from "../../../assets/geofy_mobile.png";
import sitting_geofy from "../../../assets/sitting_geofy.png";
import data_geofy from "../../../assets/data_geofy.png";
import undraw1 from "../../../assets/undraw1.png";
import undraw2 from "../../../assets/undraw2.png";
import undraw3 from "../../../assets/undraw3.png";
import undraw4 from "../../../assets/undraw4.png";
import undraw5 from "../../../assets/undraw5.png";
import GeofyFAQCards from '@/Components/GeofyFAQCards';
import spci1 from "../../../assets/spic1.png";
import spci2 from "../../../assets/spic2.png";
import spci3 from "../../../assets/spic3.png";
import spci4 from "../../../assets/spic4.png";
import spci5 from "../../../assets/spic5.png";
import spci6 from "../../../assets/spic6.png";
import check8 from "../../../assets/check-8.svg.png";


const page = () => {
    const GeofyFAQS = [

        {
            title: "How will Agregar verify that the data for the selfie, photo ID, and home photo in the digital location authentication is accurate?"
        },
        {
            title: "How will Agregar safeguard the data provided by the applicant (such as associate pictures and photo IDs)?"
        },
        {
            title: "How precise is GPS for monitoring global coordinates?"
        },
        {
            title: "What is the turnaround time for the actual location check?"
        },
        {
            title: "How can we verify the veracity of the actual location verification that the vendor has claimed to have verified?"
        },
        {
            title: "Which candidate's permanent or present location should we check?"
        },

    ]
    return (
        <div className=' outfit'>
            <GeofyHeader />
            <div>
                <div className=' grid place-items-center my-10 lg:my-28'>
                    <div className=' lg:w-[50%] w-full'>
                        <div className='space-y-3 lg:space-y-7'>
                            <h1 className=' text-3xl lg:text-[58px] font-bold text-center'>Instant Address</h1>
                            <h1 className=' text-3xl lg:text-[58px] font-bold text-center'>Verification Platform</h1>
                        </div>

                        <div className=' space-y-4 lg:space-y-10'>

                            <p className=' font-bold text-textcolor text-lg lg:text-xl text-center pt-4 lg:pt-9'>Geofy is our industry-first, digital address verification product</p>

                            <div className=' grid place-items-center'>
                                <button className=' bg-[#FCB500] text-black px-14 py-5 rounded-[6px]'>Request a Demo</button>
                            </div>

                        </div>
                    </div>

                </div>
                <Image alt="" src={geofy_vector}  className=' w-full' />
            </div>
            <div className=' px-2 lg:px-44'>
                <div className=' py-12 lg:py-20'>
                    <GeofyListTile title='About Geofy' />
                    <div className=' grid lg:grid-cols-2 grid-cols-1'>
                        <div className=' pt-3 lg:pt-10 text-base lg:text-2xl font-light'>
                            <h1>At Agregar Technologies, we proudly present Geofy, an advanced digital and physical address verification solution. Utilizing cutting-edge 4D GIS technology and an expansive network of over 500 trained ground verifiers, Geofy ensures accurate and reliable verification of assets, homes, offices, and guarantors.
                            </h1>
                        </div>
                        <div className=' pt-5'>
                            <Image src={location_point} alt='' height={250} />
                        </div>

                    </div>
                </div>
                <div className=' py-12 lg:py-20'>
                    <GeofyListTile title='Why Choose Geofy?' />
                    <h1 className='text-base lg:text-2xl font-light pt-6'>In today’s fast-paced business environment, having accurate address verification is crucial. Geofy not only enhances the security of your operations but also streamlines processes by providing real-time verification of physical addresses.</h1>
                </div>
                <div>
                <GeofyListTile title=' Key Features' />
                </div>
                <div>
                    
                    <div className=' grid grid-cols-10 gap-6 lg:gap-7'>
                        <div className=' col-span-10 lg:col-span-6 flex flex-col h-full'>
                            <h1 className='text-[#6B5A00]  font-semibold text-2xl lg:text-4xl mt-auto'>4D GIS Technology:</h1>
                        </div>
                        <div className=' col-span-8 lg:col-span-4'>
                            <Image src={geofy_mobile} alt='' height={250} />
                        </div>

                    </div>
                    <h1 className=' pt-3 lg:pt-10 text-base lg:text-2xl font-light'>Geofy leverages four-dimensional Geographic Information System (GIS) technology to visualize and analyze data in real time. This allows for comprehensive insights into geographic locations and address validity.</h1>
                </div>
                <div className=' lg:pt-12 pt-6'>
                    <div className=' grid grid-cols-10 gap-6 lg:gap-7'>
                        <div className=' col-span-10 lg:col-span-6 flex flex-col h-full'>
                            <h1 className='text-[#6B5A00]  font-semibold text-2xl lg:text-4xl mt-auto'>Network of Ground Verifiers</h1>
                        </div>
                        <div className=' col-span-8 lg:col-span-4'>
                            <Image src={sitting_geofy} alt='' height={250} />
                        </div>

                    </div>
                    <h1 className=' pt-3 lg:pt-10 text-base lg:text-2xl font-light'>With over 500 trained professionals nationwide, our verifiers conduct thorough on-site inspections to confirm the authenticity of addresses and assets. This ensures that the verification process is not just digital but also grounded in real-world data.</h1>
                </div>
                <div className=' lg:pt-12 pt-6'>
                    <div className=' grid grid-cols-10 gap-6 lg:gap-7'>
                        <div className=' col-span-10 lg:col-span-6 flex flex-col h-full'>
                            <h1 className='text-[#6B5A00]  font-semibold text-2xl lg:text-4xl mt-auto'>Asset Verification</h1>
                        </div>
                        <div className=' col-span-8 lg:col-span-4'>
                            <Image src={data_geofy} alt='' height={250} />
                        </div>

                    </div>
                    <h1 className=' pt-3 lg:pt-10 text-base lg:text-2xl font-light'>Whether it’s verifying homes, offices, or any other assets, Geofy provides detailed verification reports that include photographic evidence, GPS coordinates, and additional documentation as needed.</h1>
                </div>
                <div>
                   
                    <div className=' grid grid-cols-10 gap-6 lg:gap-7'>
                        <div className=' col-span-10 lg:col-span-6 flex flex-col h-full'>
                            <h1 className='text-[#6B5A00]  font-semibold text-2xl lg:text-4xl mt-auto'>Real-time Tracking and Reporting: </h1>
                        </div>
                        <div className=' col-span-8 lg:col-span-4'>
                            <Image src={geofy_mobile} alt='' height={250} />
                        </div>

                    </div>
                    <h1 className=' pt-3 lg:pt-10 text-base lg:text-2xl font-light'>Our user-friendly dashboard allows clients to track verification requests in real time, receive instant notifications, and access comprehensive reports on the verification status.</h1>
                </div>

                <div>
                   
                    <div className=' grid grid-cols-10 gap-6 lg:gap-7'>
                        <div className=' col-span-10 lg:col-span-6 flex flex-col h-full'>
                            <h1 className='text-[#6B5A00]  font-semibold text-2xl lg:text-4xl mt-auto'>Customized Verification Solutions:  </h1>
                        </div>
                        <div className=' col-span-8 lg:col-span-4'>
                            <Image src={geofy_mobile} alt='' height={250} />
                        </div>

                    </div>
                    <h1 className=' pt-3 lg:pt-10 text-base lg:text-2xl font-light'>Tailored verification services that meet your specific business needs, whether for KYC processes, loan approvals, or insurance claims.</h1>
                </div>
               
                
                <div className=' pt-8 lg:pt-20 '>
                    <GeofyListTile title='Benefits of Geofy' />
                    <div className=' px-2 lg:px-20'>
                        <div className=' grid grid-cols-10 my-7 lg:my-10'>
                            <div className=' col-span-10 lg:col-span-6'>
                                <h1 className=' text-base lg:text-2xl font-bold'>Enhanced Security: 
                                With accurate address verification, businesses can reduce the risk of fraud, identity theft, and ensure compliance with regulatory requirements.</h1>
                            </div>
                            <div className=' col-span-10 lg:col-span-4'>
                                <Image src={undraw1} alt='' height={250} />
                            </div>
                        </div>
                        <div className=' grid grid-cols-10 my-7 lg:my-10'>

                            <div className=' col-span-10 lg:col-span-4'>
                                <Image src={undraw2} alt='' height={250} />
                            </div>
                            <div className=' col-span-10 lg:col-span-6'>
                                <h1 className=' text-base lg:text-2xl font-bold'>Increased Efficiency: 
                                Streamline your processes by leveraging our integrated platform, reducing the time and resources spent on address verification.</h1>
                            </div>
                        </div>
                        <div className=' grid grid-cols-10 my-7 lg:my-10'>
                            <div className=' col-span-10 lg:col-span-6'>
                                <h1 className=' text-base lg:text-2xl font-bold'>Improved Accuracy: 
                                Combining technology with a dedicated workforce ensures that address verifications are not only accurate but also reliable, providing peace of mind for your operations</h1>
                            </div>
                            <div className=' col-span-10 lg:col-span-4'>
                                <Image src={undraw3} alt='' height={250} />
                            </div>
                        </div>
                        <div className=' grid grid-cols-10 my-7 lg:my-10'>
                            <div className=' col-span-10 lg:col-span-4'>
                                <Image src={undraw4} alt='' height={250} />
                            </div>
                            <div className=' col-span-10 lg:col-span-6'>
                                <h1 className=' text-base lg:text-2xl font-bold'>Cost-Effective Solutions: 
                                Reduce operational costs associated with manual verifications and enhance productivity by automating the verification process.</h1>
                            </div>

                        </div>
                        <div className=' grid grid-cols-10 my-7 lg:my-10'>
                            <div className=' col-span-10 lg:col-span-6'>
                                <h1 className=' text-base lg:text-2xl font-bold'>Scalability: 
                                Geofy can adapt to your growing business needs, easily scaling to handle large volumes of verification requests without compromising quality.</h1>
                            </div>
                            <div className=' col-span-10 lg:col-span-4'>
                                <Image src={undraw5} alt='' height={250} />
                            </div>


                        </div>
                    </div>

                </div>

                <div>
                    <div>
                        <h1 className=' text-xl lg:text-3xl font-medium pb-3 text-[#6B5A00]'>FAQS</h1>
                        <div className=' border-b border-[#FFD600]'>

                        </div>
                        <div className=' pt-8'>
                            {
                                GeofyFAQS.map((list) => {
                                    return (
                                        <GeofyFAQCards title={list.title} />
                                    );
                                })
                            }

                        </div>
                    </div>
                </div>
                <div className=' pt-9 lg:pt-20'>
                    <div>
                        <h1 className=' font-bold text-2xl lg:text-4xl text-[#6B5A00] pb-4'>Get Started with Geofy</h1>
                        <div className=' border-b border-[#555aa6]'>

                        </div>
                        <div className=' w-full  py-6'>
                            <h1 className=' text-base lg:text-2xl font-light'>Discover how *Geofy* can transform your address verification processes and enhance your business's operational efficiency. Contact us today for more information or to request a demo.</h1>
                        </div>
                    </div>
                </div>
                <div className=' grid grid-cols-3 gap-6'>
                    <Image src={spci1} alt='' />
                    <Image src={spci2} alt='' />
                    <Image src={spci3} alt='' />
                    <Image src={spci4} alt='' />
                    <Image src={spci5} alt='' />
                    <Image src={spci6} alt='' />
                </div>
                <div className=' px-6 lg:px-12 py-8 bg-white shadow-2xl rounded-[8px]'>
                    <div className=' py-5'>
                        <h1 className='text-[#6B5A00] font-bold text-2xl  lg:text-3xl'>Join smarter companies using Geofy</h1>
                    </div>
                    <div className=' space-y-3'>
                        <div className=' flex items-center space-x-3'>
                            <Image src={check8} alt='' height={14} />
                            <p className='text-[#6B5A00] text-lg'>Instant compliant KYE (Know your Employee) reports</p>
                        </div>
                        <div className=' flex items-center space-x-3'>
                            <Image src={check8} alt='' height={14} />
                            <p className='text-[#6B5A00] text-lg'>Compliance notification</p>
                        </div>
                        <div className=' flex items-center space-x-3'>
                            <Image src={check8} alt='' height={14} />
                            <p className='text-[#6B5A00] text-lg'>Enhance HR staff productivity</p>
                        </div>
                        <div className=' flex items-center space-x-3'>
                            <Image src={check8} alt='' height={14} />
                            <p className='text-[#6B5A00] text-lg'>24/7 Access to database</p>
                        </div>
                    </div>
                    <div className=' flex items-center space-x-6 mt-10'>
                        <button className=' flex items-center space-x-3 bg-[#6B5A00] text-white rounded-[4px]'>
                            <p className=' text-white font-semibold px-6 py-3'>
                                Request a demo
                            </p>   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 pr-6 font-bold">
                                <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <h1 onClick={() => {
                      window.location.href = "mailto:sales@agregartech.com";
                }} className=' text-[#6B5A00] font-bold text-xl cursor-pointer hover:underline'>Talk to us</h1>
                    </div>

                </div>
                <div className=' flex items-center justify-end mt-10 mb-4'>
                    <div className=' flex items-center space-x-8'>
                        <h1 className=' text-xl text-[#CB9F04] font-bold cursor-pointer hover:underline'>Agregar Technologies – Elevating Standards in Address Verification</h1>
                       
                    </div>
                </div>
                <div className=' border-b border-[#555AA6]'>

                </div>
                <div className=' py-6'>
                    <div className=' flex items-center space-x-2'>
                        <h1 className=' text-2xl text-[#cccccc]'>&#169;</h1>
                        <h1 className=' text-xl text-[#cccccc]'>Geofy 2024</h1>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default page;