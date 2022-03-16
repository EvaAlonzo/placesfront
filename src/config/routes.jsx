import { Navigate } from "react-router-dom";
// import Login from "../pages/LogIn";
// import Signup from "../pages/Signup";
import ProtectedPage from "../pages/ProtectedPage";
import * as PATHS from "../utils/paths";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar"

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.LANDING, // "/"
      element: <Landing {...props} />,
    },
    // {
    //   path: PATHS.SIGNUPPAGE, // "/auth/signup"
    //   element: <Signup {...props} />,
    // },

    // {
    //   path: PATHS.LOGINPAGE,
    //   element: <Login {...props} />,
    // },
    {
      path: PATHS.PROTECTEDPAGE,
      element: user ? (
        <Navbar user={user} >
        <ProtectedPage {...props} /> </Navbar>
      ) : (
        <Navigate to={PATHS.LANDING} replace />
      ),
    },
  ];
};

export default routes;