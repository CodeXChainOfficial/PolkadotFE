/**
 *
 * Asynchronously loads the component for SearchPage
 *
 */

import { lazyLoad } from "utils/loadable"
import { GridLoading } from "app/components/grid_loading/gridLoading"

export const SearchPage = lazyLoad(
  () => import("./index"),
  (module) => module.Domain,
  { fallback: <GridLoading /> },
)
