import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const router = useRouter();

  return (
    <div className="flex pt-6 sm:pt-0 items-center pl-6 justify-between absolute w-screen mt-10 mmd:mt-0 md:pl-14">
      <Link href="/">
        <a>
          <Image
            src="/assets/shared/logo.svg"
            alt="logo"
            width="48"
            height="48"
            className="msm:w-10 msm:h-10"
          />
        </a>
      </Link>

      <button onClick={showSidebar} className="sm:hidden mr-6 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </button>

      <nav className="nav-tablet-menu relative bg-grayish bg-opacity-20 flex sm:justify-center msm:hidden w-8/12 pr-6 pl-12 md:pr-14">
        <hr className="border-white absolute w-5/12 -ml-64 mmd:hidden left-0 top-1/2" />
        <ul className="flex">
          <li className="flex items-center">
            <Link href="/">
              <a className={router.asPath == "/" ? "active links" : "links"}>
                <span className="font-bold mr-2 mmd:hidden">00</span> Home
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/destination">
              <a className={router.asPath == "/destination" ? "active links" : "links"}>
                <span className="font-bold mr-2 mmd:hidden">01</span>{" "}
                Destination
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/crew">
              <a className={router.asPath == "/crew" ? "active links" : "links"}>
                <span className="font-bold mr-2 mmd:hidden">02</span> Crew
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/technology">
              <a className={router.asPath == "/technology" ? "active link" : "link"}>
                <span className="font-bold mr-2 mmd:hidden">03</span> Technology
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={sidebar ? "nav-menu transition" : "hidden"}>
        <div className="flex justify-end w-full mt-8">
          <button onClick={showSidebar} className="mr-7 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          </button>
        </div>
        <ul className="mt-16">
          <li className="ml-8 mb-8" onClick={showSidebar}>
            <Link href="/">
              <a className="uppercase text-white">
                <span className="font-bold mr-2">00</span> Home
              </a>
            </Link>
          </li>
          <li className="ml-8 mb-8" onClick={showSidebar}>
            <Link href="/destination">
              <a className="uppercase text-white">
                <span className="font-bold mr-2">01</span> Destination
              </a>
            </Link>
          </li>
          <li className="ml-8 mb-8" onClick={showSidebar}>
            <Link href="/crew"> 
              <a className="uppercase text-white">
                <span className="font-bold mr-2">02</span> Crew
              </a>
            </Link>
          </li>
          <li className="ml-8 mb-8" onClick={showSidebar}>
            <Link href="/technology">
              <a className="uppercase text-white">
                <span className="font-bold mr-2">03</span> Techonology
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
