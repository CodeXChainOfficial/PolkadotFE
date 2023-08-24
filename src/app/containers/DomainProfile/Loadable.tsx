/**
 *
 * Asynchronously loads the component for DomainProfile
 *
 */
import { GridLoading } from "app/components/grid_loading/gridLoading"
import { lazyLoad } from "utils/loadable"

export const DomainProfile = lazyLoad(
  () => import("./index"),
  (module) => module.DomainProfile,
  { fallback: <GridLoading /> },
)
