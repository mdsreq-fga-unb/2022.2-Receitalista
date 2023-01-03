import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import NonAuthenticatedRoutes from "./NonAuthenticatedRoutes";

const GatewayRoutes = () => {
    const { auth } = useContext(AuthContext);

    if(!auth || !localStorage.getItem('acess_token')){
        return(
           <NonAuthenticatedRoutes />
        )
    }

    return(
        <AuthenticatedRoutes />
    )
}

export default GatewayRoutes;