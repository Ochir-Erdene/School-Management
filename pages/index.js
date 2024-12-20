import Image from "next/image";
import Muur from '../public/Muur.jpg';
import { useRouter } from "next/router";

export default function Home(){
    const router = useRouter()

    return(
        <div>
            <div className="w-full h-auto flex items-center justify-around">
                   <div className="flex items-center">
                       <button onClick={() => {router.push("/")}} className="text-white w-40 font-bold h-16 rounded-xl bg-sky-600 hover:bg-sky-500">Dashboard</button>
                   </div>
                   <div className="h-20 w-[2px] bg-gray-300"></div>
                   <div className="flex items-center">
                       <button onClick={() => {router.push("/")}} className="text-white w-40 font-bold h-16 rounded-xl bg-sky-600 hover:bg-sky-500">Our Blog</button>
                   </div>
                       <div className="h-20 w-[2px] bg-gray-300"></div>
                   <div className="flex items-center">
                       <button onClick={() => {router.push("/task2")}} className="text-white w-40 font-bold h-16 rounded-xl bg-sky-600 hover:bg-sky-500">Easy CV</button>
                   </div>
                       <div className="h-20 w-[2px] bg-gray-300"></div>
                   <div className="flex items-center">
                       <button onClick={() => {router.push("/cv")}} className="text-white w-40 font-bold h-16 rounded-xl bg-sky-600 hover:bg-sky-500">CV</button>
                   </div>
                       <div className="h-20 w-[2px] bg-gray-300"></div>
                   <div>
                       <button onClick={() => {router.push("/nameCard")}} className="mt-2 text-white w-40 font-bold h-16 rounded-xl bg-sky-600 hover:bg-sky-500">Name Card</button>
                   </div>
            </div>
            
            <div className="flex items-center justify-center static">
                <Image className="w-full h-screen"  src={Muur}  alt="Muur" object-cover/>
                <div className="absolute w-11/12">
                    <h1 className="mb-2 text-white text-7xl">Bie Daalt</h1>
                    <p className="mt-10 text-white">Busad hiisen project ruu shiljin orohig husvel deer ~bga button deer darn uu.Bayrlalaa.
                    </p>
                </div>
            </div>
        </div>
    );
}