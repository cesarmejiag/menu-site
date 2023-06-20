const Navigation = () => {
  return (
    <navigation className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <a href="#">Logo</a>
          </div>
          <div>
            <ul className="flex">
              <li className="ml-4">
                <a href="#">Come todo / buffete</a>
              </li>
              <li className="ml-4">
                <a href="#">Menú a la carta</a>
              </li>
              <li className="ml-4">
                <a href="#">Bebidas</a>
              </li>
              <li className="ml-4">
                <a href="#">Promociones</a>
              </li>
              <li className="ml-4">
                <a href="#">Postres</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </navigation>
  );
};

export default Navigation;
