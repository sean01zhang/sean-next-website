import Nav from "../nav";
import Image from "next/image";

const projectList = [
  {
    title: "ReSTIR DI",
    body: (
      <>
        <p>
          Implemented an interactive ray-tracer based on ReSTIR using{" "}
          <b>Rust</b> and <b>egui</b> from scratch. I also implemented a BVH
          acceleration structure with surface area heuristic for faster
          intersection detection.
        </p>
        <p>
          Reference:{" "}
          <a
            href="https://research.nvidia.com/publication/2020-07_spatiotemporal-reservoir-resampling-real-time-ray-tracing-dynamic-direct"
            className="underline"
          >
            Nvidia{"'"}s ReSTIR paper
          </a>
        </p>
        <p>Interactive web demo coming soon!</p>
      </>
    ),
    links: [],
    image: {
      link: "/screenshot_restir.png",
      alt: "ReSTIR Screenshot",
    },
  },
  {
    title: "Ray Tracing in One Weekend using Metal GPU",
    body: (
      <>
        <p>
          My first attempt at shader programming. I rewrote the path tracer in
          Ray Tracing in One Weekend using Apple{"'"}s Metal shaders and their
          C++ bindings, <b>metal-cpp</b> which netted a 60x speed-up.
        </p>
        <p>
          Reference:{" "}
          <a
            href="https://raytracing.github.io/books/RayTracingInOneWeekend.html"
            className="underline"
          >
            Ray Tracing in One Weekend
          </a>
        </p>
      </>
    ),
    links: [
      {
        label: "Notes",
        link: "/notes/in-one-weekend-metal",
      },
      {
        label: "Source Code",
        link: "https://github.com/sean01zhang/rt-one-weekend-metal",
      },
    ],
    image: {
      link: "/screenshot_rtoneweekend.png",
      alt: "Final Scene in Ray Tracing in One Weekend",
    },
  },
  {
    title: "Ray Tracing in One Weekend",
    body: (
      <>
        <p>
          From Ray Tracing in One Weekend, I made a brute force path tracer
          using <b>C++</b>.
        </p>
        <p>
          Reference:{" "}
          <a
            href="https://raytracing.github.io/books/RayTracingInOneWeekend.html"
            className="underline"
          >
            Ray Tracing in One Weekend
          </a>
        </p>
      </>
    ),
    links: [
      {
        label: "Notes",
        link: "/notes/in-one-weekend",
      },
      {
        label: "Source Code",
        link: "https://github.com/sean01zhang/rt-one-weekend-no-oop",
      },
    ],
    image: {
      link: "/screenshot_rtoneweekend.png",
      alt: "Final Scene in Ray Tracing in One Weekend",
    },
  },
];

export default function Projects() {
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
        <h2>Projects</h2>
        <p>A brief description of my recent projects.</p>
        <ul style={{}}>
          {projectList.map(({ body, title, links, image }) => (
            <li className="border-b border-black" key={title}>
              <div className="flex flex-row py-3 space-x-6 border-[0px] border-black items-between rounded-[10px]">
                <div className="flex flex-col basis-1/2">
                  <h3>{title}</h3>
                  {body}
                  <div className="flex h-[100%] items-end">
                    <span>
                      {links.map(({ label, link }, index) => {
                        return (
                          <>
                            {index !== 0 ? " | " : ""}
                            <a className="underline" href={link}>
                              {label}
                            </a>
                          </>
                        );
                      })}
                    </span>
                  </div>
                </div>
                <div
                  className="basis-1/2 rounded-[5px] bg-gray-100 min-h-[220px]"
                  style={{ border: "1px solid black", position: "relative" }}
                >
                  <Image
                    src={image.link}
                    alt={image.alt}
                    fill={true}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
