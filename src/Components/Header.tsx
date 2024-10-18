"use client";
import React, { useState } from 'react';
import Logo from "../assets/Agregar_Logo_Orange 1.png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header: React.FC = () => {
    const router = useRouter();
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    // const handleDropdown = (index: number) => {
    //     setOpenDropdown(openDropdown === index ? null : index);
    // };

    // const handleDropdown = (index: number) => {
    //     setOpenDropdown(openDropdown === index ? null : index);
    // };

    // const handleMouseLeave = () => {
    //     setOpenDropdown(null);  // Close dropdown when mouse leaves
    // };

    const handleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);  // Close dropdown when mouse leaves
    };

    const navItems = [
        {
            name: 'Solutions',
            links: [
                { text: 'KYE', route: '/solutions/know-your-employee' },
                { text: 'KYC', route: '/solutions/know-your-customer' },
                { text: 'Vendor Onboarding', route: '/solutions/vendor-onboarding' },
                { text: 'KYB', route: '/solutions/know-your-business' },
                { text: 'KYI', route: '/solutions/know-your-investor' }
            ]
        },
        { name: 'Platform', links: [{ text: 'Empverify', route: 'https://www.empverify.com/' }, { text: 'Validar', route: '/platforms/validar' }, { text: 'Geofy', route: '/platforms/geofy' }] },
        {
            name: 'Industry', links: [
                { text: 'Banking and Finance', route: '/industries/financial-services' },
                { text: 'Healthcare & Pharma', route: '/industries/healthcare' },
                { text: 'Education', route: '/industries/education' },
                { text: 'Manufacturing', route: '/industries/manufacturing' },
                { text: 'Travel & Hospitality', route: '/industries/travel&hospitality' },
                { text: 'E-commerce & Retail', route: '/industries/ecommerce&retail' },
                { text: 'Gaming', route: '/industries/gaming' },
                { text: 'Insurance', route: '/industries/insurance' },
                { text: 'Telecommunication', route: '/industries/telecommunications' },
                { text: 'FMCD & FMCG', route: '/industries/fmcg&fmcd' },
                { text: 'Staffing & Recruitment', route: '/industries/staffing&recruitment' }
            ]
        },
      
        { name: 'Company', links: [{ text: 'Our Solutions', route: '/our-solutions' }, { text: 'Our Platforms', route: '/our-platforms' }, { text: 'Industries', route: '/industries' }] },
        { name: 'Resources', route: "/resources" },
        { name: 'Verifiers', route: "/verifiers" },
        { name: 'About Us', route: "/about-us" },
    ];

    

    return (
        <div className='outfit hidden lg:flex items-center justify-between px-3 lg:px-24 bg-white py-4 sticky z-50 top-0 shadow-sm'>
            <div className='cursor-pointer' onClick={() => router.push("/")}>
                <Image src={Logo} alt='no logo' width={150} height={150} />
            </div>

            <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                    {navItems.map((item, index) => (
                        <div key={item.name} className="relative" onMouseLeave={handleMouseLeave} >
                            {item.links ? (
                                <>
                                    <button
                                     onMouseOver={() => handleDropdown(index)}
                                    //    onMouseLeave={handleMouseLeave} 
                                    //    onMouseOver={handleDropdown}
                                    //    onMouseOver={() => handleDropdown(index)}
                                        // onClick={() => handleDropdown(index)}
                                        className="text-secondary hover:text-primary px-1 py-2 rounded-md font-bold flex items-center text-base"
                                    >
                                        {item.name}
                                        <svg
                                            className="ml-1 h-3 w-3 text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    {/* Dropdown Menu */}
                                    {openDropdown === index && (
                                        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md  z-10 border border-[#dddddd] animate__animated animate__slideInDown">
                                            {item.links.map((link, i) => (
                                                <Link href={link.route} key={i} className="block px-3 py-2 text-secondary hover:bg-gray-100 hover:text-primary">
                                                    {link.text}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link href={item.route} className=" text-secondary hover:text-primary px-3 py-2 rounded-md font-bold flex items-center text-base">
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className='space-x-6'>
                <button onClick={() => {
                      window.location.href = "mailto:sales@agregartech.com";
                }} className='border-2 border-secondary font-semibold text-[14px] px-4 rounded-[5px] py-1 outfit hover:border-primary hover:text-primary'>Book a Demo</button>
                <button onClick={() => {
                    window.open('https://app.agregartech.com/', '_blank');
                }} className='bg-primary text-white font-semibold text-[14px] px-10 py-1 rounded-[5px] border-2 border-primary outfit hover:bg-secondary hover:border-secondary'>Log In</button>
            </div>
        </div>
    );
};

export default Header;









// "use client"
// import React, { useState } from 'react';
// import Logo from "../assets/Agregar_Logo_Orange 1.png";
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// const Header: React.FC = () => {
//     const router = useRouter();
//     const [openDropdown, setOpenDropdown] = useState(null);

//     const handleDropdown = (index: any) => {
//         setOpenDropdown(openDropdown === index ? null : index);
//     };

//     const navItems = [
//         {
//             name: 'Solutions',
//             links: [
//                 { text: 'KYE', route: '/solutions/know-your-employee' },
//                 { text: 'KYC', route: '/solutions/know-your-customer' },
//                 { text: 'Vendor Onboarding', route: '/solutions/vendor-onboarding' },
//                 { text: 'KYB', route: '/solutions/know-your-business' },
//                 { text: 'KYI', route: '/solutions/know-your-investor' }
//             ]
//         },
//         { name: 'Platform', links: [{ text: 'Empverify', route: '/platform/link1' }, { text: 'Validar', route: '/platform/link2' }, { text: 'Geofy', route: '/platform/link3' }] },
//         { name: 'Industry', links: [{ text: 'Banking and Finance', route: '/industry/link1' }, { text: 'Healthcare & Phama', route: '/industry/link2' }, { text: 'Education', route: '/industry/link3' }, { text: 'Manufacturing', route: '/industry/link3' }, { text: 'Education', route: 'Travel & Hospitality' }, { text: 'E-commerce & Retail', route: '/industry/link3' }, { text: 'Gaming', route: '/industry/link3' }, { text: 'Insurance', route: '/industry/link3' }, { text: 'Telecommunication', route: '/industry/link3' }, { text: 'FMCD & FMCD', route: '/industry/link3' }, { text: 'Staffing & Recruitment', route: '/industry/link3' }] },
//         { name: 'Resources', links: [{ text: 'Link 1', route: '/resources/link1' }, { text: 'Link 2', route: '/resources/link2' }, { text: 'Link 3', route: '/resources/link3' }] },
//         { name: 'Company', links: [{ text: 'Link 1', route: '/company/link1' }, { text: 'Link 2', route: '/company/link2' }, { text: 'Link 3', route: '/company/link3' }] },
//         { name: 'Verifiers', route: "" },
//         { name: 'Contact Us', route: "/contact-us" },
//     ];
//     return (
//         <div className=' flex items-center justify-between px-3 lg:px-24 bg-white py-4 sticky z-50  top-0 border-b border-[#dddddd]'>
//             <div className=' cursor-pointer' onClick={() => {
//                 router.push("/");
//             }}>
//                 <Image src={Logo} alt='no logo' width={150} height={150} />
//             </div>

//             <div className="flex justify-between items-center ">
//                 <div className="flex space-x-2">
//                     {navItems.map((item, index) => (
//                         <div key={item.name} className="relative">
//                             <>
//                             {  item.links ?
//                                 <button

//                                     onClick={() => handleDropdown(index)}
//                                     className=" text-secondary hover:text-primary px-1 py-2 rounded-md  font-bold flex items-center text-base"
//                                 >
//                                     {item.name}
//                                     <svg
//                                         className="ml-1 h-3 w-3 text-primary"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         viewBox="0 0 20 20"
//                                         fill="currentColor"
//                                     >
//                                         <path
//                                             fillRule="evenodd"
//                                             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                                             clipRule="evenodd"
//                                         />
//                                     </svg>
//                                 </button>
//                                 {/* Dropdown Menu */}
//                                 {openDropdown === index && (
//                                     <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
//                                         {item?.links?.map((link, i) => (
//                                             <Link href={link.route} key={i} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
//                                                 {link.text}
//                                             </Link>
//                                         ))}
//                                     </div>
//                                 )}
//                             :   <Link href={item.route} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-bold flex items-center text-base">
//                             {item.name}
//                         </Link> }
//                             </>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className=' space-x-6'>
//                 <button className=' border-2 border-secondary font-semibold text-[14px] px-4 rounded-[5px] py-1 outfit'>Book a Demo</button>
//                 <button className=' bg-primary text-white font-semibold  text-[14px] px-10 py-1 rounded-[5px] border-2 border-primary outfit'>Log In</button>
//             </div>
//         </div>
//     )
// }

// export default Header;



