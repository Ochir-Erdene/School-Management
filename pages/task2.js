import { HiArrowNarrowLeft } from "react-icons/hi";
import { useRouter } from "next/router";

export default function Task2() {

    const router = useRouter()

     return ( 
        <div>
            <HiArrowNarrowLeft
        onClick={() => router.push("/")}
        className="w-[30px] h-[30px]  m-5 cursor-pointer hover:fill-slate-300"/>
     <div className="flex justify-center items-center bg-white h-screen"> 
     <div className="h-[800px] w-[600px] bg-black border-4 border-blue-700"> 
     <p className="text-white text-lg font-black ml-[20px] mt-[30px]">INSERT NAME HERE</p> 
     <p className="text-white ml-[20px] font-thin text-xs mt[10px]">Email:tsolmon.bat2007@gmail.com</p> 
     <p className="text-white ml-[20px] font-thin text-xs">Address:Mongolia Ulaanbaatar</p> 
     <p className="text-white ml-[20px] font-thin text-xs">Phone Number:88688811</p> 
     <p className="text-white ml-[20px] font-thin text-xs">Website:Loopy</p> 
     <p className="text-white ml-[20px] font-bold text-md mt-[10px]">OBJECTIVE</p> 
     <p className="text-white ml-[20px] font-thin text-xs">Loopy</p> 
     <p className="text-white ml-[20px] font-bold text-md mt-[10px]">EDUCATION</p> 
     <p className="text-white ml-[20px] font-medium text-base mt-[10px]">NAME OF SCHOOL</p> 
     <p className="text-blue-300 ml-[20px] font-thin text-xs">Nest IT SCHOOL</p> 
     <p className="text-white ml-[20px] font-thin text-xs">Nest IT SCHOOL</p> 
     <p className="text-white ml-[20px] font-bold text-md mt-[10px]">EXPERIENCE</p> 
     <p className="text-white ml-[20px] font-medium text-base mt-[10px]">COMPANY NAME</p> 
     <div className="flex"> 
     <p className="text-blue-300 ml-[20px] font-thin text-xs">Loopy</p> 
     <p className="text-white ml-[5px] font-thin text-xs">Loopy</p> 
     <p className="text-white ml-[5px] font-thin text-xs">Loopy</p> 
     </div> 
     <p className="text-white ml-[20px] font-thin text-xs mt-[20px]">Loopy</p> 
     <p className="text-white ml-[20px] font-bold text-md mt-[10px]">SKILLS</p> 
     <li className="text-white ml-[40px] font-thin text-xs">Skill 1</li> 
     <li className="text-white ml-[40px] font-thin text-xs">Skill 2</li> 
     </div> 
     </div> 
        </div>
     )
 }