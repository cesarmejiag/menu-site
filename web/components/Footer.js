import Image from "next/image";
import PropTypes from "prop-types";
import { useSite } from "../providers/SiteProvider";
import BlockContent from "./BlockContent";

const Footer = ({ text }) => {
  const { socialLinks = [] } = useSite();
  return (
    <footer className="py-6">
      <div className="container mx-auto px-4">
        {/* Social */}
        <ul className="flex justify-center mb-4">
          {socialLinks.map((link, index) => (
            <li key={`social-link-${index}`} className="mx-2">
              <a href={link.href} target="_blank">
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={35}
                  height={35}
                />
              </a>
            </li>
          ))}
        </ul>
        {/* Rich Text */}
        <div>
          <BlockContent blocks={text} />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  text: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
