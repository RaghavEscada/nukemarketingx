"use client";
import { Curve,Ready } from "@/components";
import { About, Clients, Hero, Projects, VideoHome, X } from "@/container";
import { useEffect, useRef } from "react";
export default function Home() {

	

	

	return (
		<>
			<Curve backgroundColor={"#f1f1f1"}>

				
				<Hero />
			
				<About />
			
		
				<X />
				<Projects />
				<Clients />
				<Ready />
			</Curve>
		</>
	);
}
