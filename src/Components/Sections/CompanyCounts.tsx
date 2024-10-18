"use client";
import React from 'react';
import { useInView } from "react-intersection-observer";

const CompanyCounts = () => {
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the section is in view
        triggerOnce: true, // Trigger animation only once
    });
    return (
        <div ref={ref} className={`px-2 lg:px-28 pb-10 lg:pb-40 mt-12 lg:mt-36 ${inView ? 'animate__animated animate__slideInLeft' : ''}`}>
            <div>
                <h1 className=' font-bold text-3xl'>Clear Insignts, Clear Decisions</h1>
                <p>Business grows when you build trust in people</p>
            </div>
            <div className=' grid grid-cols-10 gap-7 lg:gap-32'>
                <div className=' col-span-10 lg:col-span-3'>
                    <div className=' space-y-5'>
                        <h1 className=' font-bold text-8xl'>40+</h1>
                        <h1>Companies</h1>
                        <p>Agregar Technologies provides access to a vast network of data sources, ensuring comprehensive and reliable verification solutions across multiple industries.</p>
                        <div className=' flex items-center space-x-3'>
                            <button onClick={() => {
                                window.location.href = "mailto:sales@agregartech.com";
                            }} className=' border-2 border-secondary font-semibold text-[14px] px-4 rounded-[5px] py-1 outfit hover:text-primary hover:border-primary'>Book a Demo</button>
                            <button onClick={() => {
                                window.location.href = "mailto:info@agregartech.com";
                            }} className=' bg-primary text-white font-semibold  text-[14px] px-10 py-1 rounded-[5px] border-2 border-primary outfit hover:bg-secondary'>Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className=' col-span-10 lg:col-span-7'>
                    <div className=' grid lg:grid-cols-2 grid-cols-1 gap-5'>
                        <div className=' bg-white rounded-[18px] px-8 py-8'>
                            <h1><span className=' font-bold text-lg'>Instant Verification</span> : Real-time results that accelerate decision-making and reduce operational delays.</h1>
                        </div>
                        <div className=' bg-white rounded-[18px] px-8 py-8'>
                            <h1><span className=' font-bold text-lg'>Compliance Assurance</span> :Ensuring adherence to local and international regulations, safeguarding your business from risks and penalties.</h1>
                        </div>
                        <div className=' bg-white rounded-[18px] px-8 py-8'>
                            <h1><span className=' font-bold text-lg'>Advanced Security</span> :  Leveraging AI and machine learning to provide robust, secure solutions.</h1>
                        </div>
                        <div className=' bg-white rounded-[18px] px-8 py-8'>
                            <h1><span className=' font-bold text-lg'>Expertise Across Industries</span> :  Tailored solutions for banking, healthcare, e-commerce, manufacturing, education, travel, and more.</h1>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default CompanyCounts;