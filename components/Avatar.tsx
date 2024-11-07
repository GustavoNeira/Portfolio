
"use client"

import Image from "next/image";
import { MotionTransition } from "./transition-components";



export function Avatar() {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute md:right-10 md:w-64 lg:w-80 z-10">
        <Image src="/avatar-full.png" width="380" height="380" className="pr-16" alt="Particles" />
    </MotionTransition>
    
    

    
    )
}