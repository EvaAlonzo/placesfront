import { Navigate } from "react-router-dom";
import ProtectedPage from "../pages/ProtectedPage";
import * as PATHS from "../utils/paths";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar"
import { CreatePlaces, Done, EditPlaces, Favorites, Home, Pending, Places, User } from "../components";

const routes = (props) => {
  console.log("las otras props", props)
  const { user } = props;
  return [
    {
      path: PATHS.LANDING,
      element: <Landing {...props} />,
    },
    {
      path: PATHS.HOME, 
      element: <Home {...props} />,
    },
    {
      path: PATHS.USER, 
      element: <User {...props} />,
    },
    {
      path: PATHS.FAVORITES, 
      element: <Favorites {...props} />,
    },
    {
      path: PATHS.PLACES, 
      element: <Places {...props} />,
    },
    {
      path: PATHS.PENDING, 
      element: <Pending {...props} />,
    },
    {
      path: PATHS.DONE, 
      element: <Done {...props} />,
    },
    {
      path: PATHS.CREATEPLACES, 
      element: <CreatePlaces {...props} />,
    },
    {
      path: PATHS.EDITPLACES, 
      element: <EditPlaces {...props} />,
    },
    {
      path: PATHS.EDITPLACES, 
      element: <EditPlaces {...props} />,
    },
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