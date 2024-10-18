"use client"
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import React from 'react';
import aboutUsImage from "../../assets/about_us_image.png";
import Image from 'next/image';
import about_check from "../../assets/about_check.png";
import image_about from "../../assets/Image_about.png";
import ContactSales from '@/Components/Sections/ContactSales';
import CTImage from "../../assets/CTA.png";
import ideaImage from "../../assets/Idea.png";
import africaImage from "../../assets/Africa.png";
import Adaptation from "../../assets/Adaptation.png";
import dream from "../../assets/Trust.png";
import CEO from "../../assets/CEO.png";
import socila1 from "../../assets/mdi_instagram.png";
import social2 from "../../assets/ic_round-linkedIn.png";
import social3 from "../../assets/ri_twitter-fill.png";
import globalNetwork from "../../assets/Global network.png";
import ladder_Vector from "../../assets/ladder_vector.png";
import stepper_board from "../../assets/stepper_board.png";
import TeamCards from '@/Components/TeamCards';
import member1 from "../../assets/member1.png";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";
import member4 from "../../assets/member4.png";
import member5 from "../../assets/member5.png";
import member6 from "../../assets/member6.png";
import member7 from "../../assets/member7.png";
import member9 from "../../assets/member9.png";
import member10 from "../../assets/member10.png"
import member11 from "../../assets/member11.png"
import member12 from "../../assets/member12.png"
import member13 from "../../assets/member13.png";
import member14 from "../../assets/mersack.png";
import member15 from "../../assets/m_original_image.png"
import MobileHeader from '@/Components/MobileComponents/MobileHeader';
import intersect from "../../assets/Intersect.png";
import { useRouter } from 'next/compat/router';
import Link from 'next/link';
import worldwide1 from "../../assets/Worldwide1.png";
import speed1 from "../../assets/Speed1.png";
import Africa1 from "../../assets/Africa1.png";
import Trust1 from "../../assets/Trust1.png";
import Adapt1 from "../../assets/Adaptation1.png";
import ScrollToTopButton from '@/Components/ScrollToTopButton';


const page: React.FC = () => {
    const router = useRouter();

    // <TeamCards image memberName='Fredrick Allotey' memberRole='Chief Technology Officer' memberImage={member5} />
    // <TeamCards image memberName='Thelma Nunoo' memberRole='Head,Commercial' memberImage={member6} />
    // <TeamCards image memberName='Elizabeth kwakyewaa' memberRole='Head, People & Culture' memberImage={member7} />
    // <TeamCards image memberName='Miezah Blay Erzuah' memberRole='Head, Verification & Customer Onboarding' memberImage={intersect} />
    // <TeamCards image memberName='Wendell Neequaye' memberRole='Business Development Manager' memberImage={member9} />
    // <TeamCards image memberName='Ebuka Chizota' memberRole='Lead, Software Engineer' memberImage={member10} />
    // <TeamCards image memberName='Yaw Owusu' memberRole='Product Owner & Data Partners' memberImage={member11} />
    // <TeamCards image memberName='Victoria Opoku' memberRole='Lead, Accounts & Customer Onboarding' memberImage={member12} />
    // <TeamCards image memberName='Esther Aborgah' memberRole='Lead,Verification' memberImage={member13} />

    const Teams_Data1 = [
        {
            memberName: "Harry Baiden",
            memberRole: 'Chief Executive Officer',
            memberImage: member2,
            details: "Harry R. Baiden is the Founder and CEO of Agregar Technologies, boasting a distinguished career spanning over 15 years in business leadership. Renowned for his expertise in business development, operations, and marketing, he is recognized as a visionary within the industry.Harry's professional journey commenced with significant roles at prominent institutions in the USA, including Wells Fargo (formerly Wachovia Bank), Patrick Auto Group, and T-Mobile. These experiences endowed him with invaluable insights into business dynamics and customer-centric strategies.A defining characteristic of Harry is his adeptness in driving growth and implementing innovative business strategies. His unwavering commitment to excellence and sense of responsibility have consistently set him apart. His international business acumen, coupled with a deep understanding of customer needs, distinguishes him as a leader with a unique skill set.Harry played a pivotal role in the launch of Yango in Ghana, serving as a market and launch advisor. His contributions were instrumental in establishing the brand's robust initial customer base, showcasing his proficiency in market entry and expansion.He holds a Bachelor's Degree in Business Administration and Management, with a minor in Marketing. Additionally, Harry is a member of the National Association of Professional Background Screeners (NAPBS), reflecting his dedication to upholding industry best practices and ethical standards.In 2021, Harry R. Baiden was honored with the prestigious 40 under 40 award in the telecom and mobile development category, recognizing his exceptional contributions to the industry and his relentless pursuit of innovation."
        },
        {
            memberName: "Fredrick Allotey",
            memberRole: 'Chief Technology Officer',
            memberImage: member5,
            details: "Frederick is a dynamic leader with extensive experience in leading technical teams, optimizing operations, and driving digital transformation initiatives. With a proven track record spanning across multiple industries, including fintech, banking, and software development, he brings a wealth of knowledge to overseeing technology operations and strategic initiatives.Prior to joining Agregar, Frederick served as a team lead at Bsystems Ghana where he played a critical role in the design, development, and deployment of innovative software solutions that accelerated business growth and improved operational efficiency. His leadership there helped solidify Bsystems Ghana's position as a leading technology solutions provider.With additional hands-on experience working with SGSSB (now Société Générale Ghana) and Andela, Frederick has honed his skills in software engineering, project management, and team leadership. This diverse background enables him to drive the seamless integration of technology and operations at Agregar, aligning business objectives with cutting-edge solutions.Frederick holds a degree in Computer Science from the Kwame Nkrumah University of Science and Technology and a Master in Project Management from the University of Ghana, Legon."
        },
        {
            memberName: "Thelma Nunoo",
            memberRole: 'Head,Commercial',
            memberImage: member6,
            details: "Thelma brings a dynamic blend of strategic thinking and hands-on experience to our business development team. With a passion for driving growth and forging meaningful partnerships, Thelma has a proven track record of expanding markets and enhancing revenue streams. She thrives on identifying new opportunities, fostering client relationships, and steering projects from concept to completion.Prior to joining Agregar, Thelma served as a Business Development Manager with Dun and Bradstreet Credit Bureau, where she rose through the ranks from a Research and Advisory Executive.With over 8 years of excellence in various roles spanning across business development, strategic planning, client management and research and advisory. Thelma is adept at understanding market trends, leveraging data-driven insights, and delivering tailored solutions that meet client needs. Thelma’s collaborative approach ensures that every partnership is built on trust and delivers mutual value.She is a product of the University of Ghana, with a Bachelors in Economics and a Masters in International and Managerial Economics."
        },
        {
            memberName: "Elizabeth kwakyewaa",
            memberRole: 'Head, People & Culture',
            memberImage: member7,
            details: "As the Chief People Officer at Agregar, Elizabeth assumes a strategic leadership role in shaping the organization’s workforce and culture. Her responsibilities extend to overseeing Agregar’s daily operations, with a focus on growing Agregar ground verifier network.Before her current role, Elizabeth served as a Business Development Officer at Agregar. Her prior experience includes a role as a Training Coordinator at the Kofi Annan International Peacekeeping Training Center, where she developed training plans for security personnel and civilians. Earlier in her career, she was the Administrative Manager for the Lady Pharmacist Association of Ghana.Elizabeth graduated with Honors from the I.I. Mechnikov Odessa National University, holding a Bachelor’s degree in International Relations and a Diploma in the Russian Language."
        },
        {
            memberName: "Miezah Blay Erzuah",
            memberRole: 'Head, Verification & Customer Onboarding',
            memberImage: intersect,
            details: "Miezah is a dynamic professional with extensive experience in compliance and customer-centric operations with 8 years of proven success in business operations. He brings a wealth of expertise to the role as Head of Verifications and Customer Onboarding.Miezah is responsible for overseeing the end-to-end verifications and customer onboarding processes to ensure compliance with regulatory standards and industry best practices,while developing and implementing strategies to streamline onboarding procedures and enhance the overall customer experience.Miezah has held various roles, where he has demonstrated his ability to drive operational excellence and achieve strategic objectives. He holds a degree from the Kwame Nkrumah University of Science and Technology."
        },
        {
            memberName: "Wendell Neequaye",
            memberRole: 'Business Development Manager',
            memberImage: member9,
            details: "Wendell assumes the pivotal role of driving business growth for Agregar’s enterprise solutions. Prior to joining Agregar, he distinguished himself as a Business Development Executive at Identity Management Consult, a prominent business development consultancy firm.Throughout his career, Wendell has demonstrated versatility by holding various roles, including Sales Executive, Client Service Administrator, and Administrative Executive.Before his tenure at Identity Management Consult, he contributed his expertise as a Marketing Executive at E-Tranzact Ghana.Wendell’s hallmark is his exceptional ability to discern client needs and provide tailored solutions, all while cultivating enduring and prosperous client relationships. Wendell’s academic foundation is anchored by a Bachelor’s degree in Political Science & Geography from the esteemed University of Ghana, further enhancing his professional stature."
        },
        {
            memberName: "Ebuka Chizota",
            memberRole: 'Lead, Software Engineer',
            memberImage: member10,
            details: "With over 7 years of experience in both software engineering and DevOps, Ebuka is an accomplished technology leader who specializes in building scalable enterprise solutions and managing secure, high-performance infrastructure. He has successfully delivered complex projects across diverse industries, streamlining operations and driving innovation through end-to-end development and deployment processes.As a Lead Software Engineer, Ebuka is skilled in system architecture, full-stack development, and creating robust backend services for mission-critical platforms. In his role as DevOps Lead, he ensures seamless integration and continuous delivery (CI/CD), automating workflows and optimising cloud-based infrastructure to meet the evolving needs of modern enterprises."
        },
        {
            memberName: "Micheal Amoo",
            memberRole: 'Lead, DevOps',
            memberImage: member15,
            details: "Esther is a results-oriented and personable professional with a demonstrated ability to cultivate positive relationships among team members, clients, and stakeholders. She is responsible for overseeing verification Services, while also spearheading process improvement initiatives. Her academic background includes a degree in Accounting from the University of Professional Studies, Accra, and she takes pride in her participation in the prestigious Standard Chartered Women in Tech program in 2022.Esther’s commitment to empowering women in IT is evident through her volunteer work with ITwomanafrica, where she contributed to equipping women with valuable IT skills.Moreover, she has acquired valuable administrative expertise through her previous roles at Greater Works Technology and Molders Group Ltd. Her diverse skill set and experience position her as a valuable asset in her role as Head of Verification and Customer Onboarding."
        },
        {
            memberName: "Yaw Owusu",
            memberRole: 'Product Owner & Data Partners',
            memberImage: member11,
            details: "Yaw Owusu serves as Agregars Product Owner and Data Partnerships lead, sitting at the intersection of product management and data strategy, Yaw brings a deep expertise in developing data-driven solutions that drive business growth. As the Product Owner and Data Partnerships Lead, Yaw is responsible for shaping the product vision, collaborating with cross-functional teams, and establishing strategic data partnerships that enhance our offerings. Yaw excels in aligning product development with market demands, leveraging insights from analytics, and fostering partnerships that unlock new data streams. Passionate about innovation, he has a track record of delivering impactful products that meet customer needs while scaling for the future. Prior to this role, Yaw served as Lead verifier and as a Verification Specialist with the Driver and Vehicle Licensing Authority ( DVLA )."
        }, {
            memberName: "Victoria Opoku",
            memberRole: 'Lead, Accounts & Customer Onboarding',
            memberImage: member12,
            details: "Victoria brings a wealth of knowledge to her role as lead for customer onboarding and accounts, overseeing the end-to-end customer onboarding process to ensure a positive experience for new and existing clients, while managing client accounts and providing ongoing support to address any questions or concerns.Victoria is responsible for developing and implementing strategies to streamline onboarding procedures and enhance the overall client and product experience.She holds a bachelor’s degree in Information Technology Management from the University of Professional Studies."
        },
        {
            memberName: "Esther Aborgah",
            memberRole: 'Lead,Verification',
            memberImage: member13,
            details: "Esther is a results-oriented and personable professional with a demonstrated ability to cultivate positive relationships among team members, clients, and stakeholders. She is responsible for overseeing verification Services, while also spearheading process improvement initiatives. Her academic background includes a degree in Accounting from the University of Professional Studies, Accra, and she takes pride in her participation in the prestigious Standard Chartered Women in Tech program in 2022.Esther’s commitment to empowering women in IT is evident through her volunteer work with ITwomanafrica, where she contributed to equipping women with valuable IT skills.Moreover, she has acquired valuable administrative expertise through her previous roles at Greater Works Technology and Molders Group Ltd. Her diverse skill set and experience position her as a valuable asset in her role as Head of Verification and Customer Onboarding."
        },


    ]
    return (
        <div className=' outfit  bg-background'>
            <ScrollToTopButton />
            <Header />
            <MobileHeader />
            <div>
                <Image src={aboutUsImage} alt='' />

                <div className=' py-6 lg:py-28  lg:px-44 px-2 space-y-4 w-[100%] lg:w-[73%]'>
                    <h1 className=' font-bold text-2xl lg:text-4xl  text-secondary'>About Agregar</h1>
                    <p className=' text-graytext1'>Agregar Technologies is a premier provider of Regulatory Technology Solutions, specializing in delivering cutting-edge solutions aimed at reducing risks linked to customer, employee, business and vendor onboarding. With an extensive grasp of regulatory requirements and a dedication to technological progress, Agregar enables organizations to optimize their onboarding procedures while adhering to industry regulations seamlessly.</p>
                </div>
                <div className=' grid grid-cols-10 lg:px-44 px-2 gap-5 lg:gap-24'>
                    <div className=' col-span-10 lg:col-span-5'>
                        <div className=' space-y-5'>
                            <h1 className=' font-bold text-primary'>Trusted Corporate Consulting</h1>
                            <h1 className=' font-bold text- lg:text-4xl text-secondary'>At Agregar</h1>
                            <p className=' text-graytext1'>In today's business environment, we understand that success depends not only on your existing network but also on those who are eager to connect with you. It's about cultivating meaningful relationships, establishing trust, and leveraging technology to modernize conventional methods into effective, compliance-focused solutions.</p>
                        </div>
                        <div className=' mt-8 space-y-5'>
                            <div className=' flex space-x-5'>
                                <div>
                                    <Image height={100} src={about_check} alt='no image' />
                                </div>
                                <div className=' space-y-2'>
                                    <h1 className=' font-bold text-xl text-secondary'>Our Mission</h1>
                                    <p className=' text-graytext1'>Our goal is to become the foremost provider of KYC, KYE, KYV, KYB and AML solutions in Africa and beyond, recognized for our exceptional service, top-notch quality, and prompt delivery.</p>
                                </div>
                            </div>
                            <div className=' flex space-x-5'>
                                <div>
                                    <Image height={100} src={about_check} alt='no image' />
                                </div>
                                <div className=' space-y-2'>
                                    <h1 className=' font-bold text-xl text-secondary'>Our Vision</h1>
                                    <p className=' text-graytext1'>We aspire to be the largest and most dependable Regtech solutions provider in Africa and beyond. This will be accomplished by creating platforms that enable instant and cost-effective verification processes, along with efficient search tools.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' col-span-10 lg:col-span-5'>
                        <Image
                            height={700}
                            width={800}
                            // layout="fill" // Fill the div
                            objectFit="cover"
                            quality={100} src={image_about} alt='no image' />
                    </div>

                </div>
                <div className=' grid grid-cols-10 lg:px-44 px-2 gap-5 lg:gap-24 mt-14'>
                    <div className=' lg:col-span-5 col-span-10'>
                        <Image src={CTImage} alt='no image' />
                    </div>
                    <div className=' lg:col-span-5 col-span-10'>
                        <div>
                            <div>
                                <h1 className=' font-bold text-2xl lg:text-4xl text-secondary'>Why Choose Us</h1>
                                <div className=' grid  grid-cols-2 mt-5 gap-5'>
                                    <div>
                                        <Image src={ideaImage} alt='' height={50} width={50} />
                                        <div className='border border-primary my-3'>

                                        </div>
                                        <p className=' text-graytext1'>Lead the industry in technological innovation for onboarding procedures.</p>
                                    </div>
                                    <div>
                                        <Image src={worldwide1} alt='' height={50} width={50} />
                                        <div className='border border-primary my-3'>

                                        </div>
                                        <p className=' text-graytext1'>Expand our global presence, offering solutions in over 150 countries.</p>
                                    </div>
                                    <div>
                                        <Image src={speed1} alt='' height={50} width={50} />
                                        <div className='border border-primary my-3'>

                                        </div>
                                        <p className=' text-graytext1'>Set swift verification turnaround times for our clientele.</p>
                                    </div>
                                    <div>
                                        <Image src={Africa1} alt='' height={50} width={50} />
                                        <div className='border border-primary my-3'>

                                        </div>
                                        <p className=' text-graytext1'>Enhance our position as the foremost Regtech solutions provider in Africa.</p>
                                    </div>
                                    <div>
                                        <Image src={Trust1} alt='' height={50} width={50} />
                                        <div className='border border-primary my-3'>

                                        </div>
                                        <p className=' text-graytext1'>Instill trust and compliance through advanced screening technologies.</p>
                                    </div>
                                    <div>
                                        <Image src={Adapt1} alt='' height={50} width={50} />
                                        <div className='border border-primary my-3'>

                                        </div>
                                        <p className=' text-graytext1'>Adapt our services continuously to align with the changing regulatory environment.</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <div className='lg:px-44 px-2 gap-5 lg:gap-24 mt-9 lg:mt-16'>
                    <div className=' px-2 lg:px-16'>
                        <div className=' grid grid-cols-10 gap-10'>
                            <div className=' col-span-10 lg:col-span-4'>
                                <div>
                                    <Image height={380} width={380} src={CEO} alt='' />
                                    <div className=' mt-9 space-y-3'>
                                        <h1 className=' font-bold text-2xl lg:text-3xl text-graytext1'>Harry Baiden</h1>
                                        <h1 className=' text-xl text-graytext1'>CEO</h1>
                                        <div className=' flex items-center space-x-4'>
                                            <div className=' flex items-center space-x-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-graytext1">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                                </svg>
                                                <p className=' text-sm text-graytext1'>hbaiden@agregartech.com</p>
                                            </div>
                                            <div className=' flex items-center space-x-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-graytext1">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                                </svg>
                                                <p className=' text-sm text-graytext1'>+233 20 600 1050</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=' flex items-center space-x-3 mt-3'>
                                        <Image alt='no image' src={socila1} width={30} height={30} />
                                        <Image alt='no image' src={social2} width={30} height={30} />
                                        <Image alt='no image' src={social3} width={30} height={30} />

                                    </div>
                                </div>

                            </div>
                            <div className=' col-span-10 lg:col-span-6'>
                                <div className=' space-y-4'>
                                    <h1 className=' text-textcolor font-bold text-3xl '>CEO'S Statement</h1>
                                    <h1 className='text-graytext1 pt-4 lg:pt-8 text-base'>As the CEO of Agregar Technologies, I am deeply inspired by the remarkable journey we’ve embarked on in the field of Regulatory Technology. Our mission to redefine how businesses approach customer, employee, business and vendor onboarding has led us on an extraordinary adventure, and I’m thrilled to share some insights about our company and the industry we’re influencing.
                                        In a time where regulatory challenges are constantly evolving, we stand at the forefront of innovation, armed with a profound understanding of the regulatory landscape. Our dedication to technological progress is steadfast. We’re not merely a technology company; we are architects of trust and compliance.
                                        Our journey began in 2022, and since then, we’ve achieved significant milestones. Demonstrating our capacity to lead digital transformation in the industry, we introduced Empverify, which fully digitizes manual verification processes. However, our efforts didn’t stop there. We expanded our portfolio with groundbreaking solutions like Validar, a comprehensive risk management solution, and Geofy, a digital and physical address verification solution. These additions underscore our commitment to delivering comprehensive and state-of-the-art solutions to our clients.
                                        Looking ahead, our future is brimming with exciting possibilities. Our vision remains resolute - to become the premier and most dependable provider of Regulatory technology solutions in Africa. We will continue to push the boundaries of innovation, setting new benchmarks for the industry and assisting businesses in thriving amidst the ever-changing regulatory landscape.
                                        At Agregar Technologies, we’re not merely shaping the future; we’re constructing a future where trust and compliance are the bedrock of every successful enterprise.</h1>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className=' px-2 lg:px-16 mt-9 lg:mt-24'>
                        <div className=' grid grid-cols-10'>
                            <div className=' col-span-10 lg:col-span-3'>
                                <Image alt='' src={globalNetwork} height={170} width={170} />
                            </div>
                            <div className=' col-span-10 lg:col-span-7'>
                                <div className=' space-y-6'>
                                    <h1 className=' font-bold text-3xl text-secondary'>Agregar Global</h1>
                                    <p className=' text-graytext1'>Agregar recognizes the critical importance of informed decision-making in business, investments, partnerships and hiring. As such we have forged partnerships with private and government agencies across over 150 countries globally. With this expansive network, we offer access to a comprehensive range of data, including AML and fraud registries, international and local criminal and civil records, and credit information.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className=' grid grid-cols-10 my-8  lg:my-20'>
                        <div className=' col-span-10 lg:col-span-7 w-[80%]'>
                            <div className=' space-y-7'>
                                <h1 className=' font-bold text-4xl text-graytext1'>Our Journey So Far...</h1>
                                <p className=' text-graytext1'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                            </div>
                        </div>
                        <div className=' col-span-10 lg:col-span-3'>
                            <div className=' flex justify-end'>
                                <Image height={270} width={270} src={ladder_Vector} alt='' />
                            </div>
                        </div>

                    </div>
                    <div>
                        <Image src={stepper_board} alt='' />
                    </div>
                    <div className=' my-6 lg:my-28'>
                        <h1 className=' text-2xl lg:text-4xl text-secondary font-bold text-center'>Our Team</h1>
                        <div>
                            <div className=' my-14'>
                                <h1 className=' text-2xl lg:text-4xl text-secondary font-bold '>Board Members</h1>
                            </div>
                            <div className=' grid grid-cols-1 lg:grid-cols-4  gap-5 lg:gap-8'>
                                <TeamCards image memberRole='Board Chairman' memberName='David Hutchful' memberImage={member1} />
                                <TeamCards image memberName='Harry Baiden' memberRole='Chief Executive Officer' memberImage={member2} />
                                <TeamCards image memberName='Adu Ampofu' memberRole='Board Member' memberImage={member3} />
                                <TeamCards image memberName='Kwame Baiden' memberRole='Kwame Baiden' memberImage={member4} />

                            </div>
                        </div>
                        <div>
                            <div className=' my-6 lg:my-14  text-primary font-semibold'>
                                <h1 className=' text-2xl lg:text-4xl text-secondary font-bold '>Meet The Team</h1>
                            </div>
                            <div className=' grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-8'>
                                {Teams_Data1.map((list) => {
                                    return (
                                        <Link href={{
                                            pathname: '/team-profile',
                                            query: {
                                                memberName: list.memberName,
                                                memberRole: list.memberRole,
                                                details: list.details
                                            }
                                        }}>
                                            <TeamCards
                                                image memberName={list.memberName} memberImage={list.memberImage} memberRole={list.memberRole}
                                            />
                                        </Link>
                                    );
                                })

                                }
                                {/* <TeamCards onClick={() => {

                                }} image memberName='Harry Baiden' memberRole='Chief Executive Officer' memberImage={member2} />
                                <TeamCards image memberName='Fredrick Allotey' memberRole='Chief Technology Officer' memberImage={member5} />
                                <TeamCards image memberName='Thelma Nunoo' memberRole='Head,Commercial' memberImage={member6} />
                                <TeamCards image memberName='Elizabeth kwakyewaa' memberRole='Head, People & Culture' memberImage={member7} />
                                <TeamCards image memberName='Miezah Blay Erzuah' memberRole='Head, Verification & Customer Onboarding' memberImage={intersect} />
                                <TeamCards image memberName='Wendell Neequaye' memberRole='Business Development Manager' memberImage={member9} />
                                <TeamCards image memberName='Ebuka Chizota' memberRole='Lead, Software Engineer' memberImage={member10} />
                                <TeamCards image memberName='Yaw Owusu' memberRole='Product Owner & Data Partners' memberImage={member11} />
                                <TeamCards image memberName='Victoria Opoku' memberRole='Lead, Accounts & Customer Onboarding' memberImage={member12} />
                                <TeamCards image memberName='Esther Aborgah' memberRole='Lead,Verification' memberImage={member13} /> */}
                                {/* <TeamCards  image memberName='Micheal Amoo' memberRole='Lead,Verification' memberImage={member14} />
                                <TeamCards  image memberName='Mersack' memberRole='Lead,Verification' memberImage={member15} /> */}

                            </div>
                        </div>

                    </div>

                </div>
                <div className=' px-2 lg:px-40'>
                    <ContactSales />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default page;