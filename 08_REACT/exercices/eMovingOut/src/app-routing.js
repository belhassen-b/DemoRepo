import App from "./App";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import AddressesList from "./routes/addresses/AddressesList";
import AddressForm from "./routes/addresses/AddressForm";
import SignForm from "./routes/auth/SignForm";
import ErrorPage from './routes/ErrorPage'
import HomePage from './routes/HomePage'
import PeopleForm from "./routes/people/PeopleForm";
import PeopleList from "./routes/people/PeopleList";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/auth",
        element: <SignForm />
      },
      {
        path: "/addresses",
        element: <AddressesList />
      },
      {
        path: "/addresses/add",
        element: <ProtectedRoute><AddressForm /></ProtectedRoute>
      },
      {
        path: "/addresses/edit/:addressId",
        element: <ProtectedRoute><AddressForm /></ProtectedRoute>
      },
      {
        path: "/addresses/delete/:addressId",
        element: <ProtectedRoute><AddressForm /></ProtectedRoute>
      },
      {
        path: "/people",
        element: <PeopleList />
      },
      {
        path: "/people/add",
        element: <ProtectedRoute><PeopleForm /></ProtectedRoute>
      },
      {
        path: "/people/edit/:peopleId",
        element: <ProtectedRoute><PeopleForm /></ProtectedRoute>
      },
      {
        path: "/people/delete/:peopleId",
        element: <ProtectedRoute><PeopleForm /></ProtectedRoute>
      },
    ]
  }
])

export default router