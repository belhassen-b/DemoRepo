import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignForm from "./routes/auth/SignForm";
import CharacterAdd from "./routes/characters/CharacterAdd";
import CharacterDelete from "./routes/characters/CharacterDelete";
import CharacterEdit from "./routes/characters/CharacterEdit";
import CharactersList from "./routes/characters/CharactersList";
import CharClassAdd from "./routes/charClasses/CharClassAdd";
import CharClassDelete from "./routes/charClasses/CharClassDelete";
import CharClassEdit from "./routes/charClasses/CharClassEdit";
import CharClassesList from "./routes/charClasses/CharClassesList";
import EnnemiesList from "./routes/ennemies/EnnemiesList";
import EnnemyAdd from "./routes/ennemies/EnnemyAdd";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/Home";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import WeaponAdd from "./routes/weapons/WeaponAdd";
import WeaponDelete from "./routes/weapons/WeaponDelete";
import WeaponEdit from "./routes/weapons/WeaponEdit";
import WeaponsList from "./routes/weapons/WeaponsList";

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
        path: "/characters",
        element: <CharactersList />
      },
      {
        path: "/characters/add",
        element: <ProtectedRoute><CharacterAdd /></ProtectedRoute>
      },
      {
        path: "/characters/edit/:characterId",
        element: <ProtectedRoute><CharacterEdit /></ProtectedRoute>
      },
      {
        path: "/characters/delete/:characterId",
        element: <ProtectedRoute><CharacterDelete /></ProtectedRoute>
      },
      {
        path: "/weapons",
        element: <WeaponsList />
      },
      {
        path: "/weapons/add",
        element: <ProtectedRoute><WeaponAdd /></ProtectedRoute>
      },
      {
        path: "/weapons/edit/:weaponId",
        element: <ProtectedRoute><WeaponEdit /></ProtectedRoute>
      },
      {
        path: "/weapons/delete/:weaponId",
        element: <ProtectedRoute><WeaponDelete /></ProtectedRoute>
      },
      {
        path: "/charClasses",
        element: <CharClassesList />
      },
      {
        path: "/charClasses/add",
        element: <ProtectedRoute><CharClassAdd /></ProtectedRoute>
      },
      {
        path: "/charClasses/edit/:charClassId",
        element: <ProtectedRoute><CharClassEdit /></ProtectedRoute>
      },
      {
        path: "/charClasses/delete/:charClassId",
        element: <ProtectedRoute><CharClassDelete /></ProtectedRoute>
      },
      {
        path: "/ennemies",
        element: <EnnemiesList />
      },
      {
        path: "/ennemies/add",
        element: <ProtectedRoute><EnnemyAdd /></ProtectedRoute>
      }
    ]
  }
])

export default router