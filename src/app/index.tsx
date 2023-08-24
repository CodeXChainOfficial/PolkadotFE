/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { GlobalModals } from "./components/Modals/GlobalModals"
import { useGlobalSlice } from "./slice"
import { useSetup } from "./startup/useSetup"
import { AppContent } from "./startup/AppContent"
import { Blockchain } from "./containers/Blockchain"
import { initializeFAIcons } from "./startup/fontAwesomeInit"
import { Helmet } from "./startup/Helmet"
import "react-toastify/dist/ReactToastify.css"
import "styles/global.css"
import "styles/index.css"

initializeFAIcons()

export function App() {
  useGlobalSlice()

  useSetup()

  return (
    <>
      <GlobalModals />
      <Helmet />
      <AppContent />
      <Blockchain />
    </>
  )
}
