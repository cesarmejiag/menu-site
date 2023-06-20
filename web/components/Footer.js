import PropTypes from "prop-types";

const Footer = ({ links = [] }) => {
  return (
    <footer className="py-6">
      <div className="container mx-auto px-4">
        {/* Social */}
        <ul>
          {links.map((link) => (
            <li key={`social-link-${link.label.toLowerCase()}`}>
              <a href={link.href} target="_blank">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Text */}
        <div>
          <a href="#">contacto@email.com</a>
          <div>Calle Niños Heroes 9, Tultepec, Mexico, 54963</div>
          <div>Todos los derechos reservados Chida Vida!</div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.array,
};

export default Footer;
