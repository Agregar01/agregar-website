"use client"
import Banner from "@/Components/Banner";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import MobileHeader from "@/Components/MobileComponents/MobileHeader";
import ScrollToTopButton from "@/Components/ScrollToTopButton";
import Apart from "@/Components/Sections/Apart";
import ApiIntegration from "@/Components/Sections/ApiIntegration";
import Clients from "@/Components/Sections/Clients";
import CompanyCounts from "@/Components/Sections/CompanyCounts";
import ContactSales from "@/Components/Sections/ContactSales";
import Counts from "@/Components/Sections/Counts";
import ExpertInSigt from "@/Components/Sections/ExpertInSigt";
import Industry from "@/Components/Sections/Industry";
import Platforms from "@/Components/Sections/Platforms";
import Solutions from "@/Components/Sections/Solutions";
import Testtimonials from "@/Components/Sections/Testtimonials";
import VerifyNetwork from "@/Components/Sections/VerifyNetwork";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {

  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is in view
    triggerOnce: true, // Trigger animation only once
  });

  return (
    <>
      <ScrollToTopButton />
      <div className=" bg-background outfit">
        <MobileHeader />
        <Header />
        <Banner />
        <Solutions />
        <Industry />
        <Apart />
        <div className=" bg-background px-2 lg:px-28">
          <div ref={ref} className={`space-y-4 ${inView ? 'animate__animated animate__slideInDown' : ''}`}>
            <h1 className=" font-bold text-base text-primary outfit">One platform, multiple solutions</h1>
            <h1 className=" font-bold text-2xl lg:text-3xl text-secondary outfit">Empowering Organizations with innovative RegTech Platforms</h1>
          </div>
        </div>
        <Platforms />
        <VerifyNetwork />
        <Counts />
        <Testtimonials />
        <div className=" bg-background px-2 lg:px-64">
          <Clients />
        </div>



        <CompanyCounts />
        <ApiIntegration />
        <ExpertInSigt />
        <div className=" bg-background px-2 lg:px-52">
          <ContactSales />
        </div>
        <Footer />

      </div>
    </>
  );
}
