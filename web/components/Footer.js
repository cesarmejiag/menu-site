import Image from "next/image";
import PropTypes from "prop-types";
import { useSite } from "../providers/SiteProvider";

const Footer = () => {
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
        <div style={{ textAlign: "center" }}>
          <p>
            <a href="#">contacto@email.com</a>
          </p>
          <p>Calle Niños Heroes 9, Tultepec, Mexico, 54963</p>
          <p>Todos los derechos reservados Chida Vida!</p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
