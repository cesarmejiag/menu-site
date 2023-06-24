import { useSite } from "../../providers/SiteProvider";

import styles from "../styles/LinkList.module.css";

const LinksList = () => {
  const { siteLinks = [] } = useSite();
  return (
    <ul>
      {siteLinks.map((link, index) => (
        <li key={`navigation-link-${index}`} className="mb-2">
          <a
            className={`${styles.linkList__anchor} p-2 text-lg`}
            href={link.href}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinksList;
