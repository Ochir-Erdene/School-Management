import { HiArrowNarrowLeft } from "react-icons/hi";
import { useRouter } from "next/router";

export default function Task3(){ 
    const router = useRouter()
    
    return ( 
        <div >
            <HiArrowNarrowLeft
        onClick={() => router.push("/")}
        className="w-[30px] h-[30px]  m-5 cursor-pointer hover:fill-slate-300"/>
          <div className="w-[800px] h-[600px] bg-black ml-[400px] mb-[300px] flex mt-[150px] border-4 border-white-500"> 
          <div className="w-[400px] h-[600px] border-2 border-white"> <p className="text-7xl ml-[70px] pt-[30px] text-white">Battulga</p>
           <p className="text-7xl ml-[70px] text-white">Tsolmon</p> <p className="text-white ml-[60px] font-bold text-2xl mt-[50px]"> EDUCATION</p> 
           <li className="text-white ml-[60px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li> 
           <li className="text-white ml-[60px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li> 
           <p className="text-white ml-[60px] font-bold text-2xl mt-[50px]"> EXPERIENCE</p> 
           <li className="text-white ml-[60px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li> 
           <li className="text-white ml-[60px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li> 
          </div>
          
          <div className="w-[400px] h-[600px] "> 
          <img src="/kanye.jpg" className="h-64 ml-[100px] mt-[30px]"/> 
          <p className="text-white ml-[60px] font-bold text-2xl mt-[50px]"> NATIONALITY</p> 
          <li className="text-white ml-[60px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li> 
          <p className="text-white ml-[60px] font-bold text-2xl mt-[50px]"> DEGREE </p> 
          <li className="text-white ml-[60px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li> 
          </div>
           </div>
           </div>
            ) 
        }