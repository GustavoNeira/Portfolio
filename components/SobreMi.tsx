"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
const SobreMi = () => {
    return (
        
            
        <div className="z-20 grid items-center text-justify h-full  p-6 py-20 md:py-0 ">
           
            <div className="flex flex-col justify-center ">
                <h1 className="mb-5 text-2xl leading-tight text-start  md:text-4xl md:mb-10">Hola mi nombre es <span  className="font-bold text-secondary">Gustavo Neira</span> <br />
                
                </h1>

                <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                Soy un ingeniero en informática autodidacta comprometido con el crecimiento profesional. Poseo una sólida formación en desarrollo, lo que me permite contribuir de manera efectiva tanto en proyectos individuales como en equipos colaborativos. Me enfoco en crear soluciones que sean funcionales y accesibles, siempre buscando mejorar la experiencia del usuario.
                Valoro el trabajo en equipo y la comunicación abierta, lo que me permite colaborar eficazmente con otros y fomentar un ambiente de aprendizaje continuo. Estoy motivado para enfrentar desafíos y encontrar soluciones innovadoras a problemas complejos.
                Busco un entorno que potencie mi desarrollo profesional y que me ofrezca la oportunidad de colaborar en proyectos significativos que tengan un impacto positivo.
                </p>

             
            </div>
           
        </div>
    
      );
}
 
export default SobreMi;