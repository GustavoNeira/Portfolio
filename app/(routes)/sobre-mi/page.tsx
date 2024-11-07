"use client"



import { Avatar } from "@/components/Avatar";
import ContainerPage from "@/components/Container";
import LineaTiempoExp from "@/components/LineaTiempo-exp";
import Skills from "@/components/skills";
import SobreMi from "@/components/SobreMi";

import TransitionPage from "@/components/Transition-Page";

const PageSobreMi = () => {
    return ( 
        <>
        <TransitionPage />
        <ContainerPage>
            <Avatar/>
           
            <SobreMi/>

            
            <Skills/>
            
            
            <LineaTiempoExp/>
            

          

        </ContainerPage>
    </>
     );
}
 
export default PageSobreMi;