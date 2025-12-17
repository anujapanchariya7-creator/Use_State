import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("isAuth", true);
    navigate("/dashboard");
  };
  return <button onClick={login}>Login</button>;
}
