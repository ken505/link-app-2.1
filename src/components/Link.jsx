import Link from "next/link";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { GiCat } from "react-icons/gi";
import { LinkCardStyleWrapper } from "./Layout/LinkCardStyleWrapper";
import { NoteSvg } from "./Svgicons/NoteSvg";
import { ZennSvg } from "./Svgicons/ZennSvg";

export const Links = () => {
  const ITEMS = [
    {
      href: "https://blueprint-gamma.vercel.app/",
      title: "My Vision",
      image: <IoPersonCircle />,
    },
    {
      href: "/about",
      title: "About Me",
      image: <IoPersonCircle />,
    },
    {
      href: "https://portfolio-vert-three.vercel.app/",
      title: "Growth record",
      image: <IoPersonCircle />,
    },
    {
      href: "https://github.com/ken505",
      title: "Github",
      image: <FaGithub />,
    },
    {
      href: "https://zenn.dev/ken505",
      title: "Zenn",
      image: <ZennSvg />,
    },
    {
      href: "https://note.com/ken505",
      title: "note",
      image: <NoteSvg />,
    },
    {
      href: "https://twitter.com/ken_tsx",
      title: "Twitter",
      image: <FaTwitter />,
    },
    {
      href: "https://www.instagram.com/ken.tsx/",
      title: "Instagram",
      image: <FaInstagram />,
      description: "Cat photo",
    },
    {
      href: "https://www.instagram.com/ken.pic505/",
      title: "Instagram",
      image: <FaInstagram />,
      description: "Cat illustration",
    },
    {
      href: "/photo",
      title: "SLR-Photo",
      image: <GiCat />,
      description: "⚠️ Wi-Fi 使用推奨 ⚠️",
    },
  ];
  return (
    <div>
      {ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <a>
              <LinkCardStyleWrapper>
                <div className="flex justify-center">
                  {item.image ? (
                    <div className="flex items-center">{item.image}</div>
                  ) : null}
                  {item.title ? (
                    <h2 className="mx-3 text-2xl">{item.title}</h2>
                  ) : null}
                </div>
                {item.description ? (
                  <p className="text-base text-center">{item.description}</p>
                ) : null}
              </LinkCardStyleWrapper>
            </a>
          </Link>
        );
      })}
    </div>
  );
};
