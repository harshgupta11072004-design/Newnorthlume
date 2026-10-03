import AboutContent from "@/app/components/commmencomponent/Aboutcontent";
import HeroVideoSectioncommen from "@/app/components/commmencomponent/HeroVideoSectioncommen";
import HeroSection from "@/app/components/Homecomponent/HeroSection";
import React from "react";

export default function page(){
    return(
        <>
            <HeroVideoSectioncommen props={{title:"Smarter gold analysis for",subtitle:"faster, confident decisions",description:"Harness data-driven insights to analyze XAUUSD market trends, demand sentiment, and optimize your trading strategy all in one powerful platform."}} />
            <AboutContent />
        </>
    )
}