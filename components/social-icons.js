import Facebook from "../svgs/facebook.svg";
import Twitter from "../svgs/twitter.svg";
import Youtube from "../svgs/youtube.svg";
import Twitch from "../svgs/twitch.svg";
import Github from "../svgs/github.svg";
import SO from "../svgs/stackoverflow.svg";
import Gmail from "../svgs/gmail.svg";
import Linkedin from "../svgs/linkedin.svg";
import Link from "next/link";

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

export default () => {
  return (
    <ul className="flex flex-wrap justify-center">
      {ICONS.map((socialIcon) => {
        const Icon = socialIcon.icon;

        return (
          <li className="mr-1 last:mr-0 mt-2" key={socialIcon.url}>
            <a href={socialIcon.url} className="cursor-pointer" target="_blank">
              <Icon width="24px" height="24px" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
