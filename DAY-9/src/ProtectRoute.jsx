import { isAuthenticated } from "./Auth";

function ProtectRoute(children) {
    if (isAuthenticated()) {
        return children;
    } else {
        return <h2>Please login to access this page</h2>;
    }
}
export default ProtectRoute;