import { Helmet } from "react-helmet-async"
import { useDomainPageSlice } from "./slice"

import { Domain } from "./pages/Domain"

export const DomainPage = () => {
  useDomainPageSlice()

  return (
    <>
      <Helmet>
        <title>Domains</title>
        <meta name="description" content="Domains" />
      </Helmet>

      <Domain />
    </>
  )
}
