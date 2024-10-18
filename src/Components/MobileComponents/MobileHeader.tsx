// import React from 'react'
// import Logo from "../../assets/Agregar_Logo_Orange 1.png";
// import Image from 'next/image';

// const MobileHeader = () => {
//     return (
//         <div className='px-4 flex lg:hidden justify-between items-center py-4 bg-white border-b border-[#dddddd] sticky z-0 top-0'>
//             <div>
//                 <Image src={Logo} alt='no logo' width={150} height={150} />
//             </div>
//             <div>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9 text-primary cursor-pointer">
//                     <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
//                 </svg>

//             </div>
//         </div>
//     )
// }

// export default MobileHeader;
"use client"
import React, { useState } from 'react';
import Logo from "../../assets/Agregar_Logo_Orange 1.png";
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
    {
        name: "Solutions",
        links: [
            { text: "KYE", route: "/solutions/know-your-employee" },
            { text: "KYC", route: "/solutions/know-your-customer" },
            { text: "Vendor Onboarding", route: "/solutions/vendor-onboarding" },
            { text: "KYB", route: "/solutions/know-your-business" },
            { text: "KYI", route: "/solutions/know-your-investor" },
        ],
    },
    {
        name: "Platform",
        links: [
            { text: "Empverify", route: "/platforms/empverify" },
            { text: "Validar", route: "/platforms/validar" },
            { text: "Geofy", route: "/platforms/geofy" }
        ]
    },
    {
        name: "Industry",
        links: [
            { text: "Banking and Finance", route: "/industries/financial-services" },
            { text: "Healthcare & Pharma", route: "/industries/healthcare" }
        ]
    },
    {
        name: "Resources",
        links: [
            { text: "Blog", route: "/resources/blog" },
            { text: "More Resources", route: "/resources/resources" }
        ]
    },
    {
        name: "Company",
        links: [
            { text: "Our Solutions", route: "/our-solutions" },
            { text: "Our Platforms", route: "/our-platforms" }
        ]
    },
    { name: "Verifiers", route: "/verifiers" },
    { name: "About Us", route: "/about-us" },
];

const MobileHeader = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); // State for toggling nav visibility
    const [openDropdown, setOpenDropdown] = useState<string | null>(null); // State for toggling dropdown visibility

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen); // Toggle the navigation
    };

    const handleDropdownToggle = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name); // Toggle specific dropdown
    };

    return (
        <div className='relative'>
            {/* Header */}
            <div 
            // className='px-4 flex lg:hidden justify-between items-center py-3 bg-white border-b border-[#dddddd] sticky z-50 bottom-0'
            className='px-4 flex lg:hidden justify-between items-center py-3 bg-white border-b border-[#dddddd] sticky z-50 top-0'
            >
                <div>
                    <Image src={Logo} alt='no logo' width={120} height={120} />
                </div>
                <div onClick={handleNavToggle} className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9 text-primary">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            {/* Sliding Nav */}
            <div className={` w-[50%] fixed top-0 right-0 h-full bg-white shadow-lg z-20 transform ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className='p-4'>
                    <div className='text-right'>
                        {/* Close Button */}
                        <button onClick={handleNavToggle} className='text-xl font-bold'>&times;</button>
                    </div>
                    {/* Render Nav Items */}
                    <ul className='mt-8'>
                        {navItems.map((item, index) => (
                            <li key={index} className='py-2'>
                                {/* If nav item has links, make it a dropdown */}
                                {item.links ? (
                                    <>
                                        <div onClick={() => handleDropdownToggle(item.name)} className=' flex items-center space-x-3'>
                                            <button

                                                className='w-full text-left block text-lg text-gray-800 hover:text-primary font-semibold'
                                            >
                                                {item.name}
                                            </button>
                                            <svg
                                                className="ml-1 h-5 w-5 text-primary cursor-pointer"
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
                                        </div>

                                        {/* Dropdown links */}
                                        {openDropdown === item.name && (
                                            <div className='animate__animated animate__slideInDown '>
                                                <ul className='mt-2 pl-4'>
                                                    {item.links.map((link, idx) => (
                                                        <li key={idx} className='py-1 border-b border-t-textcolor'>
                                                            <Link href={link.route} className='block text-textcolor hover:text-primary'>
                                                                {link.text}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link href={item.route!} className='block text-lg text-gray-800 font-semibold hover:text-primary'>
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MobileHeader;
