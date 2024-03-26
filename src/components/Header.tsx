import headerImg from "../assets/header-image.svg";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={headerImg} alt="header-image" />
      </a>
    </header>
  );
};

export default Header;
