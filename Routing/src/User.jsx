import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function User(){
    const {Id}= useParams();
    return(
<>
<nav>
    <li>
        <link to =" user/1">user 1</link>
        <link to =" user/2">user 2</link>
        <link to =" user/3">user 3</link>
    </li>
    <h2>User Details</h2>
    <p>user id: {Id}</p>
</nav>
</>
)
}
export default User;