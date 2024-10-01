import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import "./Logout.css";

interface LogoutProps {
  setIsAuth: (isAuth: boolean) => void;
}

const Logout: React.FC<LogoutProps> = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    })
  }
  return (
    <div className="logout">
      <h3>ログアウトする</h3>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Logout;
