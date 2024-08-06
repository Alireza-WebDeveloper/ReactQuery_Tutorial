import ButtonLink from "../Ui/ButtonLink";

 
const Header = () => {
  return (
    <header className="flex flex-col">
      <div className="bg-gray-200 p-3 flex flex-wrap">
        <ButtonLink to="/" text="خانه"/>
        <ButtonLink to="/product" text="محصولات"/>
      </div>
    </header>
  );
};

export default Header;
