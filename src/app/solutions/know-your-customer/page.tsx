"use client"
import Header from '@/Components/Header';
import React from 'react'
import kyc_bg from "../../../assets/kyc_bg.png"
import Image from 'next/image';
import kyc_vector from "../../../assets/kyc_vector.png";
import kyc_header from "../../../assets/kyc_header.png";
import kyc_mobile_human_vector from "../../../assets/kyc_mobile_human_vector.png";
import Footer from '@/Components/Footer';
import KycpointsCards from '@/Components/KycpointsCards';
import ky_facial_reg from "../../../assets/kyc_facial_reg.png";
import kye_dot from "../../../assets/kye_dot.png";
import kyc_key_pic from "../../../assets/kyc_key_pic.png";
import validar_image from "../../../assets/validar_image.png";
import smiling_doctor from "../../../assets/smiling-female-doctor-standing-with-medical-staff--7X93MWV.png";
import ContactSales from '@/Components/Sections/ContactSales';
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const page = () => {
    return (
        <div className=' outfit  bg-background'>
            <ScrollToTopButton /> 
            <MobileHeader />
            <Header />
            <Image src={kyc_bg} alt='' />
            <div className=' px-2 lg:px-44 grid grid-cols-10 lg:pt-24 pt-4'>
                <div className=' col-span-10 lg:col-span-5'>
                    <div className=' space-y-3'>
                        <h1 className=' text-secondary text-2xl lg:text-3xl font-bold'>Know Your Customer(KYC)</h1>
                        <button  onClick={() => {
                                    window.location.href = "mailto:sales@agregartech.com";
                                }}  className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Book a Demo</button>
                    </div>
                    <div className=' pt-5 lg:pt-8 lg:space-y-5 space-y-3'>
                        <h1 className=' text-3xl font-bold  text-secondary'>Transform Your Customer Onboarding Process with AI-Powered KYC Solutions</h1>
                        <p className=' text-graytext1'>In today's digital age, customer expectations are high, and the need for swift, seamless, and secure onboarding has never been greater. With Agregar Technologies' KYC Onboarding solution, you can accelerate service activation, streamline compliance, and enhance your customers' experience — all while ensuring complete regulatory adherence.</p>
                    </div>

                </div>
                <div className=' col-span-8 lg:col-span-5'>
                    <div className=' flex justify-end'>
                        <Image src={kyc_vector} alt='' height={370} />
                    </div>
                </div>
            </div>
            <div className=' pt-7 lg:pt-24 px-2 lg:px-44'>
                <div className=' space-y-3'>
                    <h1 className=' font-bold text-3xl text-secondary'>Why Our KYC is Essential</h1>
                    <p className=' text-graytext1'>Accelerate service activation by 10 times with Agregars enhanced customer oncboarding solutions, utilizing seamless end-to-end digital journeys that eliminate the need for documentation. Our AI-driven onboarding and verification solutions, compliant with Regulatory standards, streamline the enrollment and verification of customers at scale, laying the foundation for enduring customer relationships. Leveraging advanced face recognition and liveness detection technologies, our tools ensure comprehensive client verification throughout the entire onboarding lifecycle for new customers.</p>
                </div>
            </div>
            <div className=' px-2 lg:px-28 lg:py-20 py-5'>
                <Image src={kyc_header} alt='' />
                <div className=' bg-white'>
                    <div className=' grid grid-cols-10 px-2 lg:px-20 py-8'>
                        <div className=' col-span-2'>
                            <Image alt='' height={200} src={kyc_mobile_human_vector} />
                        </div>
                        <div className=' col-span-8'>
                            <h1 className=' text-base lg:text-3xl font-bold text-textcolor'>Unlock the capabilities of AI-powered identity  verification, enhanced by a variety of tools, to deliver your customers an unmatched onboarding experience.</h1>
                        </div>

                    </div>
                    <div className=' grid lg:grid-cols-2 grid-cols-1 px-2 lg:px-20  gap-4 lg:gap-8'>
                        <div className=''>
                            <h1 className=' font-bold text-xl text-textcolor'>Face Verification</h1>
                            <div className=' space-y-3  pt-8'>
                                <h1 className=' text-graytext1 font-semibold'>Cutting-edge Facial Verification</h1>
                                <p>Effortless global onboarding driven by sophisticated AI Face Recognition technology, enhanced by a variety of fraud detection mechanisms.</p>
                            </div>
                            <div className=' grid lg:grid-cols-2 grid-cols-1 gap-5 pt-7'>
                                <KycpointsCards header='Instantaneous Results' />
                                <KycpointsCards header='Unmatched User Experience' />
                                <KycpointsCards header='Detection of Account Cloning' />
                                <KycpointsCards header='Facial Liveness Detection' />
                                <KycpointsCards header='Selfie Verification in 5 Seconds' />
                                <KycpointsCards header='Facial Liveness Detection' />
                                <KycpointsCards header=' Accuracy Rate of 99%' />
                                <KycpointsCards header='Identification of Impersonation Attempts' />

                                {/* <div>
                                    <KycpointsCards header='Instantaneous Results' />
                                </div> */}
                            </div>
                        </div>
                        <div>
                            <div className=' space-y-4'>
                                <h1 className=' font-bold text-xl text-textcolor'>Facial Verification Integration: Smooth, Safe, & Speedy</h1>
                                <p className=' text-graytext1'>Elevate your digital identity verification with our facial verification integration. By adopting this technology, you're not just embracing innovation but committing to excellence, effectiveness, and top-notch security.</p>
                            </div>
                            <div className=' pt-5'>
                                <h1 className=' text-graytext1 font-semibold'>Our facial verification integration ensures:</h1>
                                <div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Instantaneous Synchronization</p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Strong Security Measures
                                        </p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Responsive Customer Support
                                        </p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Adaptable Integration Choices
                                        </p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Compatibility Across Platforms
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-14 px-2 lg:px-20 pt-7 lg:pt-16'>
                        <div>
                            <h1 className=' font-bold text-xl lg:text-3xl text-textcolor pb-5'>Why opt for Agregar's AI facial recognition technology?</h1>
                            <div className=' border-b border-primary'> </div>
                            <div className=' space-y-3'>
                                <KycpointsCards showdescription description='Ensure secure and dependable account registration, access, onboarding, and verification processes.' />
                                <KycpointsCards showdescription description='Streamline Documentation with real-time verification, delivering results in seconds.' />
                                <KycpointsCards showdescription description='Combat identity fraud effectively, utilizing 3D depth, skin texture, and microexpression analysis.' />
                                <KycpointsCards showdescription description='Implement robust verification measures through Liveness detection and AI mapping, ensuring ownership of an item.' />
                                <KycpointsCards showdescription description='Bolster your defenses against credential stuffing with easy selfie verification, supporting over 10,000 IDs.' />
                                <KycpointsCards showdescription description='Minimize drop-offs with streamlined Utility bills verification.' />
                            </div>
                        </div>
                        <div>
                            <h1 className=' font-bold text-xl lg:text-3xl text-white pb-5'>Why opt for Agregar's AI facial recognition technology?</h1>
                            <div className=' border-b border-primary'> </div>
                            <div className=' space-y-3'>
                                <KycpointsCards showdescription description='Ensure secure and dependable account registration, access, onboarding, and verification processes.' />
                                <KycpointsCards showdescription description='Streamline Documentation with real-time verification, delivering results in seconds.' />
                                <KycpointsCards showdescription description='Combat identity fraud effectively, utilizing 3D depth, skin texture, and microexpression analysis.' />
                                <KycpointsCards showdescription description='Implement robust verification measures through Liveness detection and AI mapping, ensuring ownership of an item.' />
                                <KycpointsCards showdescription description='Bolster your defenses against credential stuffing with easy selfie verification, supporting over 10,000 IDs.' />
                                <KycpointsCards showdescription description='Minimize drop-offs with streamlined Utility bills verification.' />
                            </div>
                        </div>

                    </div>
                    <div className=' py-5 lg:py-14 px-2 lg:px-20'>
                        <div>
                            <h1 className=' font-bold text-xl lg:text-3xl text-textcolor pb-5'>Facial Biometric Authentication</h1>
                            <p className=' text-graytext1 font-semibold'>Transform your customer onboarding process with cutting-edge biometric solutions, guaranteeing a secure and effortless user experience.</p>
                        </div>
                        <div className=' grid lg:grid-cols-2 grid-cols-1 gap-5'>
                            <div className=' border-b border-primary'> </div>
                            <KycpointsCards header='Robust & Unbreakable Fraud Prevention Measures' />
                            <KycpointsCards header='Efficient Sign-In Procedures through Selfie Logins' />
                            <KycpointsCards header='Password-Free Verification for Enhanced Security' />
                            <KycpointsCards header='Effective Defense Mechanisms Against Spoofing & Impersonation Attempts' />
                        </div>
                        <div className=' pt-5 lg:pt-14'>
                            <h1 className=' font-bold text-xl lg:text-3xl text-secondary pb-5'>How Agregar’s Facial Biometric Authentication Works</h1>
                            <div className=' grid grid-cols-10 gap-8'>
                                <div className=' col-span-10 lg:col-span-7'>
                                    <div className=' space-y-3'>
                                        <div className=' flex items-center space-x-3'>
                                            <Image height={15} src={kye_dot} alt='' />
                                            <h1 className=' text-secondary text-base  lg:text-xl'>User opts for facial Biometric Authentication option, bypassing the need for password entry.</h1>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <Image height={15} src={kye_dot} alt='' />
                                            <h1 className=' text-secondary text-base  lg:text-xl'>User presents their face and proceeds to the next step of answering questions.</h1>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <Image height={15} src={kye_dot} alt='' />
                                            <h1 className=' text-secondary text-base  lg:text-xl'>User responds to the security questions and logs in successfully.</h1>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <Image height={15} src={kye_dot} alt='' />
                                            <h1 className=' text-secondary text-base  lg:text-xl'>User successfully logs in and gains access to their account and the platform.</h1>
                                        </div>

                                    </div>

                                </div>
                                <div className=' col-span-8 lg:col-span-3'>
                                    <div className=' flex justify-end'>
                                        <Image height={220} src={ky_facial_reg} alt='' />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className=' pt-5 lg:pt-14'>
                            <div className=' grid grid-cols-10 gap-8'>
                                <div className=' col-span-8 lg:col-span-3'>
                                    <div className=''>
                                        <Image height={220} src={kyc_key_pic} alt='' />
                                    </div>

                                </div>
                                <div className=' col-span-10 lg:col-span-7'>
                                    <div className=' space-y-4'>
                                        <h1 className=' text-textcolor text-xl lg:text-3xl font-bold'>Authenticate Documents with Advanced AI for Fraud Prevention and Compliance</h1>
                                        <p className=' text-sm text-graytext1'>In today’s digital landscape, verifying the authenticity of documents is crucial for businesses across industries. Agregar Technologies’ Document Verification solution provides a seamless, secure, and automated process for validating identity documents, ensuring protection from fraud and adherence to regulatory standards.</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className=' grid grid-cols-10 mt-10 gap-5 lg:gap-24 px-0 lg:px-32 lg:pt-24 pt-7'>

                    <div className=' col-span-10 lg:col-span-4'>
                        <div className=' space-y-4'>
                            <h1 className=' font-bold text-secondary text-2xl lg:text-3xl'>Validar</h1>
                            <p className=' text-textcolor'>Validar is our all-encompassing risk management solution created to minimize risks connected with customer, vendor, and business onboarding. Engineered to comply with all regulatory standards, Validar includes built-in features such as fraud detection monitoring, credit scoring, consumer insicghts and analytics, as well as AML, Fraud, and Terrorist screening components. By doing so, Validar guarantees protection for both consumers and institutions, all while ensuring regulatory compliance.</p>
                            <div className=' flex items-center space-x-4 cursor-pointer'>
                                <h1 className=' text-primary'>Learn More</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className=' col-span-10 lg:col-span-6'>
                        <Image
                            className=' rounded-[9px]'
                            src={validar_image} alt='no image'
                            height={700}
                            width={800}
                            // layout="fill" // Fill the div
                            objectFit="cover"
                            quality={100}
                        />
                    </div>

                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 py-6 lg:py-28 lg:px-28 px-2 gap-6'>
                    <div>
                        <div className=' border-b border-[#dddddd]'>
                            <h1 className=' font-bold text-3xl text-secondary pb-4'>Get Started with Agregar’s AML
                                Screening Today</h1>
                        </div>
                        <div className=' pt-5 space-y-4'>
                            <p className=' text-textcolor'>Safeguard your business from financial crimes and ensure regulatory compliance with Agregar’s AML Screening solution. </p>
                            <p>Our comprehensive screening tools, combined with real-time alerts and continuous monitoring, offer unparalleled protection for your business.</p>
                        </div>
                        <div className=' pt-10'>
                            <button className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Book a Demo</button>
                        </div>
                    </div>

                    <div>
                        <Image alt='' src={smiling_doctor} />
                    </div>

                </div>
                <div>
                    <ContactSales />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page;