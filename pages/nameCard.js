import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useRouter } from "next/router";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
    const router = useRouter()
  return (
    <div> 
        <HiArrowNarrowLeft
    onClick={() => router.push("/")}
    className="w-[30px] h-[30px]  m-5 cursor-pointer hover:fill-slate-300"/>
    <div className="flex justify-center items-center h-screen bg-pink-200">
    <div className=" flex justify-center items-center w-[500px] h-[300px] bg-pink-400 border-4 border-black">
        <div>
        <img src="/kanye.jpg" className="rounded-full h-56 mr-[200px] ml-[200px]"/> 
        </div>
        <div className="text-black mr-[200px] text-xl font-bold">
        <li>Name-Tsolmon</li>
        <li>Age-17</li>
        <p>tsolmon.bat2007@gmail.com</p>
        <p>88688811</p>
        </div>
        </div>
    </div>
</div>
)

}