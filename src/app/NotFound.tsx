import { Redirect } from "react-router-dom"
import { LIST_ROUTE } from "./routes"

export const NotFound = () => {
    return <Redirect
    to={{
      pathname: LIST_ROUTE.path,
      
    }}
  />
}
