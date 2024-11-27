import Image from "next/image";
import  {  StarsBackground } from "./Components/StarsBackground";
import { ShootingStars } from "./Components/StarsShoot";
import MainPage from "./Components/MainPage";
import Navbara from "./Components/Navbara";

export default function Home() {
  return (
    <>
      <div className="h-full rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full"> 
        <StarsBackground  className="z-0 h-full w-full"/>
        <ShootingStars className="z-0 h-full w-full"/> 
        <MainPage />      
      </div>  
    </>
  );
}
