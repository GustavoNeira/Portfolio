"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
const Introduccion = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60 " >
            
        <div className="z-20 grid items-center h-full    p-6 py-20 md:py-0 md:grid-cols-2">
        <Image src="/imagenv3.png" priority width="450" height="450" alt="Avatar" className="justify-self-center xl:ml-52" />

            <div className="flex flex-col justify-center max-w-lg">
                <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Hola ,Mi nombre es Gustavo.<br />
                    <TypeAnimation
                        sequence={[
                            'Desarrollador web',
                            1000,
                            'Web Developer',
                            1000,
                            'Ingeniero de Software',
                            1000,

                            'software engineer',
                            1000,
                         
                           
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-secondary"
                    />
                </h1>

                <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                    Como desarrollador front-end y back-end, me dedico a combinar diseño y funcionalidad para crear experiencias digitales profesionales.
                </p>

                <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                    <a href="/proyectos" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                        Ver proyectos
                    </a>
                    <a href="/contacto"
                        className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                        Contacta conmigo
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
      );
}
 
export default Introduccion;