import { provider, auth } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css"

interface LoginProps {
  setIsAuth: (isAuth: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", "true");
      console.log(result);
      setIsAuth(true);
      navigate("/");
    });
  }

  return (
    <>
      <div className="login">
        <h3>ログインして始める</h3>
        <button onClick={loginWithGoogle}>login</button>
      </div>
    </>
  );
};

export default Login;