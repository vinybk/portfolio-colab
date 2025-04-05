import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaChrome } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/vinybk" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/vinybk" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;