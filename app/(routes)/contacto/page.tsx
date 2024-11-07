import { Avatar } from "@/components/Avatar";
import { AvatarContacto } from "@/components/Avatar-contacto";
import Contacto from "@/components/Contacto";

import ContainerContactoPage from "@/components/Container-contacto";
import TransitionPage from "@/components/Transition-Page";

const PageContacto = () => {
    return (  
        <>
        <TransitionPage />
        <ContainerContactoPage>
            <AvatarContacto/>
            <Contacto/>
            
            

          

        </ContainerContactoPage>
    </>
    );
}
 
export default PageContacto;