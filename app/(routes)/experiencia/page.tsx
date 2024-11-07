import { Avatar } from "@/components/Avatar";
import ContadorExperiencia from "@/components/ContadorExperincia";
import ContainerPage from "@/components/Container";
import LineaTiempo from "@/components/LineaTiempo";
import TransitionPage from "@/components/Transition-Page";

const PageExperiencia = () => {
    return ( 
        <>
        <TransitionPage />
        <ContainerPage>
            <Avatar/>
            <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                Toda mi{' '}
                <span className="font-bold text-secondary">
                    trayectoria profesional
                </span>
                <ContadorExperiencia/>
                <LineaTiempo/>
            </h1>

            

        </ContainerPage>
    </>
     );
}
 
export default PageExperiencia;