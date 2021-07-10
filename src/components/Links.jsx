import Link from "next/link";
// import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
// import { IoPersonCircle } from "react-icons/io5";
// import { GiCat } from "react-icons/gi";

export const Links = () => {
  const ITEMS = [
    {
      href: "https://twitter.com/ken_tsx",
      title: "Twitter",
      // image: <FaTwitter />,
    },
    {
      href: "https://zenn.dev/ken505",
      title: "Zenn",
      // image: <ZennSvg />,
    },
    {
      href: "https://www.instagram.com/ken.tsx/",
      title: "Instagram",
      // image: <FaInstagram  />,
      description: "Account for  Cat photos",
    },
    {
      href: "https://www.instagram.com/ken.pic505/",
      title: "Instagram",
      // image: <FaInstagram />,
      description: "Account for Cat illustration",
    },
    {
      href: "https://note.com/ken505",
      title: "note",
      // image: <NoteSvg />,
    },
    {
      href: "https://github.com/ken505",
      title: "Github",
      // image: <FaGithub />,
    },
    {
      href: "/photos",
      title: "High-reso photos",
      // image: <GiCat />,
      // description: "⚠️ Wi-Fi 環境下での閲覧をお勧めします ⚠️",
    },
    {
      href: "/about",
      title: "About Me",
      // image: <IoPersonCircle />,
    },
  ];
  return (
    <div className="text-center mb-5">
      {ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <a>
              <div>
                {/* Image データの有無による出し分け処理 */}
                {/* item.src が truthy だったら Image を表示、 falsy だったら null (非表示)*/}
                {/* Image タグに値がないとエラーになるため。 */}
                <div>
                  {item.image ? <div>{item.image}</div> : null}
                  {item.title ? <h2>{item.title}</h2> : null}
                </div>
                {item.description ? <p>{item.description}</p> : null}
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};
