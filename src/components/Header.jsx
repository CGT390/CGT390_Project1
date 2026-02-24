import "./Header.css";

const Header = ({ text }) => {
  return (
    <header className="page-header">
      <h1 className="page-header-title">{text}</h1>
    </header>
  );
};

export default Header;

