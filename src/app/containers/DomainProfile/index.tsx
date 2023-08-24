/**
 *
 * DomainProfile
 *
 */

import { Helmet } from "react-helmet-async"
import { DomainProfileActions, useDomainProfileSlice } from "./slice"
import { useParams } from "react-router-dom"
import { OwnedByMePage } from "./pages/OwnedByMe"
import { ThirdPartyPage } from "./pages/ThirdParty"
import { GridLoading } from "app/components/grid_loading/gridLoading"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BlockchainSelectors } from "../Blockchain/selectors"
import { DomainProfileSelectors } from "./selectors"

export const DomainProfile = () => {
  useDomainProfileSlice()

  const dispatch = useDispatch()
  const { name } = useParams<{ name: string }>()

  const domainData = useSelector(DomainProfileSelectors.domainData)
  const account = useSelector(BlockchainSelectors.connectedAccount)
  const accountAddress = account?.address

  useEffect(() => {
    if (name) dispatch(DomainProfileActions.getDomainData(name))

    return () => {
      dispatch(DomainProfileActions.setDomainData(undefined))
    }
  }, [name])

  if (!domainData) return <GridLoading />

  const { ownerAddress } = domainData

  const isYours = !!ownerAddress && !!accountAddress && ownerAddress === accountAddress

  const Component = isYours ? OwnedByMePage : ThirdPartyPage

  return (
    <>
      <Helmet>
        <title>Domain Profile</title>
        <meta name="description" content="Description of DomainProfile" />
      </Helmet>

      <Component />
    </>
  )
}
