import Link from "next/link";
import Newsletter from "../components/newsletter";
import { yearsDiff } from "../utils";
const Index = () => {
  return (
    <>
      <div className="text-4xl lg:text-5xl font-bold mb-4">
        Hi, I'm Uri Klar{" "}
        <span role="img" aria-label="Wave">
          👋
        </span>
      </div>

      <div
        className="grid gap-6 items-center max-w-2xl mb-12"
        style={{ gridTemplateColumns: "20px 1fr" }}
      >
        <div role="img" aria-label="Programmer" className="text-2xl">
          👨‍💻
        </div>
        <div>
          I'm a Senior Software Engineer at{" "}
          <a href="https://www.honeybook.com" target="_blank">
            HoneyBook
          </a>
        </div>

        <div role="img" aria-label="Teacher" className="mr-2 text-2xl">
          👨‍🏫
        </div>
        <div>
          I love teaching, and helping developers make their first steps in web
          development. Checkout my{" "}
          <Link href="/blog" target="_blank">
            <a>Blog </a>
          </Link>
          and{" "}
          <a href="https://www.youtube.com/channel/UC3OjyuPH4oZtuYPqI-W8OHw">
            Youtube channel
          </a>
          .
        </div>

        <div role="img" aria-label="Globe" className="text-2xl">
          🌍
        </div>
        <div>
          I work remotely, been doing so for the last{" "}
          {yearsDiff(new Date("2/19/2017"), Date.now())} years now.
        </div>

        <div role="img" aria-label="Family" className="text-2xl">
          👨‍👩‍👦‍👦
        </div>
        <div>
          Which lets me spend more time with my Wife{" "}
          <span role="img" aria-label="Queen">
            👸
          </span>
          , two children{" "}
          <span role="img" aria-label="Child">
            🧒
          </span>
          <span role="img" aria-label="Baby">
            👶
          </span>
          and doggy{" "}
          <span role="img" aria-label="Dog">
            🐶
          </span>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default Index;
