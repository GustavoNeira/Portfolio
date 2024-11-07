import AvatarProyectos from "@/components/Avatar-proyectos";
import ContainerPage from "@/components/Container";
import ProyectosBox from "@/components/Proyectos-box";
import TransitionPage from "@/components/Transition-Page";
import { dataPortfolio } from "@/data";

const PageProyectos = () => {
    return (
      <ContainerPage>
      <TransitionPage />
      <AvatarProyectos/>
      
      <div className="flex flex-col  justify-center h-full">
          <h1 className="text-2xl mt-4 leading-tight text-center md:text-4xl md:mb-5">Mis últimos <span className="font-bold text-secondary">trabajos realizados</span></h1>
          <div className="font-semibold text-l mt-2 text-center text-white">Los proyectos puestos en esta seccion no representan la totalidad de proyectos que eh realizado y/o participado para ver mas proyectos visita mi <a className="text-secondary" href="https://github.com/GustavoNeira">github</a></div>

          <div className="relative z-10 grid  gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">
                    {dataPortfolio.map((data) => (
                        <ProyectosBox key={data.id} data={data} />
                    ))}
                </div>
            </div>

                   
  </ContainerPage>
  
      );
}
 
export default PageProyectos;