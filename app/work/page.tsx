import Link from "next/link";
import Image from "next/image"
import WorkMD from "./work.mdx"
import Nav from "../nav";

export default function Work() {
  return (
    <main
      className={`flex flex-wrap content-start md:flex-nowrap 
                min-h-screen p-10 px-2 lg:px-24 min-w-screen 
                justify-center space-x-0 md:space-x-3 md:space-y-0 space-y-3`}
    >
      {/* this is the main layout*/}
      <div
        className="w-screen md:w-[40%] lg:w-[512px] space-y-3"
      >
        <Nav />
      </div>
      <div
        className="w-screen md:w-[60%] lg:w-screen bg-white border-2 border-black p-6"
        style={{
          animation: "appear 0.5s forwards",
        }}
      >
        <WorkMD/>
      </div>
    </main>
  );
}
