import Header from '@/Components/Header';
import Image from 'next/image';
import React from 'react';
import education_bg from "../../../assets/education_bg.png";
import education_vector from "../../../assets/education_vector.png";
import IndustriesPointCards from '@/Components/IndustriesPointCards';
import IndustriesPointCards2 from '@/Components/IndustriesPointCards2';
import Footer from '@/Components/Footer';
import bg_check_vector from "../../../assets/bg_check_vector.png";
import teacher_vector from "../../../assets/teacher_vector.png";
import prop_vector from "../../../assets/prop_vector.png";
import ContactSales from '@/Components/Sections/ContactSales';
import Smilingface from "../../../assets/smiling-female.png";
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const page = () => {
    return (
        <div className=' outfit  bg-background'>
              <ScrollToTopButton /> 
            <Header />
            <MobileHeader />
            <Image src={education_bg} alt='' />
           
            <div className='px-2 lg:px-44'>
                <div className='grid grid-cols-10 lg:pt-24 pt-4 gap-14'>
                    <div className=' col-span-10 lg:col-span-6'>
                        <div className=' space-y-3'>
                            <h1 className=' text-primary text-xl font-bold'>Education</h1>
                        </div>
                        <div className=' pt-5 lg:pt-6 lg:space-y-5 space-y-3'>
                            <h1 className=' text-xl lg:text-3xl font-bold  text-secondary'>Fostering Trust in Education Ecosystems for Safer Learning</h1>
                            <button className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Book a Demo</button>
                            <p className=' text-graytext1'>Ensure safety and reliability by verifying identities, conducting background checks, and streamlining onboarding processes for teachers, management, office staff, students,
                                parents, franchisees, and coaching centers. This approach builds a secure and trustworthy education ecosystem</p>
                        </div>

                    </div>
                    <div className=' col-span-8 lg:col-span-4'>
                        <div className=' flex justify-end'>
                            <Image src={education_vector} alt='' />
                        </div>
                    </div>

                </div>
                <div className=' space-y-4 pt-6 lg:pt-20'>
                    <h1 className=' text-xl lg:text-3xl font-bold text-secondary'>Screening Challenges in the Education Industry</h1>
                    <p className=' text-graytext1'>Ironically, falsified education qualifications and harassment cases are prevalent in the education sector.</p>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 pt-10 gap-4 lg:gap-16'>
                    <div>
                        <IndustriesPointCards2 showdescription header='False Education Credentials of Teachers' description='False education credentials can result in poor quality of education and erode the trust and credibility of an educational institution among parents and students.' />
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Patient Experience Matters, Hire 
with Care' description='Agregar ensures the verification of documents and backgrounds for white-collar professionals such as medical representatives, doctors (including their registration and licenses), and registered healthcare workers.' />
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='History of Misconduct and Ethical Behavior' description="Hiring individuals with a history of ethical and behavioral issues can significantly damage an institution's reputation and may lead to legal liabilities in the event of data breaches." />
                    </div>
                    <div>
                        <IndustriesPointCards2 showdescription header='Rise in Sexual Harassment Incidents' description="To ensure a safe learning environment, student safety must be a top priority. Hiring leaders with undisclosed harassment incidents can compromise this safety." />
                    </div>

                </div>
                <div className=' space-y-4 lg:py-20 py-8 px-20'>
                    <h1 className=' text-xl lg:text-3xl font-bold text-secondary'>Transforming Employee Background Checks in the Education Industry</h1>
                    <p className=' text-graytext1'>Comprehensive employee screening across various roles ensures competence, integrity, and reliability within the education sector. Enhance the quality and dependability of the educational workforce by verifying the backgrounds of teaching staff (white-collar screening), office personnel (blue-collar screening), and leadership positions.</p>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 lg:pt-16 pt-8 gap-4 lg:gap-10'>
                    <div>
                        <div className=' border-b border-[#dddddd] space-y-4'>
                            <h1 className=' text-textcolor font-bold text-2xl'>Teacher Screenings</h1>
                            <p className=' text-graytext1 pb-5'>Conducting thorough background checks on teachers is crucial for student well-being, preventing misconduct, and fostering an environment of trust for parents and students.</p>
                        </div>
                        <div className=' pt-6 space-y-4'>
                            <IndustriesPointCards2 header="Evaluate the teaching staff's subject knowledge, pedagogical skills, 
and teaching experience." />
                            <IndustriesPointCards2 header="Verify the academic credentials, certifications, and teaching 
qualifications of educators." />
                            <IndustriesPointCards2 header="Assess the reputation, work history, and integrity of the teaching staff." />
                        </div>
                    </div>
                    <div>
                        <div className=' pl-0 lg:pl-10'>
                            <Image src={bg_check_vector} alt='' height={300} />
                        </div>
                    </div>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 lg:pt-16 pt-8 gap-4 lg:gap-10'>

                    <div>
                        <div className=' pl-0 lg:pl-10'>
                            <Image src={teacher_vector} alt='' height={320} />
                        </div>
                    </div>
                    <div>
                        <div className=' border-b border-[#dddddd] space-y-4'>
                            <h1 className=' text-textcolor font-bold text-2xl'>Office Employee Screenings</h1>
                            <p className=' text-graytext1 pb-5'>Hiring individuals with a history of misconduct or criminal behavior can severely harm the reputation of an educational institution. Since office personnel often have access to sensitive student and institutional information, conducting background checks is essential to prevent hiring individuals with a history of data breaches or identity theft.</p>
                        </div>
                        <div className=' pt-6 space-y-4'>
                            <IndustriesPointCards2 header='Assess the reliability, integrity, and suitability of office 
staff for administrative roles.' />
                            <IndustriesPointCards2 header='Verify the work history, references, and background of office staff.' />
                            <IndustriesPointCards2 header='Evaluate the specific skills and competencies required for 
office support roles.' />
                        </div>
                    </div>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 lg:pt-16 pt-8 gap-4 lg:gap-10'>
                    <div>
                        <div className=' border-b border-[#dddddd] space-y-4'>
                            <h1 className=' text-textcolor font-bold text-2xl'>Leadership Screening</h1>
                            <p className=' text-graytext1 pb-5'>Protect Your Reputation with Proper Management Hires
                                Hiring principals and C-suite executives in the Edutech industry without thorough background checks can expose an educational institution to legal liabilities in case of incidents involving personnel with a history of misconduct. Individuals with a history of unethical behavior or malpractice should not be appointed to leadership positions.</p>
                        </div>
                        <div className=' pt-6 space-y-4'>
                            <IndustriesPointCards2 header="Assess leadership skills, vision, and strategic thinking abilities for 
management roles (e.g., Principals and senior members in Edutech)." />
                            <IndustriesPointCards2 header="Evaluate candidates' past achievements and leadership experience." />
                            <IndustriesPointCards2 header="Conduct in-depth integrity checks and assess ethical conduct and 
decision-making capabilities." />
                        </div>
                    </div>
                    <div>
                        <div className=' pl-0 lg:pl-10'>
                            <Image src={prop_vector} alt='' height={300} />
                        </div>
                    </div>
                </div>
                <div className=' pt-5 lg:pt-12 border-b border-primary pb-3'>
                    <h1 className=' text-secondary text-xl lg:text-3xl font-semibold'>Background Checks for Building a Trusted Workforce</h1>
                </div>
                <div className=' pt-3 lg:pt-6 lg:pb-12 pb-6 space-y-2'>
                    <div className=' flex items-center space-x-3'>
                        <div className="text-lg font-extrabold text-graytext1">•</div>
                        <p className=' text-graytext1'>Education Verification
                        </p>
                    </div>
                    <div className=' flex items-center space-x-3'>
                        <div className="text-lg font-extrabold text-graytext1">•</div>
                        <p className=' text-graytext1'>Employment Verification

                        </p>
                    </div>
                    <div className=' flex items-center space-x-3'>
                        <div className="text-lg font-extrabold text-graytext1">•</div>
                        <p className=' text-graytext1'>Address Verification


                        </p>
                    </div>
                    <div className=' flex items-center space-x-3'>
                        <div className="text-lg font-extrabold text-graytext1">•</div>
                        <p className=' text-graytext1'>Identity Verification
                        </p>
                    </div>
                    <div className=' flex items-center space-x-3'>
                        <div className="text-lg font-extrabold text-graytext1">•</div>
                        <p className=' text-graytext1'>Police Verification
                        </p>
                    </div>
                    <div className=' flex items-center space-x-3'>
                        <div className="text-lg font-extrabold text-graytext1">•</div>
                        <p className=' text-graytext1'>Court Record Check
                        </p>
                    </div>
                    <div className=' flex items-center space-x-3'>
                        <div className="text-lg font-extrabold text-graytext1">•</div>
                        <p className=' text-graytext1'>Passport Verification
                        </p>
                    </div>
                    <div className=' flex items-center space-x-3'>
                        <div className="text-lg font-extrabold text-graytext1">•</div>
                        <p className=' text-graytext1'>Social Media Check
                        </p>
                    </div>
                    <div className=' flex items-center space-x-3'>
                        <div className="text-lg font-extrabold text-graytext1">•</div>
                        <p className=' text-graytext1'>Professional Reference Check
                        </p>
                    </div>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 py-7 lg:py-28  px-2 gap-3 lg:gap-6'>
                    <div>
                        <div className=' border-b border-[#dddddd]'>
                            <h1 className=' font-bold text-2xl text-secondary pb-4'>How to Get Started with Agregar’s
                                Education Solutions</h1>
                        </div>
                        <div className=' pt-5 space-y-4'>
                            <p className=' text-secondary text-base font-bold'>Secure a dependable and effective warehouse workforce.
                                Our employee screening solutions validate qualifications
                                and backgrounds, instilling confidence in the E-commerce &
                                Retail supply chain.</p>

                        </div>
                        <div className=' pt-10'>
                            <button className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Book a Demo</button>
                        </div>
                    </div>

                    <div>
                        <Image alt='' src={Smilingface} />
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