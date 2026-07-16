import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import UserProfile from "./pages/userProfile/UserProfile";
import NavBar from "./components/navbar/NavBar";
import RightBar from "./components/righbar/RightBar";
import LeftBar from "./components/leftbar/LeftBar";
import Home from "./pages/home/Home" ;
function App() {
  const currentUser = true;
  const Layout =()=>{
    return (
      <div>
        <NavBar />
        <div style ={{display: "flex"}}>
<LeftBar />
<div style={{flex: 6}}>
<Outlet />
</div>
<RightBar />

</div>
      </div>
    );
  }
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />; 
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
          {
          path: "/profile/:id",
          element: <UserProfile />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
    {/* <Login /> */}
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
