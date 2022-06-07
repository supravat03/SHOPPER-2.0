import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { getAccessToken, removeAccessToken, decodeToken } from "../utils/token.utils";
// import { getUserData } from "../core/services/api/user";
// import { Loader } from "../components/Loader/Loader";

export const PublicRoute = ({ Component, ...rest }) => {

    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const [userType, setUserType] = useState(null);
    // const [loading, setLoading] = useState(true);


    // useEffect(() => {
    //     const userData = async () => {
    //         try {
    //             const accessToken = getAccessToken();
    //             const tokenData = await decodeToken(accessToken);
    //             if (tokenData) {
    //                 setIsAuthenticated(true);
    //                 const userDetail = await getUserData(tokenData.user_id);
    //                 setUserType(userDetail.user_details.user_type);
    //                 setLoading(false);

    //             }
    //         } catch (error) {
    //             console.log('private route error:', error);
    //             setIsAuthenticated(false);
    //             removeAccessToken();
    //         }

    //     }
    //     userData();
    // }, [])

    // //show loader when data is fatched
    // if (loading) {
    //     return (
    //         <Loader />
    //     )
    // }

    // const renderComponent = (props) => {
    //     if (!isAuthenticated) {
    //         return (<Redirect to='/login' />);
    //     }
    //     if (userType === 1) {
    //         return (<BuyerComponent {...props} />);
    //     } else if (userType === 0) {
    //         return (<SellerComponent {...props} />);
    //     } else {
    //         return (<Redirect to='/404' />);
    //     }
    // }




    return (
        <Route {...rest} render={props=> <Component {...props} /> } />
    )
}