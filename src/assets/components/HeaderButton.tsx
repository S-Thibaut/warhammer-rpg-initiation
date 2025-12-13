import { Link } from "react-router-dom";
import "./HeaderButton.css";

function HeaderButton() {
  const buttonStyle = {
  };

  return (
    <>
      <nav className="TopNav">
        <div className="nav-item">
          <Link to="Univers" style={buttonStyle}>L'Univers </Link>
        </div>
        <div className="nav-item">
          <Link to="Règles" style={buttonStyle}>Quelques Règles </Link>
        </div>
        <div className="nav-item">
          <Link to="Dangers" style={buttonStyle}>Les Dangers </Link>
        </div>
      </nav>
      <nav className="BotNav">
        <div className="nav-item">
          <Link to="/" style={buttonStyle}>Accueil </Link>
        </div>
      </nav>
    </>
  );
}

export default HeaderButton;
