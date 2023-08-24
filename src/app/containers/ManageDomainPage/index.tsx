/**
 *
 * ManageDomainPage
 *
 */

import { Route, Routes } from "react-router-dom"
import { useManageDomainPageSlice } from "./slice"
import { ManageDomainRoot } from "./pages/Root"
import { ManageDomainDetail } from "./pages/Detail"

export const ManageDomainPage = () => {
  useManageDomainPageSlice()

  return (
    <Routes>
      <Route path="/" element={<ManageDomainRoot />} />
      <Route path="/:name" element={<ManageDomainDetail />} />
    </Routes>
  )
}
