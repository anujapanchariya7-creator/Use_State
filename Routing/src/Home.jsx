import { Link } from "react-router-dom";

function Home() {
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
        
        <h2>This is Home Page</h2>


        </>
    )
}
export default Home;