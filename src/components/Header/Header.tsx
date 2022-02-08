// assets
import logo from "../../assets/logo-heart.png";

export default function Header() {
  return (
    <header className="header main-grid">
      <a className="skip-to-content-link" href="#page-content">
        Skip to content
      </a>
      <nav className="header__main" role="navigation">
        <div className="header__main__wrap">
          <img className="logo" src={logo} alt="webstore logo" />
        </div>
      </nav>
    </header>
  );
}
