import BrowserRouter from "react-router-dom";
function User(){
    const {id}=useParams();

  return(
        <>
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li> 
                <li><Link to="/user">User</Link></li>
            </ul>
        </nav>

        <h2>This is Contact Page</h2>
        </>
    )
}
export default User;