import { Form, XCardWrapper } from "../styles"
import { Text } from "app/components/Typography"
import { CssVariables } from "styles/glob-styles"
import { Box } from "@mui/material"
import { XNameBarCard } from "app/components/XNameBar/XNameBarCard"
import TransactionDetailsInput from "./TransactionDetailsInput"
import { Button } from "app/components/Button"
import { useDispatch, useSelector } from "react-redux"
import { globalActions } from "app/slice"
import { GlobalSelectors } from "app/selectors"
import { BlockchainSelectors } from "app/containers/Blockchain/selectors"
import { FormEvent } from "react"

export default function TransactionDetails() {
  const dispatch = useDispatch()
  const txStatus = useSelector(BlockchainSelectors.xNamesTransactionStatus)
  const domainToTransferDetails = useSelector(GlobalSelectors.domainToTransferOwnership)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const address = formData.get("walletAddress") as string

    if (!domainToTransferDetails) return

    dispatch(
      globalActions.setDomainToTransferOwnership({
        ...domainToTransferDetails,
        newOwnerAddress: address,
      }),
    )

    dispatch(globalActions.startDomainTransfer())
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Text type="24m32" color={CssVariables.Neutral300}>
        Transfer Domain
      </Text>

      <XCardWrapper height="64px">
        <XNameBarCard isOwner name={domainToTransferDetails?.name} />
        <Box>
          <Text type="14m20" color={CssVariables.Neutral300}>
            {domainToTransferDetails?.name}
          </Text>
          {/*  <Text type="12s16" color={CssVariables.Neutral500}>
              Token ID:
            </Text> */}
        </Box>
      </XCardWrapper>

      <TransactionDetailsInput name="walletAddress" required label="To" placeholder="Enter recipient address" />

      <Text
        type="12s16"
        color={CssVariables.Orange}
        content="Note: when transferring a domain, sub-domains will be deleted automatically and then transferred to the new wallet address."
      />

      <Button
        type="submit"
        content={`Send`}
        bg={CssVariables.Green4}
        btn="success"
        btnText="18m28"
        borderRadius={6}
        padding="10px"
        disabled={txStatus.pending}
        width="100%"
      />
    </Form>
  )
}
