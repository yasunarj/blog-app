import { Link } from "react-router-dom";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faNewspaper,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
  isAuth: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      {isAuth && (
        <Link to="/create">
          <FontAwesomeIcon icon={faNewspaper} />
          記事投稿
        </Link>
      )}
      {isAuth ? (
        <Link to="/logout">
          <FontAwesomeIcon icon={faRightFromBracket} />
          ログアウト
        </Link>
      ) : (
        <Link to="/login">
          <FontAwesomeIcon icon={faRightToBracket} />
          ログイン
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
