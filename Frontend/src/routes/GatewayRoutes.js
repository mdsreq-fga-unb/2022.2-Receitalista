import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import NonAuthenticatedRoutes from "./NonAuthenticatedRoutes";

const GatewayRoutes = () => {
    const { auth } = useContext(AuthContext);

        //nao tenho ideia pq isso ta funcionando com a negacao no localstorage
    if(auth && !localStorage.getItem('acess_token')){
        return(
           <NonAuthenticatedRoutes />
        )
    }

    return(
        <AuthenticatedRoutes />
    )
}

export default GatewayRoutes;