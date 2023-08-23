"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function NavButton({
  page,
  isCurPage,
  color,
  router,
}: {
  page: string;
  isCurPage: Boolean;
  color: string;
  router: AppRouterInstance;
}) {
  return (
    <div
      className="h-[85px] w-full rounded-[5px] border-2 border-black flex p-[10px] menubutton"
      style={{
        backgroundImage: `linear-gradient(0deg, #${color} 50%, #${
          isCurPage ? color : "fff"
        } 50%)`,
      }}
      onClick={() => {
        router.push(`/${page.toLowerCase()}`);
      }}
    >
      <h3>{page}</h3>
    </div>
  );
}

export default function Nav() {
  const router = useRouter();
  const curPage = usePathname();

  useEffect(() => {
    router.prefetch("/work");
    router.prefetch("/projects");
    router.prefetch("/");
  }, []);

  return (
    <div className="p-2">
      {/* <Image src="/sean.jpg" width={85} height={85} className="rounded-[5px] mb-2 menubutton" alt="profile"/> */}
      <h2>
        <Link
          className="hover:underline decoration-teal-600 decoration-2"
          href="/"
        >
          Sean Zhang
        </Link>
      </h2>
      <h4>Computer Science Student at the University of Waterloo</h4>
      <p className="">
        <Link href="#">
          <u>Resume</u>
        </Link>{" "}
        │{" "}
        <Link href="https://github.com/sean01zhang">
          <u>GitHub</u>
        </Link>{" "}
        │{" "}
        <Link href="https://linkedin.com/in/sean01zhang">
          <u>LinkedIn</u>
        </Link>{" "}
        │ mail[at][domain]
      </p>
      <div className="space-y-2 mt-3">
        {[
          ["Work", "f0d6fc"],
          ["Projects", "d6eefc"],
          ["Fun", "f9f3d1"],
        ].map(([page, color]) => {
          return (
            <NavButton
              key={page}
              page={page}
              isCurPage={`/${page.toLowerCase()}` === curPage}
              color={color}
              router={router}
            />
          );
        })}
      </div>
    </div>
  );
}
