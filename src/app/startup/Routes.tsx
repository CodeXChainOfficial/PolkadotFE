import { Routes, Route } from "react-router-dom"
import { HomePage } from "app/containers/HomePage/Loadable"
import { NotFoundPage } from "app/containers/NotFoundPage/Loadable"
import { AppPages } from "app/constants"
import PrivateRoute from "app/PrivateRoute"
import { DomainPage } from "app/containers/DomainPage/Loadable"
import { UnlockPage } from "../containers/UnlockPage"
import { ManageDomainPage } from "app/containers/ManageDomainPage/Loadable"
import { IS_DEV } from "services/constants"
import { Playground } from "app/containers/Playground/Loadable"
import { SearchPage } from "app/containers/DomainPage/pages/Domain/Loadable"
import { DomainProfile } from "app/containers/DomainProfile/Loadable"
import { Faqs } from "app/containers/FaqsPage"

export const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path={AppPages.RootPage} element={<HomePage />} />
      <Route path={AppPages.SearchPage} element={<SearchPage />} />
      <Route path={AppPages.FaqsPage} element={<Faqs />} />
      <Route path={`${AppPages.DomainProfile}/:name`} element={<DomainProfile />} />
      <Route
        path={`${AppPages.UnlockPage}`}
        element={<PrivateRoute reversePrivate path={`${AppPages.UnlockPage}`} element={UnlockPage} />}
      />
      <Route
        path={`${AppPages.ManageDomainPage}/*`}
        element={<PrivateRoute path={`${AppPages.ManageDomainPage}/*`} element={ManageDomainPage} />}
      />

      <Route path={`${AppPages.DomainPage}/:name`} element={<DomainPage />} />

      {!IS_DEV && <Route path={`${AppPages.Playground}`} element={<Playground />} />}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
