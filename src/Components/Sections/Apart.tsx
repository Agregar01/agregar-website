import React from 'react';
import image1 from "../../assets/Frame 514.png";
import image2 from "../../assets/Frame 514 (1).png";
import image3 from "../../assets/Frame 514 (2).png";
import image4 from "../../assets/Frame 514 (3).png";
import ApartCards from '../ApartCards';
import { useInView } from "react-intersection-observer";

const Apart = () => {
    const { ref, inView } = useInView({
        threshold: 0.4, // Trigger when 20% of the section is in view
        triggerOnce: true, // Trigger animation only once
    });


    const ApartArray = [
        {
            image: image1,
            title: "AI-Powered Precision",
            desscription: "Leverage advanced AI technology to ensure accurate, real-time verification and fraud detection, helping you make informed decisions with confidence.",
        }, {

            image: image2,
            title: "Global Compliance",
            desscription: "Stay compliant with local and  international standards, such as FCRA and GDPR, safeguarding your business from regulatory risks and penalties.",
        }, {
            image: image3,
            title: "Real-Time Insights",
            desscription: "Get instant verification results and continuous monitoring, enabling proactive fraud prevention and seamless operational efficiency.",
        },
        {
            image: image4,
            title: "Tailored Solutions",
            desscription: "Our customizable solutions cater to a wide range of industries, ensuring that your unique business needs are met with precision and flexibility.",
        }
    ]
    return (
        <div className=' bg-[#F1F6FB] px-2 lg:px-52  py-8 lg:py-28'>
            <h1
                ref={ref}
                className={`font-bold text-secondary text-2xl lg:text-3xl py-10 text-center ${inView ? 'animate__animated animate__slideInDown' : ''}`}
            >What Sets Agregar Apart?</h1>
            <div
                ref={ref}
                className={`grid grid-cols-1 lg:grid-cols-4 gap-8 ${inView ? 'animate__animated animate__slideInLeft' : ''}`}>
                {
                    ApartArray.map((list: any) => {
                        return (
                            <ApartCards title={list.title} image={list.image} desscription={list.desscription} />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Apart;