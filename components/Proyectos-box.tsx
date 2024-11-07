import Image from "next/image";
import Link from "next/link";

interface ProyectosBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
        description:string
        stack:string
    }
}

const ProyectosBox = (props: ProyectosBoxProps) => {
    const { data } = props
    const { id, title, stack,image, description,urlDemo, urlGithub } = data

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl transform transition-all duration-150 inline-block  hover:shadow-sm hover:scale-105"
        >
            <h3 className="mb-4 text-xl">{title}</h3>
            <Image
                src={image}
                alt="Image"
                width={200} height={200} className="w-full md:w-[200px] rounded-2xl h-auto"
            />
            <p className="">{description}</p>
            <div className="flex gap-5 mt-5">
            <div>


        <div className="font-semibold text-l text-white">Tech Stack:</div>
        <div>
            <span className="transform transition-all duration-150 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm  hover:scale-105">{stack}</span>
          
        </div>
      </div>
    </div>

            <div className="flex gap-5 mt-5">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                >
                    Github
                </Link>

                <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
                >
                    Live demo
                </Link>
                
            </div>
            
        </div>
        
    );
}

export default ProyectosBox