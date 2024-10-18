import React from 'react';
import logo1 from "../../assets/logos/logo1.png"
import logo2 from "../../assets/logos/logo2.png";
import logo3 from "../../assets/logos/logo3.png";
import logo4 from "../../assets/logos/logo4.png";
import logo5 from "../../assets/logos/logo5.png";
import logo6 from "../../assets/logos/logo6.png";
import logo7 from "../../assets/logos/logo7.png"
import logo8 from "../../assets/logos/logo8.png";
import logo9 from "../../assets/logos/logo9.png";
import logo10 from "../../assets/logos/logo10.png";
import logo11 from "../../assets/logos/logo11.png";
import logo12 from "../../assets/logos/logo12.png";
import logo13 from "../../assets/logos/logo13.png";
import logo14 from "../../assets/logos/logo14.png";
import logo15 from "../../assets/logos/logo15.png";
import logo16 from "../../assets/logos/logo16.png";
import logo17 from "../../assets/logos/logo17.png";
import logo18 from "../../assets/logos/logo18.png";
import logo19 from "../../assets/logos/logo19.png";
import logo20 from "../../assets/logos/logo20.png";
import logo21 from "../../assets/logos/logo21.png";
import logo22 from "../../assets/logos/logo22.png";
import logo23 from "../../assets/logos/logo23.png";
import logo24 from "../../assets/logos/logo24.png";
import logo25 from "../../assets/logos/logo25.png";
import logo26 from "../../assets/logos/logo26.png";
import Image from 'next/image';
import { useInView } from "react-intersection-observer";


const Clients = () => {
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the section is in view
        triggerOnce: true, // Trigger animation only once
    });

    return (
        <div ref={ref} className={`grid lg:grid-cols-5 grid-cols-2  mt-64 ${inView ? 'animate__animated animate__flipInY' : ''}`}>
            <Image alt='' src={logo1} height={150} />
            <Image alt='' src={logo2} height={150} />
            <Image alt='' src={logo3} height={150} />
            <Image alt='' src={logo4} height={150} />
            <Image alt='' src={logo5} height={150} />
            <Image alt='' src={logo6} height={150} />
            <Image alt='' src={logo7} height={150} />
            <Image alt='' src={logo8} height={150} />
            <Image alt='' src={logo9} height={150} />
            <Image alt='' src={logo10} height={150} />
            <Image alt='' src={logo11} height={150} />
            <Image alt='' src={logo12} height={150} />
            <Image alt='' src={logo13} height={150} />
            <Image alt='' src={logo14} height={150} />
            <Image alt='' src={logo15} height={150} />
            <Image alt='' src={logo16} height={150} />
            <Image alt='' src={logo17} height={150} />
            <Image alt='' src={logo18} height={150} />
            <Image alt='' src={logo19} height={150} />
            <Image alt='' src={logo20} height={150} />
            <Image alt='' src={logo21} height={150} />
            <Image alt='' src={logo22} height={150} />
            {/* <Image alt='' src={logo23} height={150} />
            <Image alt='' src={logo24} height={150} />
            <Image alt='' src={logo25} height={150} /> */}
            <Image alt='' src={logo26} height={150} />





        </div>
    )
}

export default Clients;