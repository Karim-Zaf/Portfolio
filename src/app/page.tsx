import Image from "next/image";
import  {  StarsBackground } from "./Components/StarsBackground";
import { ShootingStars } from "./Components/StarsShoot";
import MainPage from "./Components/MainPage";

export default function Home() {
  return (
    < >
        <div className="h-screen rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full"> 
        
            
             <MainPage />
            <ShootingStars />
            <StarsBackground />
       </div>  
    </>
  );
}
