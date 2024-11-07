import Image from "next/image";
import CoverParticulas from "../components/CoverParticulas";
import TransitionPage from "@/components/Transition-Page";
import Header from "@/components/Header";
import Introduccion from "@/components/Introduccion";

export default function Home() {
  return (
   <main>
    <TransitionPage/>
    <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
    <CoverParticulas/>
    <Introduccion/>
    </div>
   </main>
  );
}
