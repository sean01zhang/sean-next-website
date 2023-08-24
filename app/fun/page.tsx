import Link from "next/link";
import Nav from "../nav";

export default function Fun() {
  return (
    <main
      className={`flex flex-wrap content-start md:flex-nowrap 
                min-h-screen p-10 px-2 lg:px-24 min-w-screen 
                justify-center space-x-0 md:space-x-3 md:space-y-0 space-y-3`}
    >
      {/* this is the main layout*/}
      <div className="w-screen md:w-[40%] lg:w-[512px] space-y-3">
        <Nav />
      </div>
      <div
        className="w-screen md:w-[60%] lg:w-screen bg-white border-2 border-black p-6"
        style={{
          animation: "appear 0.5s forwards",
        }}
      >
        <h2>Fun and Other Links</h2>
        <p>I may put things that I am interested in here.</p>
        <h3>Notes</h3>
        <ul className="list-disc list-inside">
          <li>
            <Link className="underline" href="/notes/in-one-weekend-metal">
              Ray Tracing in One Weekend using Metal
            </Link>
          </li>
          <li>
            <Link className="underline" href="/notes/in-one-weekend">
              Ray Tracing in One Weekend Notes
            </Link>
          </li>
        </ul>
        <h3>CSClub</h3>
        <p>
          I was the office manager for the Summer 2023 term. I am also a
          terminal committee member.
        </p>
        <ul className="list-disc list-inside">
          Links:
          <li>
            <Link className="underline" href="/notes/csclub/office-s23">
              Office Manager{"'"}s S23 Notes
            </Link>
          </li>
          <li>
            <Link className="underline" href="/notes/csclub/help">
              Office Staff Training Manual
            </Link>
          </li>
          <li>
            <Link className="underline" href="https://wiki.csclub.uwaterloo.ca">
              CSC Wiki
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
