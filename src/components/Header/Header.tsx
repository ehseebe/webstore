import { useState } from 'react';
import PropTypes from 'prop-types';

// components


// assets
import logo from "../../assets/logo-heart.png";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header main-grid">
      <a className="skip-to-content-link" href="#page-content">
        Skip to content
      </a>

        <nav className="header__main" role="navigation">
          <div className='header__main__wrap'>

          <img className="logo" src={logo} alt="webstore logo"/>

          {/* <div className="togglers">

          </div> */}
          </div>
        </nav>
    </header>
  );
}

Header.propTypes = {
  audioPlaying: PropTypes.bool,
  isLivePlayer: PropTypes.bool,
  setAudioPlaying: PropTypes.func,
  setEpisodeId: PropTypes.func,
  setIsLivePlayer: PropTypes.func,
};

Header.defaultProps = {
  audioPlaying: false,
  isLivePlayer: true,
  setAudioPlaying: () => {},
  setEpisodeId: () => {},
  setIsLivePlayer: () => {},
};
