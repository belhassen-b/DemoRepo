import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminPage from "./routes/admin/AdminPage";
import HomePage from "./routes/HomePage";

const authCheck = (roleChecked) => {
  const role = localStorage.getItem('role')
  
  if (role === roleChecked) {
    return true
  } else {
    return redirect(`/auth?mode=Sign+In`)
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/admin",
        element: <AdminPage />,
        loader: () => authCheck('Admin')
      }
    ]
  }
])

export default router