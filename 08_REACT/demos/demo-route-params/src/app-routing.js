import { createBrowserRouter } from "react-router-dom"
import App from './App'
import ProjectDisplayPage from "./routes/ProjectDisplayPage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/projects/:blabla",
    element: <ProjectDisplayPage />
  }
])

export default router