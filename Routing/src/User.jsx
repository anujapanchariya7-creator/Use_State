import BrowserRouter from "react-router-dom";
import { link } from "react-router-dom";
function User(){
    const userId = useParams();
<>
<nav>
    <li>
        <link to =" user/1">user 1</link>
        <link to =" user/2">user 2</link>
        <link to =" user/3">user 3</link>
    </li>
    <h2>User Details</h2>
    <p>This is user details page</p>
</nav>
</>
}
export default User;