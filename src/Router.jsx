import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home/index.jsx";
import PrivacyPolicy from "./components/Home/privacy.jsx";
import TermsAndConditions from "./components/Home/terms.jsx";
import Error from "./components/Error/index.jsx";
import Layout from "./components/Helper/Layout.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
      {
        index:true,
        element: <Home />
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />
      },
      {
        path: "/terms-of-service",
        element: <TermsAndConditions />
      },
      {
        path: "*",
        element: <Error />
      },
    ]
  }
]);

function Router() {
  return (
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default Router;
