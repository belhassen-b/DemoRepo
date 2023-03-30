import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = (props) => {
  const user = useSelector(state => state.authSlice.user)

  if (user && user.role === props.roleChecked) {
    return (
      <>
        {props.children}
      </>
    )
  } else return <Navigate to={`/auth?mode=Sign+In`} />
}