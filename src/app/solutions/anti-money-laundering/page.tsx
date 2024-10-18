"use client"
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Image from 'next/image';
import React from 'react';
import antbg from "../../../assets/anti_bg.png";
import anti_vector from "../../../assets/anti_vector.png";
import mlscanvector from "../../../assets/mlscan_vector.png";
import IndustriesPointCards2 from '@/Components/IndustriesPointCards2';
import gen1 from "../../../assets/gen1.png";
import gen2 from "../../../assets/gen2.png";
import gen3 from "../../../assets/gen3.png";
import gen4 from "../../../assets/gen4.png";
import gen5 from "../../../assets/gen5.png";
import gen6 from "../../../assets/gen6.png";
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
            <Image src={antbg} alt='' />
            <div className=' px-2 lg:px-44'>
                <div className=' grid grid-cols-10 lg:pt-24 pt-4'>
                    <div className=' col-span-10 lg:col-span-5'>
                        <div className=' space-y-3'>
                            <h1 className=' text-secondary text-xl lg:text-3xl font-bold'>Anti-Money Laundering (AML)</h1>
                            <button 
                            onClick={() => {
                                window.location.href = "mailto:sales@agregartech.com";
                            }} 
                            className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Talk to Sales</button>
                        </div>
                        <div className=' pt-5 lg:pt-8 lg:space-y-5 space-y-3'>
                            <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Comprehensive Solutions to Detect and Prevent Financial Crimes</h1>
                            <p className=' text-graytext1'>In an increasingly complex regulatory environment, preventing money laundering, fraud, and terrorist financing is essential for businesses across industries. Agregar Technologies’ AML Screening solution provides a robust defense against financial crimes, ensuring compliance with global regulations and safeguarding your business from potential risks.</p>
                        </div>

                    </div>
                    <div className=' col-span-8 lg:col-span-5'>
                        <div className=' flex justify-end'>
                            <Image src={anti_vector} alt='' height={320} />
                        </div>
                    </div>
                </div>
                <div className=' lg:py-20 py-9'>
                    <h1 className=' font-bold  lg:text-3xl text-secondary  text-xl'>Why AML Screening is Crucial</h1>
                    <div className=' space-y-4 pt-4'>
                        <p className=' text-graytext1'>Money laundering and financial crimes pose significant risks to businesses, potentially leading to severe penalties, reputational damage, and financial loss. With evolving regulatory requirements and rising threats, it is vital to implement strong anti-money laundering protocols. AML Screening by Agregar helps you stay ahead by detecting high-risk customers, ensuring compliance, and preventing fraudulent activities.</p>
                        <p className=' text-graytext1'>

                            Our solution offers real-time screening against global watchlists, Politically Exposed Persons (PEPs), and sanction lists, ensuring that your business remains compliant with international standards.</p>
                    </div>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1'>
                    <div>
                        <h1 className=' font-bold  lg:text-3xl text-secondary  text-xl'>Our AML Screening Solution</h1>
                        <div>
                            <p className=' text-graytext1 font-medium pt-6'>Comprehensive suite of high-quality AML services for effective risk mitigation, ensuring adherence to global regulatory standards.</p>
                            <div className=' pt-6 space-y-2'>
                                <div className=' flex items-center space-x-3'>
                                    <div className="text-lg font-extrabold text-graytext1">•</div>
                                    <p className=' text-graytext1'>Effective prevention of fraud, money laundering, and terrorist financing
                                    </p>
                                </div>
                                <div className=' flex items-center space-x-3'>
                                    <div className="text-lg font-extrabold text-graytext1">•</div>
                                    <p className=' text-graytext1'>Global adherence to AML/CFT regulations
                                    </p>
                                </div>
                                <div className=' flex items-center space-x-3'>
                                    <div className="text-lg font-extrabold text-graytext1">•</div>
                                    <p className=' text-graytext1'>Screening for Politically Exposed Persons (PEPs), sanction lists, and adverse media
                                    </p>
                                </div>
                                <div className=' flex items-center space-x-3'>
                                    <div className="text-lg font-extrabold text-graytext1">•</div>
                                    <p className=' text-graytext1'>Extensive global screening across 1700+ international databases.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' flex justify-start  lg:justify-end pt-5 lg:0'>
                        <Image src={mlscanvector} alt='' height={300} />
                    </div>

                </div>
                <div className=' py-10 lg:py-20'>
                    <h1 className=' font-bold  lg:text-3xl text-secondary  text-xl'>We offer businesses worldwide a range of robust AML tools to combat and deter financial crime across various channels. Our AML screening solutions ensure swift and effective screening of new entities and prompt identification of high-risk individuals, along with continuous monitoring of your existing clientele.</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-5'>
                    <div>
                        <IndustriesPointCards2 showdescription header='Bulk Screening' description='Conduct bulk screening of your current clients using real-time AML screening solutions to detect high-risk customers promptly.' />
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='AML for Business' description='Authenticate business entities and perform background checks on Ultimate Beneficial Owners (UBOs) to minimize risk exposure.' />
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Continuous AML screening' description="Keep your customers' risk profiles up to date with ongoing AML screening scheduled at predefined intervals." />
                    </div>
                    <div></div>

                </div>
                <div className=' py-6 lg:py-10'>
                    <h1 className=' font-bold  lg:text-3xl text-secondary  text-xl'>KYC Verification & AML Screening: The Ultimate Risk Management Solution</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-5'>
                    <Image src={gen1} alt='' height={270} />
                    <Image src={gen2} alt='' height={270} />
                    <div className=' pl-10'>
                        <Image src={gen3} alt='' height={270} />
                    </div>
                    <Image src={gen4} alt='' height={300} />
                    <Image src={gen5} alt='' height={300} />
                    <Image src={gen6} alt='' height={270} />

                </div>

                <div className=' py-10 lg:py-20 space-y-6'>
                    <h1 className=' font-bold  lg:text-3xl text-secondary  text-xl'>Agregar’s AML solution utilizes multiple ai models for unrivaled security</h1>
                    <p className=' text-graytext1'>Our AML solution conducts individual and business screenings against global AML databases in seconds. Leveraging advanced AI technologies and human intelligence, the process identifies high-risk entities in real time, providing highly accurate results.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-5'>
                    <div>
                        <IndustriesPointCards2 showdescription header='Screening against Sanction Lists' description='Conduct screenings of your customers against worldwide sanction lists, watchlists, and adverse media databases provided by OFAC, FATF, HMT, and various other regulatory bodies.' />
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Automation' description='Efficiently meet AML compliance obligations swiftly by integrating automated AML checks with ID verification.' />
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Comprehensive AML Databases' description="Screen individuals against a vast array of databases comprising 1700+ criminal watchlists, sanction lists, and PEPs lists." />
                    </div>
                    <div></div>

                </div>
                <div className=' py-10 lg:py-20 space-y-6'>
                    <h1 className=' font-bold  lg:text-3xl text-secondary  text-xl'>What Sets Agregar’s AML Screening Solution Apart?</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-5'>
                    <div>
                        <IndustriesPointCards2 showdescription header='AML integration: smooth, secure, & speedy' description="Advance your digital identity verification journey. Through our AML integration, you're not just adopting technology, but committing to excellence, efficiency, and top-notch security." />
                        <div className=''>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Our AML integration assures:
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Instantaneous Sync
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Strong Security Measures
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Tailored Support
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Adaptable Integration Choices
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Cross-platform Compatibility
                                </p>
                            </div>


                        </div>
                    </div>
                    <div>
                        <IndustriesPointCards2 header='Protect your business' />
                        <div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Identifying High-Risk Entities
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Accessing Comprehensive AML Databases
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Utilizing Automated User Onboarding
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Preventing Financial Crimes
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <IndustriesPointCards2 header='Identify potential risks associated with customers to shield your business from AML compliance penalties.' />
                        <div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>User-Friendly Interface
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Rapid Screening Process
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Access to 1700+ Datasets
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Enhanced Data Protection Measures
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Screening Verification Documentation
                                </p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Fully Automated Monitoring
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 py-6 lg:py-28 lg:px-16 px-2 gap-6'>
                    <div>
                        <div className=' border-b border-[#dddddd]'>
                            <h1 className=' font-bold text-xl text-secondary pb-4'>How to Get Started with Agregar's
                                Document Verification Solution</h1>
                        </div>
                        <div className=' pt-5 space-y-4'>
                            <p className=' text-textcolor'>Don’t let document fraud put your business at risk. With Agregar Technologies' Document Verification solution, you can ensure the integrity of your operations by verifying documents quickly and securely.</p>
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