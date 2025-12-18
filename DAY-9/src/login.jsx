function Login() {
    const loginUser = () => {
        localStorage.setItem("authToken", "your_auth_token");
        alert("User logged in successfully!");
    }

    return(
        <>
        <h2>Welcome to Login Page</h2>
        <button onClick={loginUser}>Login</button>
        </>
    )




}
export default Login;