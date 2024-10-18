import React from 'react';
import kyb_bg from "../../assets/kyb_bg.png"
import Header from '@/Components/Header';
import Image from 'next/image';
import kyb_vector from "../../assets/kyb_vector.png"
import KycpointsCards from '@/Components/KycpointsCards';
import Footer from '@/Components/Footer';
import kye_dot from "../../assets/kye_dot.png";
import kyb_vec from "../../assets/kyb_vec.png";
import kyb_globe from "../../assets/kyb_globe.png";
import kyb_chart from "../../assets/kyb_chart_vector.png";
import kyb_scanning from "../../assets/kyb_scanner.png";

const page = () => {
    return (
        <div className=' outfit  bg-background'>
            <Header />
            <Image src={kyb_bg} alt='' />
            <div className=' px-2 lg:px-44'>
                <div className=' grid grid-cols-10 lg:pt-24 pt-4'>
                    <div className=' col-span-10 lg:col-span-5'>
                        <div className=' space-y-3'>
                            <h1 className=' text-secondary text-2xl lg:text-3xl font-bold'>Know Your Business (KYB)
                                Verification</h1>
                            <button className=' bg-primary text-[14px] text-white font-semibold px-8 py-2 rounded-[4px]  outfit'>Book a Demo</button>
                        </div>
                        <div className=' pt-5 lg:pt-8 lg:space-y-5 space-y-3'>
                            <h1 className=' text-3xl font-bold  text-secondary'>Verify Businesses Worldwide with Complete Transparency and Compliance</h1>
                            <p className=' text-graytext1'>In an increasingly interconnected world, it’s essential for businesses to verify their partners, clients, and vendors to avoid financial, legal, and reputational risks. Agregar Technologies’ KYB (Know Your Business) Verification solution offers a comprehensive, AI-powered platform that simplifies business verification, ensuring full transparency, trust, and compliance with global regulatory standards.</p>
                        </div>

                    </div>
                    <div className=' col-span-8 lg:col-span-5'>
                        <div className=' flex justify-end'>
                            <Image src={kyb_vector} alt='' height={370} />
                        </div>
                    </div>
                </div>


                <div className=' grid place-items-center lg:px-24 px-2 lg:py-20 py-5'>
                    <div className=' space-y-3'>
                        <h1 className=' text-secondary text-2xl lg:text-3xl font-bold'>Streamlined Business Verification</h1>
                        <p className=' text-graytext1'>Verify businesses using international databases Access instant details on Ultimate Beneficial Owners (UBOs) and company profiles
                            Ensure real-time business verification and comprehensive risk coverage Simplify onboarding, seamlessly integrate APIs, and access data effortlessly</p>
                    </div>

                </div>
                <div>
                    <h1 className=' font-bold text-secondary text-xl lg:text-3xl'>The KYB Verification Package</h1>
                    <div className=' grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-10 lg:pt-10 pt-3'>
                        <div>
                            <div className=' flex items-center justify-between border-b border-primary'>
                                <KycpointsCards header='Advanced Reporting' />
                                <div></div>
                            </div>
                            <p className=' text-graytext1 pt-2'>Report any suspicious activities or transactions to relevant authorities in compliance with local regulations.</p>
                        </div>
                        <div>
                            <div className=' flex items-center justify-between border-b border-primary'>
                                <KycpointsCards header='Standard KYB' />
                                <div></div>
                            </div>
                            <p className=' text-graytext1 pt-2'>Suitable for basic business verifications, reports include:</p>
                            <div className=' pt-2 py-4'>
                                <div className=' flex items-center space-x-3'>
                                    <div className="text-lg font-extrabold text-graytext1">•</div>
                                    <p className=' text-graytext1'>Registration Details</p>
                                </div>
                                <div className=' flex items-center space-x-3'>
                                    <div className="text-lg font-extrabold text-graytext1">•</div>
                                    <p className=' text-graytext1'>Company Officers</p>
                                </div>
                                <div className=' flex items-center space-x-3'>
                                    <div className="text-lg font-extrabold text-graytext1">•</div>
                                    <p className=' text-graytext1'>Company Filings</p>
                                </div>
                                <div className=' flex items-center space-x-3'>
                                    <div className="text-lg font-extrabold text-graytext1">•</div>
                                    <p className=' text-graytext1'>Industry Codes</p>
                                </div>
                            </div>
                            <p className=' text-graytext1'>Businesses are verified against regularly updated databases holding corporate data from official registries for precise verifications.</p>
                        </div>
                        <div>
                            <div className=' flex items-center justify-between border-b border-primary'>
                                <KycpointsCards header='Enhanced KYB' />
                                <div></div>
                            </div>
                            <p className=' text-graytext1 pt-2'>Ideal for comprehensive business verification, reports consist of:</p>
                            <div className=' pt-2 py-4'>
                                <div className=' flex items-center space-x-3'>
                                    <div className="text-lg font-extrabold text-graytext1">•</div>
                                    <p className=' text-graytext1'>Registration Details</p>
                                </div>
                                <div className=' flex items-center space-x-3'>
                                    <div className="text-lg font-extrabold text-graytext1">•</div>
                                    <p className=' text-graytext1'>Company Officers</p>
                                </div>
                                <div className=' flex items-center space-x-3'>
                                    <div className="text-lg font-extrabold text-graytext1">•</div>
                                    <p className=' text-graytext1'>Company Filings</p>
                                </div>
                                <div className=' flex items-center space-x-3'>
                                    <div className="text-lg font-extrabold text-graytext1">•</div>
                                    <p className=' text-graytext1'>Financial performance of the company</p>
                                </div>
                            </div>
                            <p className=' text-graytext1'>
                                Businesses are verified against corporate data retrieved in real-time from official business registries, comprehensive dumps, and third-party data sources, ensuring 100% accuracy and authenticity. Coverage extends to global and complex jurisdictions, including the MENA region.</p>
                        </div>

                    </div>
                </div>
                <div className=' pt-4 lg:pt-14 lg:pb-14'>
                    <h1 className=' text-secondary font-bold lg:text-3xl text-xl'>Experience Unmatched Speed And Precision With KYB Verification for Business Onboarding And Compliance Maintenance</h1>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 gap-5 lg:gap-12'>
                    <div className=' space-y-5'>
                        <div className=' space-y-2'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-xl'>Comprehensive Fraud Protection</h1>
                            </div>
                            <p className=' text-graytext1'>Safeguard against fraudsters, impostors, and money launderers with global risk coverage, preventing potential losses.</p>
                        </div>
                        <div className=' space-y-2'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-xl'>Effortless Compliance Adherence</h1>
                            </div>
                            <p className=' text-graytext1'>Achieve global compliance seamlessly through single API integration, sidestepping non-compliance penalties.</p>
                        </div>
                        <div className=' space-y-2'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-xl'>Real-Time Company Data Updates</h1>
                            </div>
                            <p className=' text-graytext1'>Automated retrieval of information from international commercial registers ensures access to the latest company databases.</p>
                        </div>
                    </div>
                    <div>
                        <Image src={kyb_vec} alt='' />
                    </div>

                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 lg:py-28 py-10 lg:px-16 px-2'>
                    <div>
                        <Image src={kyb_globe} alt='' height={340} />
                    </div>
                    <div>
                        <div className=' border-b border-primary'>
                            <h1 className=' text-[27px] font-bold text-secondary pb-2'>Worldwide reach & immediate business authentication</h1>
                        </div>
                        <div className=' space-y-1'>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Identity Verification</p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Authenticate 300 million companies across over 225 databases</p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Business Documentation</p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Receive instant results within 3 seconds with 99% accuracy</p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Business Connections</p>
                            </div>
                            <div className=' flex items-center space-x-3'>
                                <div className="text-lg font-extrabold text-graytext1">•</div>
                                <p className=' text-graytext1'>Meet international Anti-Money Laundering/Combating the Financing of Terrorism (AML/CFT) compliance standards</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <h1 className=' font-bold text-3xl text-secondary'>The KYB Verification Process: Stringent Checks for Maximum Security</h1>
                </div>
                <div className=' grid lg:grid-cols-2 grid-cols-1 lg:pt-20 pt-10 gap-5 lg:gap-12'>
                    <div className=' border-r  border-textcolor space-y-3'>
                        <div className=' space-y-3'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-xl'>Business Registration Verification</h1>
                            </div>
                            <p className=' text-graytext1'>Confirm registration details including registration number, date of incorporation, registered address, and other relevant particulars.</p>
                        </div>
                        <div className=' space-y-2'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-xl'>Ownership Structure Analysis</h1>
                            </div>
                            <p className=' text-graytext1'>Identify Ultimate Beneficial Owners (UBOs), analyze shareholding structures, and comprehend the business hierarchy.</p>
                        </div>
                        <div className=' space-y-2'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-xl'>Business Documentation Collection</h1>
                            </div>
                            <p className=' text-graytext1'>Gather and review essential business documents such as commercial registration certificates, business licenses, and tax registration certificates.</p>
                        </div>
                        <div className=' space-y-2'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-xl'>Physical Verification (if necessary)</h1>
                            </div>
                            <p className=' text-graytext1'>Conduct potential site visits to the registered business address to ensure legitimacy and avoid shell companies.</p>
                        </div>

                    </div>
                    <div className=' space-y-3'>
                        <div className=' space-y-2'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-xl'>Financial Health Assessment</h1>
                            </div>
                            <p className=' text-graytext1'>Examine financial statements to gauge potential risks.</p>
                        </div>
                        <div className=' space-y-2'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-xl'>Background Check</h1>
                            </div>
                            <p className=' text-graytext1'>Identify key personnel and scrutinize for any indications of involvement in financial misconduct.</p>
                        </div>
                        <div className=' space-y-2'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-xl'>Risk Evaluation</h1>
                            </div>
                            <p className=' text-graytext1'>Assess business risks based on collected information and categorize as low, medium, or high.</p>
                        </div>
                        <div className=' space-y-2'>
                            <div className=' flex items-center space-x-3'>
                                <Image src={kye_dot} alt='' height={15} />
                                <h1 className=' font-bold text-secondary text-xl'>Continuous Monitoring</h1>
                            </div>
                            <p className=' text-graytext1'>Assess business risks based on collected information and categorize as low, medium, or high.</p>
                        </div>
                    </div>

                </div>

                <div className=' py-8 lg:py-16'>
                    <h1 className=' font-bold  text-3xl text-secondary'>Completely Automated Business Onboarding With Agregar</h1>
                </div>

                <div className='grid grid-cols-10 gap-5 lg:gap-10'>
                    <div className=' col-span-10 lg:col-span-3'>
                        <div className=''>
                            <div>
                                <div className=' border-b border-primary flex items-center justify-between'>
                                    <h1 className=' font-bold text-secondary text-lg pb-3'>Effortless Onboarding:</h1>
                                    <div className="text-xl ">—</div>
                                </div>
                                <div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Authenticate and onboard genuine customers effortlessly
                                        </p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>KYC Authentication
                                        </p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Advanced Due Diligence
                                        </p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Expand beyond standard authentication for thorough compliance assessments and risk evaluations

                                        </p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>99% Precision</p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Simplified Integration</p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' col-span-10 lg:col-span-7'>
                        <div className=''>
                            <div>
                                <div className=' border-b border-primary flex items-center justify-between'>
                                    <h1 className=' font-bold text-secondary text-lg pb-3'>Seamless integration without intricate development, conserving time and resources
                                        :</h1>
                                    <div className="text-xl ">—</div>
                                </div>
                                <p className=' text-graytext1 font-semibold py-1'>Streamlined Authentication.</p>
                                <div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Business Verification Unbound by Borders or Constraints
                                        </p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Global reach spanning 225+ international databases containing data on companies
                                        </p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Worldwide coverage featuring authenticated commercial data
                                        </p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Immediate business authentication and multi-tier risk protection for organizations globally

                                        </p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Effortless onboarding facilitated by straightforward API integration and developer choices</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=' grid grid-cols-10 lg:pt-20 pt-7 lg:px-16 px-2 pb-14'>
                    <div className=' col-span-10 lg:col-span-6'>
                        <div className=' space-y-3'>
                            <h1 className=' text-secondary text-xl lg:text-3xl font-bold'>Comprehensive Solutions to Detect and Prevent Financial Crimes</h1>
                            <p className=' text-graytext1'>In an increasingly complex regulatory environment, preventing money laundering, fraud, and terrorist financing is essential for businesses across industries. Agregar Technologies’ AML Screening solution provides a robust defense against financial crimes, ensuring compliance with global regulations and safeguarding your business from potential risks.</p>
                        </div>
                    </div>
                    <div className=' col-span-8 lg:col-span-4'>
                        <div className=' flex justify-end'>
                            <Image height={180} src={kyb_chart} alt='' />
                        </div>
                    </div>

                </div>
                <div className=' space-y-3 lg:px-16 px-2'>
                    <h1 className=' text-secondary text-xl lg:text-3xl font-bold'>Why AML Screening is Crucial</h1>
                    <p className=' text-graytext1'>Money laundering and financial crimes pose significant risks to businesses, potentially leading to severe penalties, reputational damage, and financial loss. With evolving regulatory requirements and rising threats, it is vital to implement strong anti-money laundering protocols. AML Screening by Agregar helps you stay ahead by detecting high-risk customers, ensuring compliance, and preventing fraudulent activities.</p>
                    <p className=' text-graytext1'>Our solution offers real-time screening against global watchlists, Politically Exposed Persons (PEPs), and sanction lists, ensuring that your business remains compliant with international standards.</p>
                </div>
                <div className=' space-y-3 lg:px-16 px-2 pt-14'>
                    <h1 className=' text-textcolor text-xl lg:text-3xl font-bold'>Our AML Screening Solution</h1>
                    <div className=' grid grid-cols-6'>
                        <div className=' col-span-6 lg:col-span-2'>
                            <Image alt='' src={kyb_scanning} height={200} />
                        </div>
                        <div className=' col-span-6 lg:col-span-4'>
                            <div>
                                <h1 className=' text-graytext1 font-semibold'>Comprehensive suite of high-quality AML services for effective risk mitigation, ensuring adherence to global regulatory standards.</h1>
                                <div className=' space-y-1 pt-4'>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Effective prevention of fraud, money laundering, and terrorist financing</p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Global adherence to AML/CFT regulations</p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Screening for Politically Exposed Persons (PEPs), sanction lists, and adverse media</p>
                                    </div>
                                    <div className=' flex items-center space-x-3'>
                                        <div className="text-lg font-extrabold text-graytext1">•</div>
                                        <p className=' text-graytext1'>Extensive global screening across 1700+ international databases.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className=' py-4'>
                        <p className=' text-graytext1 font-bold'>We offer businesses worldwide a range of robust AML tools to combat and deter financial crime across various channels. Our AML screening solutions ensure swift and effective screening of new entities and prompt identification of high-risk individuals, along with continuous monitoring of your existing clientele.</p>
                    </div>
                    <div className=' grid grid-cols-3 '>

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page;