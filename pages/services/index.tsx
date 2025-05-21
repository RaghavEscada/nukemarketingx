"use client";
import {
  Archive,

  Expectations,

  
} from "@/container";
import { useEffect, useRef } from "react";
import { Curve, Ready } from "@/components";
import { LampDemoServ } from "@/data/data";
import Capibilyties from "@/container/services-page/Capibilyties";



export default function Services() {
  const containerRef = useRef(null);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (containerRef.current) {
        const locomotiveScroll = new LocomotiveScroll({
        
          // Add other options as needed
        });
        // Optionally, you can destroy the instance when the component unmounts
        return () => {
          locomotiveScroll.destroy();
        };
      } else {
        console.error("Container element not found.");
      }
    })();
  }, []);


  return (
    <>
      <Curve backgroundColor={"#f1f1f1"}>
      
          <LampDemoServ />
          
      
        <div className="mb-20">

         

        <Expectations/>

    
    
        </div>
        <Archive />

        <Capibilyties/>
  
        <div className="mb-20">
          
        </div>
        <Ready />


       
      </Curve>
    </>
  );
}