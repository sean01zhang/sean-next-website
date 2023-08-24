import Nav from "@/app/nav";
import { notFound } from "next/navigation";

const allow: string[] = [
  "csclub/help",
  "csclub/office-s23",
  "in-one-weekend",
  "in-one-weekend-metal",
];

const needsIndex: string[] = ["in-one-weekend", "in-one-weekend-metal"];

export default function Page({ params }: { params: { slug: string[] } }) {
  // add the .html to the url to get the new link
  const combined = params.slug.join("/");
  const isNeedIndex = needsIndex.includes(combined);
  if (!allow.includes(combined) && !isNeedIndex) {
    notFound();
  }
  //console.log(`/html/${params.slug.join("/")}.html`);

  return (
    <main
      className={`flex flex-wrap content-start md:flex-nowrap 
                min-h-screen p-10 px-2 lg:px-24 min-w-screen 
                justify-center space-x-0 md:space-x-3 md:space-y-0 space-y-3`}
    >
      {/* this is the main layout*/}
      <div className="w-screen md:w-[40%] lg:w-[512px] space-y-3 sticky">
        <Nav />
      </div>
      <iframe
        className="w-screen md:w-[60%] lg:w-screen bg-white border-2 border-black p-6"
        style={{
          animation: "appear 0.5s forwards",
        }}
        src={`/html/${params.slug.join("/")}${
          isNeedIndex ? "/index" : ""
        }.html`}
      ></iframe>
    </main>
  );
}
