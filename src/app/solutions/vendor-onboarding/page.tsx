import Header from '@/Components/Header';
import Image from 'next/image';
import React from 'react';
import vo_bg from "../../../assets/vo_bg.png";
import vo_vector from "../../../assets/vo_vector.png";
import Footer from '@/Components/Footer';
import IndustriesPointCards2 from '@/Components/IndustriesPointCards2';
import kye_dot from "../../../assets/kye_dot.png";
import onb1 from "../../../assets/onb1.png";
import onb2 from "../../../assets/onb2.png";
import validar_image from "../../../assets/validar_image.png";
import smiling_doctor from "../../../assets/smiling-female-doctor-standing-with-medical-staff--7X93MWV.png";
import ContactSales from '@/Components/Sections/ContactSales';
import ScrollToTopButton from '@/Components/ScrollToTopButton';


const page = () => {
    return (
        <div className=' outfit  bg-background'>
              <ScrollToTopButton /> 
            <Header />
            <Image src={vo_bg} alt='' />
            <div className=' px-2 lg:px-44'>
                <div className=' grid grid-cols-10 lg:pt-24 pt-4 lg:gap-14 gap-6'>
                    <div className=' col-span-10 lg:col-span-6'>
                        <div className=' space-y-3'>
                            <h1 className=' text-secondary text-xl lg:text-3xl font-bold'>Vendor Onboarding</h1>
                            <button className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Talk to Sales</button>
                        </div>
                        <div className=' pt-5 lg:pt-8 lg:space-y-5 space-y-3'>
                            <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Streamline Vendor and Business Onboarding with AI-Driven Verification</h1>
                            <p className=' text-graytext1'>Partnering with the right vendors and businesses is essential for maintaining operational efficiency and reducing risks. Agregar Technologies’ Vendor and Business Onboarding solution simplifies the onboarding process through AI-powered insights, helping you verify identities, assess financial stability, and ensure compliance with legal and regulatory requirements.</p>
                        </div>

                    </div>
                    <div className=' col-span-8 lg:col-span-4'>
                        <div className=' flex justify-end'>
                            <Image src={vo_vector} alt='' height={270} />
                        </div>
                    </div>
                </div>
                <div className=' lg:py-20 py-9'>
                    <h1 className=' font-bold  lg:text-3xl text-secondary  text-xl'>Why Vendor and Business Onboarding Matters</h1>
                    <div className=' space-y-4 pt-4'>
                        <p className=' text-graytext1'>Our verification solution harnesses AI-driven insights across identity, financial, operational, legal, and reputational aspects of vendor partnerships, facilitating swifter business decisions while reducing operational costs. Detecting inconsistencies prior to vendor onboarding, our technology safeguards against fraudulent entities, mitigating substantial reputational and financial risks.</p>

                    </div>
                </div>
                <div className=' lg:py-14 py-9'>
                    <h1 className=' font-bold  lg:text-3xl text-secondary  text-xl'>Addressing Vendor Onboarding Challenges</h1>
                    <div className=' space-y-4 pt-4'>
                        <p className=' text-graytext1 font-medium'>Streamlining Business Verification and Due Diligence for Optimal Vendor Partnerships</p>

                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-5'>
                    <div>
                        <IndustriesPointCards2 showdescription header='Comprehensive Vendor Insights' description="Gain a holistic view of your vendors' onboarding progress through a centralized platform. Empower your team with forecasting capabilities and actionable insights." />
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Ensuring Regulatory Compliance' description='Guarantee adherence to industry and government regulatory requirements with a compliant vendor onboarding solution.' />
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Efficient Remote Onboarding' description="Accelerate vendor onboarding processes through paperless procedures. Digitally verify vendor identity documents for a seamless, eco-friendly experience." />
                    </div>
                    <div></div>

                </div>
                <div className=' lg:py-14 py-9'>
                    <h1 className=' font-bold  lg:text-3xl text-secondary  text-xl'>Conducting Vendor Due Diligence: A Step-by-Step Guide
                        Process for Vendor Onboarding and Due Diligence</h1>
                </div>

                <div className=' grid lg:grid-cols-2 grid-cols-1  gap-5 lg:gap-12'>
                    <div className=' border-r  lg:border-textcolor border-background space-y-5 pr-0 lg:pr-10'>
                        <div className=' space-y-3'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary  text-base lg:text-xl'>Commence Vendor Registration through Various Channels</h1>
                            </div>
                            <p className=' text-graytext1'>Kickstart the vendor registration procedure by distributing the invitation link via email, SMS, or WhatsApp. Accelerate vendor onboarding by either bulk uploading their details or opting to initiate the process for individual vendors.</p>
                        </div>
                        <div className=' space-y-2'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-base lg:text-xl'>Customizable Automated Workflows for Data Collection</h1>
                            </div>
                            <p className=' text-graytext1'>Eliminate manual data collection tasks with a platform that allows you to configure workflows for gathering verification documents, including Proof of Identity (PoI), Proof of Address (PoA), TIN number, Business Establishment License, Balance Sheet, or any other required documents to expedite vendor onboarding.</p>
                        </div>
                        <div className=' space-y-2'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-base lg:text-xl'>Risk Assessment through Due Diligence</h1>
                            </div>
                            <p className=' text-graytext1'>Utilize our proprietary technology for swift vendor due diligence. Identify potential risks or issues associated with your vendors and implement corrective measures to protect your brand reputation and mitigate risks.</p>
                        </div>
                        <div className=' space-y-2'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-base lg:text-xl'>Approval Streamlining</h1>
                            </div>
                            <p className=' text-graytext1'>Efficient Approval Workflow Management Throughout Onboarding
                                From initiation by the process initiator to review by stakeholders and final approval – establish customizable workflows to prompt stakeholders to fulfill their assigned tasks and responsibilities, advancing the case to the subsequent stage. Expedite approval processes by automating approval pathways.</p>
                        </div>

                    </div>
                    <div className=' space-y-3'>
                        <div className=' space-y-2'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-base lg:text-xl'>Digital Contract Management</h1>
                            </div>
                            <p className=' text-graytext1'>Accelerated Contract Closure through Digital Signing
                                Facilitate quicker closure of vendor contracts with a range of digital signature choices. Our e-signature tool enables vendors to upload their electronic signatures for contract signing or electronically sign stamp papers. Collaborate with various stakeholders to co-sign contracts and expedite the onboarding process.</p>
                        </div>
                        <div className=' space-y-2'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-base lg:text-xl'>ERP Integration</h1>
                            </div>
                            <p className=' text-graytext1'>Effortless Integration
                                Simple Connectivity with Enterprise-level ERPs
                                Streamline vendor authentication through seamless integrations. Connect our cutting-edge vendor onboarding solution with your ERP systems, while enabling bidirectional communication to retrieve vendor data from diverse government databases.</p>
                        </div>
                        <div className=' space-y-2'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-base lg:text-xl'>Continuous Monitoring</h1>
                            </div>
                            <p className=' text-graytext1'>Proactive Risk Monitoring for Early Detection
                                Protect your business reputation through ongoing vendor monitoring to detect potential risks early on. Perform regular checks using public domain or subscribed databases to ensure compliance with necessary regulations.</p>
                        </div>

                    </div>

                </div>
                <div className=' lg:py-16 py-7 text-secondary font-bold text-xl lg:text-3xl'>
                    <h1>Designed to Ensure Success Throughout the Onboarding Process</h1>
                </div>
                <div>
                    <div className=' grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-20'>

                        <div>
                            <div className=' flex  items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-base lg:text-xl'>Digital Contract Management</h1>
                            </div>
                            <p className=' pl-6 text-graytext1'>Ensuring Secure User Access and Compliance</p>
                        </div>
                        <div>
                            <div className=' flex  items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-base lg:text-xl'>Vendor Database Repository</h1>
                            </div>
                            <p className=' pl-6 text-graytext1'>Creating Comprehensive Vendor Lists for Future Reference</p>
                        </div>
                        <div>
                            <div className=' flex  items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-base lg:text-xl'>Omni-channel Interaction</h1>
                            </div>
                            <p className=' pl-6 text-graytext1'>Efficient Communication Streamlining</p>
                        </div>
                        <div>
                            <div className=' flex  items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-base lg:text-xl'>Extensive Proprietary Database</h1>
                            </div>
                            <p className=' pl-6 text-graytext1'>Expediting Verification and Turnaround Time</p>
                        </div>
                        <div>
                            <div className=' flex  items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-base lg:text-xl'>Interactive Dashboards & Tailored Reports</h1>
                            </div>
                            <p className=' pl-6 text-graytext1'>Providing Real-time Case Progress Monitoring</p>
                        </div>
                        <div>
                            <div className=' flex  items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-base lg:text-xl'>ERP/CRM Integration</h1>
                            </div>
                            <p className=' pl-6 text-graytext1'>Facilitating Seamless Bidirectional Communication</p>
                        </div>
                        <div>
                            <div className=' flex  items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-base lg:text-xl'>Multilingual Forms</h1>
                            </div>
                            <p className=' pl-6 text-graytext1'>Expanding Reach and Enhancing Conversions</p>
                        </div>
                        <div>
                            <div className=' flex  items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-base lg:text-xl'>Personalized Alerts and Notifications</h1>
                            </div>
                            <p className=' pl-6 text-graytext1'>Keeping Stakeholders Informed of Case Status Updates</p>
                        </div>


                    </div>

                </div>
                <div className=' grid grid-cols-1 lg:grid-cols-2 py-8 lg:py-20'>
                    <div className=' mb-7'>
                        <Image alt='' src={onb1} height={340} />
                    </div>
                    <div className='lg:mt-5 pt-0'>
                        <Image alt='' src={onb2} height={340} />
                    </div>
                </div>
                <div className=' grid grid-cols-10 mt-10 gap-5 lg:gap-24 px-0 lg:px-16 '>

                    <div className=' col-span-10 lg:col-span-4'>
                        <div className=' space-y-4 '>
                            <h1 className=' font-bold text-secondary text-2xl lg:text-3xl'>Validar</h1>
                            <p className=' text-textcolor'>Validar is our all-encompassing risk management solution created to minimize risks connected with customer, vendor, and business onboarding. Engineered to comply with all regulatory standards, Validar includes built-in features such as fraud detection monitoring, credit scoring, consumer insicghts and analytics, as well as AML, Fraud, and Terrorist screening components. By doing so, Validar guarantees protection for both consumers and institutions, all while ensuring regulatory compliance.</p>
                            <div className=' flex items-center space-x-4 cursor-pointer hover:underline hover:text-primary'>
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