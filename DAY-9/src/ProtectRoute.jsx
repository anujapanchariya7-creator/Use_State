import { isAuthenticated } from "./Auth";
import {Navigate} from "react-router-dom";

function ProtectRoute(children) {
    if (isAuthenticated()) {
        return <Navigate to =" /login"/>;
    } else {
        return <h2>Please login to access this page</h2>;
    }
}
export default ProtectRoute;