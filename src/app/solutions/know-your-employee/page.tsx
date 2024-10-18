"use client"
import React from 'react';
import kye_bg from "../../../assets/kye_banner.png";
import Header from '@/Components/Header';
import Image from 'next/image';
import kye_vector from "../../../assets/kye_vector.png";
import kye_solutions from "../../../assets/kye_solutions.png";
import kyc_standardcheck_ from "../../../assets/kyc_standardchecks_.png";
import kye_check_pro from "../../../assets/kyc_checks_pro.png";
import kye_lead from "../../../assets/kye_lead.png";
import stay_screen from "../../../assets/stay_screen_vector.png";
import Footer from '@/Components/Footer';
import emverifyImage from "../../../assets/Group 598.png";
import kye_dot from "../../../assets/kye_dot.png";
import How_kye_works from "../../../assets/how_kyc_worksImage.png";
import smiling_doctor from "../../../assets/smiling-female-doctor-standing-with-medical-staff--7X93MWV.png";
import ContactSales from '@/Components/Sections/ContactSales';
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const page: React.FC = () => {
    return (
        <div className=' outfit  bg-background'>
             <ScrollToTopButton /> 
            <MobileHeader />
            <Header />
            <Image src={kye_bg} alt='' />
            <div className='px-2 lg:px-48'>
                <div className=' grid grid-cols-10 py-6 lg:py-28'>
                    <div className=' col-span-10 lg:col-span-6'>
                        <div className=' space-y-4'>
                            <h1 className=' text-secondary  text-2xl lg:text-3xl font-bold'>Know Your Employee(KYE)</h1>
                            <button
                            
                                onClick={() => {
                                    window.location.href = "mailto:sales@agregartech.com";
                                }} 
                                className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[6px]  outfit hover:bg-secondary'>Talk to Sales</button>
                        </div>
                        <div className=' space-y-6 pt-4 lg:pt-8'>
                            <h1 className=' text-textcolor  text-2xl lg:text-3xl font-bold'>Ensure Your Workforce is Trusted, Verified, and Compliant</h1>
                            <p className=' text-graytext1'> In today’s fast-paced business environment, having the right workforce in place is essential for operational success. With Agregar Technologies' KYE solutions, you gain access to a comprehensive verification platform that ensures your employees meet the highest standards of trust and reliability.</p>
                        </div>
                    </div>
                    <div className=' col-span-8 lg:col-span-4'>
                        <div className=' flex justify-end'>
                            <Image src={kye_vector} alt='no image' height={400} />
                        </div>
                    </div>

                </div>
                <div className=' pb-20'>
                    <div className=' space-y-3'>
                        <h1 className=' text-textcolor font-bold text-2xl lg:text-3xl'>Why KYE Matters</h1>
                        <p className=' text-graytext1'>Hiring the wrong personnel can expose your business to unnecessary risks, including fraud, security breaches, and reputational damage. Whether you're hiring blue-collar workers, gig economy staff, or corporate employees, a thorough background verification process is critical. KYE helps you mitigate operational and hiring risks by delivering accurate and reliable information on your potential hires.
                            By leveraging Agregar's extensive data sources, your HR team can make well-informed decisions, reducing your organization’s exposure to risk and improving hiring outcomes.</p>
                    </div>
                </div>
                <div>
                    <h1 className=' text-textcolor font-bold text-2xl lg:text-3xl'>Our KYE Solutions</h1>
                    <div className=' grid grid-cols-10 px-2 lg:px-16 gap-4 lg:gap-14'>
                        <div className=' col-span-10 lg:col-span-6 '>
                            <div className=' pt-5'>
                                <div className=' border-b border-primary'>
                                    <h1 className=' font-bold text-secondary text-lg pb-3'>Blue Color Verification</h1>
                                </div>
                                <p className=' pt-5 text-graytext1'>We adopt a consultative strategy for blue-collar screening, aimed at enhancing current procedures and safeguarding your business from onboarding risks. Our verification and onboarding process is rapid, scalable, and streamlined. Gain immediate database-driven insights into the identity, residence, and criminal background of your blue-collar workforce. Our solution is tailored to suit gig economy workers, truck drivers, security personnel, and various other professions.</p>
                                <div className=' pt-9'>
                                    <div className=' border-b border-secondary flex items-center justify-between'>
                                        <h1 className=' font-bold text-secondary text-lg pb-3'>Verifications Include:</h1>
                                        <div className="text-xl ">—</div>
                                    </div>
                                    <div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Address Verification: Digital ONLY</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Criminal checks</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Employment Verification</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Identity checks</p>
                                        </div>

                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Reference</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' col-span-8 lg:col-span-4'>
                            <div className=' flex justify-end'>
                                <Image src={kye_solutions} height={250} alt='' />
                            </div>
                        </div>
                    </div>

                    <div className=' grid grid-cols-10 py-4 lg:py-20'>
                        <div className=' col-span-8 lg:col-span-4'>
                            <Image src={kyc_standardcheck_} height={250} alt='' />
                        </div>
                        <div className=' col-span-10 lg:col-span-6'>
                            <div className=' pt-5'>
                                <div className=' border-b border-primary'>
                                    <h1 className=' font-bold text-secondary text-lg pb-3'>Standard Checks</h1>
                                </div>
                                <p className=' pt-5 text-graytext1'>Having insight into an employee's background is crucial for evaluating the risk associated with their integration into your organization. While not every offense may necessarily disqualify a candidate from employment, being informed about a potential hire is indispensable for making informed decisions about your workforce. Agregar boasts a network of in-house and field researchers, enabling us to provide thorough and legally compliant background checks.</p>
                                <div className=' pt-9'>
                                    <div className=' border-b border-secondary flex items-center justify-between'>
                                        <h1 className=' font-bold text-secondary text-lg pb-3'>Verifications Include:</h1>
                                        <div className="text-xl ">—</div>
                                    </div>
                                    <div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Address Verification: Digital ONLY</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Criminal checks</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Employment Verification</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Identity checks</p>
                                        </div>

                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Education</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Reference</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className=' grid grid-cols-10 px-2 lg:px-16 gap-4 lg:gap-14'>
                        <div className=' col-span-10 lg:col-span-6 '>
                            <div className=' pt-5'>
                                <div className=' border-b border-primary'>
                                    <h1 className=' font-bold text-secondary text-lg pb-3'>Standard Checks Pro</h1>
                                </div>
                                <p className=' pt-5 text-graytext1'>Having insight into an employee's background is crucial for evaluating the risk associated with their integration into your organization. While not every offense may necessarily disqualify a candidate from employment, being informed about a potential hire is indispensable for making informed decisions about your workforce. Agregar boasts a network of in-house and field researchers, enabling us to provide thorough and legally compliant background checks.</p>
                                <div className=' pt-9'>
                                    <div className=' border-b border-secondary flex items-center justify-between'>
                                        <h1 className=' font-bold text-secondary text-lg pb-3'>Verifications Include:</h1>
                                        <div className="text-xl ">—</div>
                                    </div>
                                    <div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Address Verification: Digital and Physical Verification</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Adverse Media</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Criminal checks</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Employment Verification</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Education Verification</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Identity checks</p>
                                        </div>

                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Reference checks</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' col-span-8 lg:col-span-4'>
                            <div className=' flex justify-end'>
                                <Image src={kye_check_pro} height={250} alt='' />
                            </div>
                        </div>
                    </div>

                    <div className=' grid grid-cols-10 py-4 lg:py-20'>
                        <div className=' col-span-8 lg:col-span-4'>
                            <Image src={kye_lead} height={250} alt='' />
                        </div>
                        <div className=' col-span-10 lg:col-span-6'>


                            <div className=' pt-5'>
                                <div className=' border-b border-primary'>
                                    <h1 className=' font-bold text-secondary text-lg pb-3'>Leadscreen</h1>
                                </div>
                                <p className=' pt-5 text-graytext1'>The success of any organization hinges on its senior and executive directors, underscoring the importance of diligent candidate evaluation to minimize risks. LeadScreen delivers a comprehensive executive screening and advanced verification solution, facilitating the identification and recruitment of top management professionals for your organization.</p>
                                <div className=' pt-9'>
                                    <div className=' border-b border-secondary flex items-center justify-between'>
                                        <h1 className=' font-bold text-secondary text-lg pb-3'>Verifications Include:</h1>
                                        <div className="text-xl ">—</div>
                                    </div>
                                    <div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Address Verification: Digital and Physical</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Adverse Media</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>AML/Sanction</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Credit checks ( Including International checks ).
                                            </p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Criminal checks</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Employment Verification</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Identity checks</p>
                                        </div>

                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Education</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Reference</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Drud test</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>International checks</p>
                                        </div>
                                        <div className=' flex items-center space-x-3'>
                                            <div className="text-lg font-extrabold text-graytext1">•</div>
                                            <p className=' text-graytext1'>Litigations</p>
                                        </div>

                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>

                    <div className=' grid grid-cols-10 px-2  gap-4 lg:gap-14'>
                        <div className=' col-span-10 lg:col-span-6 '>
                            <div className=' pt-5'>
                                <div className=' border-b border-primary'>
                                    <h1 className=' font-bold text-secondary text-lg pb-3'>StayScreened</h1>
                                </div>
                                <p className=' pt-5 text-graytext1'>Understanding the dynamic nature of situations, Aggregar has introduced Stay Screened, a solution aimed at ensuring continuous adherence to an organization's human resource and background verification policy for all employees throughout their tenure.</p>

                            </div>
                        </div>
                        <div className=' col-span-8 lg:col-span-4'>
                            <div className=' flex justify-end'>
                                <Image src={stay_screen} height={250} alt='' />
                            </div>
                        </div>
                    </div>

                    <div className=' grid grid-cols-1 lg:grid-cols-2 py-4 lg:py-20 gap-4 lg:gap-20'>
                        <div>
                            <div className=' space-y-4'>
                                <h1 className=' font-bold text-3xl text-secondary'>Verification Platform</h1>
                                <p className=' font-bold text-3xl text-secondary'>Empverify</p>
                            </div>
                            <div className=' pt-4 space-y-5'>
                                <h1 className=' text-textcolor'> Emp-Verify, our enterprise platform, is designed to automate and promptly generate background reports for potential new hires and current employees. This is accomplished through API integrations with various local and international data sources, universities, sanctions lists, criminal records databases and credit referencing bureaus.
                                    Emp-Verify produces compliant verification reports sourced from data partners, empowering HR managers/recruiters to make well-informed hiring decisions while protecting their organization from external threats and the adverse consequences and expenses associated with a poor hire. Statistics indicate that approximately 80% of CVs contain falsified information, often aimed at concealing details that could adversely affect a candidate's employment prospects.</h1>
                                <div className=' flex items-center space-x-4 cursor-pointer'>
                                    <h1 className=' text-primary'>Learn More</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-primary">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src={emverifyImage} alt='' />
                        </div>

                    </div>
                    <div className=' grid grid-cols-1 lg:grid-cols-2 py-4  gap-4 lg:gap-20'>
                        <div>
                            <div>
                                <h1 className=' font-bold text-3xl  text-secondary'>How Our KYE Works</h1>
                            </div>
                            <div className=' space-y-5 mt-12'>

                                <div className=' space-y-3'>
                                    <div className=' flex  space-x-4'>
                                        <Image height={14} src={kye_dot} alt='' />
                                        <h1 className=' font-bold text-textcolor text-xl'>Initial Data Collections</h1>
                                    </div>
                                    <p className=' text-graytext1 pl-7'>Collect relevant data about potential employees, including identity documents, criminal history, and employment records. Our KYE platform makes this easy through digital submission, requiring minimal HR effort.</p>
                                </div>
                                <div className=' space-y-3'>
                                    <div className=' flex  space-x-4'>
                                        <Image height={14} src={kye_dot} alt='' />
                                        <h1 className=' font-bold text-textcolor text-xl'>Verification Process</h1>
                                    </div>
                                    <p className=' text-graytext1 pl-7'>Using our extensive data networks and AI-driven technologies, Agregar runs identity, employment, and criminal background checks in real-time, ensuring the accuracy of all results.</p>
                                </div>
                                <div className=' space-y-3'>
                                    <div className=' flex  space-x-4'>
                                        <Image height={14} src={kye_dot} alt='' />
                                        <h1 className=' font-bold text-textcolor text-xl'>Real-Time Results</h1>
                                    </div>
                                    <p className=' text-graytext1 pl-7'>Receive detailed reports that include criminal history, employment verification, address validation, and any other requested checks. Our platform provides real-time feedback, minimizing delays in your hiring process.
                                    </p>
                                </div>
                                <div className='pl-7'>
                                    <div className=' flex  space-x-4'>
                                        <h1 className=' font-bold text-textcolor text-xl'>Continuous Monitoring (Optional)</h1>
                                    </div>
                                    <p className=' text-graytext1 '>For ongoing employees, our StayScreened service ensures you stay compliant by running continuous checks throughout an employee’s tenure, alerting you to any potential risks.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className=''>
                            <Image src={How_kye_works} alt='' />
                        </div>
                    </div>
                    <div className=' grid lg:grid-cols-2 grid-cols-1 py-6 lg:py-28 lg:px-28 px-2 gap-6'>
                        <div>
                            <div className=' border-b border-[#dddddd]'>
                                <h1 className=' font-bold text-3xl text-secondary pb-4'>Get Started With Agregar's KYE Solutions</h1>
                            </div>
                            <div className=' pt-5 space-y-4'>
                                <p className=' text-textcolor'>Streamline your workforce verification process with Agregar’s AI-powered KYE solution. From background checks to employment history and criminal record verification, we help you ensure your employees are qualified, trustworthy, and compliant.</p>
                                <p>Start building a reliable and secure workforce today by integrating our KYE solution into your hiring process.</p>
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
            </div>
            <Footer />
        </div>
    )
}

export default page;