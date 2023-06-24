import { useSite } from "../providers/SiteProvider";

const Navigation = () => {
  const { siteLinks = [] } = useSite();
  return (
    <nav className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <a href="#">Logo</a>
          </div>
          <div>
            <ul className="flex">
              {siteLinks.map((link, index) => (
                <li key={`navigation-link-${index}`} className="ml-4">
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
