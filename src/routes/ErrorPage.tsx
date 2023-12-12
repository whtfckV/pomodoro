import { FC } from "react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage: FC = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{isRouteErrorResponse(error) ? error.statusText || error.data.message : ''}</i>
      </p>
    </div>
  )
}
