import { Navigate, Route } from "react-router-dom"
import { AppPages } from "./constants"
import { useGetAccount } from "@multiversx/sdk-dapp/hooks"
import { FC } from "react"

// reversePrivate is for the situation where we don't want to show a page if user is already logged in like signup page.

interface Props {
  path: string
  element: FC<any>
  reversePrivate?: boolean
}

const PrivateRoute = ({ element: Element, reversePrivate = false, path }: Props) => {
  const account = useGetAccount()

  let canOpen = !!account.address

  if (reversePrivate) {
    canOpen = !account.address
  }

  if (canOpen) return <Element />

  return <Navigate to={reversePrivate ? AppPages.RootPage : AppPages.RootPage} state={{ from: path }} replace />
}

export default PrivateRoute
