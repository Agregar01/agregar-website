import React from 'react';
import business from "../../assets/business.png";
import user from "../../assets/user.png";
import Image from 'next/image';

const ContactSales: React.FC = () => {
    return (
        <div className=' grid lg:grid-cols-2 grid-cols-1 lg:mb-52 mb-10 gap-7 lg:gap-20'>
            <div>
                <div className=' space-y-5 lg:space-y-11 w-full lg:w-[70%]'>
                    <h1 className=' font-semibold text-primary text-lg'>Contact Sales</h1>
                    <p className=' text-textcolor text-3xl font-bold'>Ready to Explore Agregar for your Business?</p>
                    <p>We’d love to show you how Agregar can help your business.
                        Fill out the form and we’ll be in touch within 24 hours.</p>
                </div>
                <div className=' mt-7 lg:mt-12'>
                    <div className=' flex items-center space-x-4 my-4'>
                        <div className=' bg-[#FFE5D9] rounded-full w-8 h-8 grid place-items-center shadow-2xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-primary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </div>
                        <h1 className=' text-textcolor'>Access your team needs</h1>
                    </div>
                    <div className=' flex items-center space-x-4 my-4'>
                        <div className=' bg-[#FFE5D9] rounded-full w-8 h-8 grid place-items-center shadow-2xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-primary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </div>
                        <h1 className=' text-textcolor'>Learn more about Agregar's Products & Benefits</h1>
                    </div>
                    <div className=' flex items-center space-x-4 my-4'>
                        <div className=' bg-[#FFE5D9] rounded-full w-8 h-8 grid place-items-center shadow-2xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-primary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </div>
                        <h1 className=' text-textcolor'>Discuss pricing options</h1>
                    </div>

                </div>
            </div>
            <div>
                <div className=' flex items-center space-x-6'>
                    <div className=' flex items-center space-x-5 bg-primary py-2 w-full px-4 rounded-[5px]'>
                        <Image height={23} alt='' src={business} />
                        <p className=' font-bold text-white text-lg text-center'>Business</p>
                    </div>
                    <div className=' flex items-center space-x-5 border-2 border-[#dddddd] py-2 w-full px-4 rounded-[5px]'>
                        <Image height={23} alt='' src={user} />
                        <p className=' font-bold text-textcolor text-lg'>Individual</p>
                    </div>
                </div>
                <div className=' space-y-4 mt-6'>
                    <input placeholder='Full Name' className=' border border-[#BDBDBD] bg-white w-full py-[11px] rounded-[6px] outline-none px-2' />
                    <div className=' grid grid-cols-2 gap-5 mt-y'>
                        <input placeholder='Business Email' className=' border border-[#BDBDBD] bg-white w-full py-[11px] rounded-[6px] outline-none px-2' />
                        <input placeholder='Company' className=' border border-[#BDBDBD] bg-white w-full py-[11px] rounded-[6px] outline-none px-2' />
                    </div>
                    <input placeholder='Contact Number' className=' border border-[#BDBDBD] bg-white w-full py-[11px] rounded-[6px] outline-none px-2' />
                    <textarea placeholder='Message' className=' border border-[#BDBDBD] bg-white w-full py-[11px] rounded-[6px] outline-none px-2' rows={5} />
                    <button className=' w-full text-white text-lg bg-primary py-2 rounded-[6px] hover:bg-secondary'>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default ContactSales;