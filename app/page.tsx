import Link from "next/link";
import Image from "next/image";
import Nav from "./nav";

export default function Home() {
  return (
    // this is the outside
    <main className="flex min-h-screen p-10 px-2 min-w-screen justify-center">
      {/* this is the main layout*/}
      <div className="w-screen md:w-1/2 lg:w-[512px] space-y-3">
        <Nav />
        <div className="border-0 border-black px-2">
          <h3>Updates</h3>
          <ul>
            <li>[08-24-2023] Migrated notes.</li>
            <li>[08-24-2023] Fun! Updated my favicon.</li>
            <li>[08-23-2023] Added Projects. Need to migrate notes.</li>
            <li>[08-22-2023] Added Work Summaries!</li>
            <li>[08-22-2023] Website Created. Stay tuned for more fun!</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
