import Link from "next/link";
import SocialIcons from "./social-icons";

export default () => {
  return (
    <header className="pt-12 px-8 flex flex-col lg:w-2/3 lg:flex-row lg:justify-between lg:items-center lg:text-xl">
      <div className=" flex items-center">
        <Link href="/">
          <a className="initial">
            <img
              alt="Uri Klar"
              className="w-32 h-32 rounded-full mr-4"
              src="/avatar.jpg"
            />
          </a>
        </Link>
        <div className="text-brand-500 text-4xl font-bold">
          <span className="block leading-none">Uri</span>
          <span className="block leading-none">Klar</span>
          <SocialIcons />
        </div>
      </div>

      <nav className="mt-8 flex justify-between gap-4 w-24 lg:w-40">
        <Link href="/">
          <a>Home</a>
        </Link>

        <a href="https://medium.com/@uriklar" target="_blank">
          Blog
        </a>
      </nav>
    </header>
  );
};
