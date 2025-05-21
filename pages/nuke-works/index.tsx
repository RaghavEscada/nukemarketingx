import { useEffect, useRef } from "react";
import { Curve, Ready } from "@/components";
import { Hero, Projectspresentation } from "@/container";
import { LampDemoCraft } from "@/data/data";

export default function Presentation() {

  const containerRef = useRef(null);

  useEffect(() => {
    // If you still want to manually initialize Locomotive Scroll
    // (though using LocomotiveScrollProvider is recommended)
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
       
      });
      // Optionally, you can destroy the instance when the component unmounts
      return () => {
        locomotiveScroll.destroy();
      };
    })();
  }, []);
  return (
    <>
      <div data-scroll-container ref={containerRef}>
        <Curve backgroundColor={"#f1f1f1"}>
        
          <LampDemoCraft />
          <Projectspresentation />
          <Ready />
        </Curve>
      </div>
    </>
  );
}