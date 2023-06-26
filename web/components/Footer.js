import Image from "next/image";
import PropTypes from "prop-types";
import BlockContent from "./BlockContent";

const Footer = ({ text, socialLinks }) => {
  return (
    <footer className="py-6">
      <div className="holder mx-auto px-4">
        {/* Social */}
        <ul className="flex justify-center mb-4">
          {socialLinks &&
            socialLinks.map(({ href, icon, label, _key }) => (
              <li key={_key} className="mx-2">
                <a href={href} target="_blank">
                  <Image src={icon} alt={label} width={35} height={35} />
                </a>
              </li>
            ))}
        </ul>
        {/* Rich Text */}
        <div className="text-center">
          <BlockContent blocks={text} />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  text: PropTypes.arrayOf(PropTypes.object),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      icon: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

export default Footer;
