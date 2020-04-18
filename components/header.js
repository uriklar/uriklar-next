import Link from "next/link";

export default () => {
  return (
    <header className="pt-12 px-8 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:text-xl">
      <div className="flex items-center">
        <Link href="/">
          <>
            <img
              alt="Uri Klar"
              className="w-32 h-32 rounded-full mr-4"
              src="https://uriklar.dev/static/avatar-54a6aa9a88ca26c59e7af6e59a4bc84a.jpg"
            />
            <div className="text-brand-500 text-4xl font-bold">
              <span className="block leading-none">Uri</span>
              <span className="block leading-none">Klar</span>
            </div>
          </>
        </Link>
      </div>
      <nav className="mt-8 flex justify-between gap-4 w-40 lg:w-56">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
  );
};
