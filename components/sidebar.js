import { useState } from "react";
import HamburgerMenu from "./hamburger-menu";

import Facebook from "../svgs/facebook.svg";
import Twitter from "../svgs/twitter.svg";
import Youtube from "../svgs/youtube.svg";
import Twitch from "../svgs/twitch.svg";
import Github from "../svgs/github.svg";
import SO from "../svgs/stackoverflow.svg";
import Gmail from "../svgs/gmail.svg";
import Linkedin from "../svgs/linkedin.svg";

const ICONS = [
  // {
  //   icon: Gmail,
  //   url: "mailto:uriklar@gmail.com",
  // },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/uriklar/",
  },
  {
    icon: Github,
    url: "https://github.com/uriklar",
  },
  {
    icon: SO,
    url: "https://stackoverflow.com/users/1936629/uri-klar",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/uriklar",
  },
  // {
  //   icon: Facebook,
  //   url: "https://www.facebook.com/uri.klar",
  // },
  {
    icon: Youtube,
    url: "https://www.youtube.com/channel/UC3OjyuPH4oZtuYPqI-W8OHw",
  },
  // {
  //   icon: Twitch,
  //   url: "https://www.twitch.tv/uri_klar",
  // },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside className="bg-brand-500 text-white p-6 lg:w-1/5 flex flex-col">
      <div className="flex items-center justify-center relative text-2xl font-bold text-center">
        <HamburgerMenu onClick={() => setOpen(!open)} />
        Uri Klar
      </div>

      <div
        className={`${
          open ? "flex" : "hidden"
        } flex-col items-center mt-6 lg:flex`}
      >
        <img
          className="w-40 h-40 rounded-full"
          src="https://uriklar.dev/static/avatar-54a6aa9a88ca26c59e7af6e59a4bc84a.jpg"
        />
        <p className="mt-4 w-3/5 lg:w-full text-center">
          Hello, I'm Uri Klar. A Javascript Engineer building web and mobile
          apps of all shapes and sizes.
        </p>

        <ul className="flex flex-wrap justify-center">
          {ICONS.map((socialIcon) => {
            const Icon = socialIcon.icon;

            return (
              <li className="mr-3 last:mr-0 mt-6" key={socialIcon.url}>
                <a className="social-svg cursor-pointer" target="_blank">
                  <Icon width="32px" height="32px" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
