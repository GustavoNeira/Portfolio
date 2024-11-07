
"use client"

import Image from "next/image";
import { MotionTransition } from "./transition-components";



export function AvatarContacto() {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute ">
            <Image src="/circles.png" width="300" height="300" className="w-full h-full " alt="Particles " />
        </MotionTransition>
    )
}