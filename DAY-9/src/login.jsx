import { useNavigate } from "react-router-dom";
function Login() {
    const Navigate=useNavigate();
    const loginUser=()=>{
        // Perform login logic here (e.g., authentication)
        localStorage.setItem("login","true");
        Navigate("/dashboard");
    }
    return(
        <>
        <h2>Welcome to Login Page</h2>
        <button onClick={loginUser}>Login</button>
        </>
    )




}
export default Login;