import { Button } from "app/components/Button"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { FormControl, FormField, FormFieldProps, useForm } from "app/components/Form"
import { DomainProfileSelectors } from "app/containers/DomainProfile/selectors"
import { DomainProfileActions } from "app/containers/DomainProfile/slice"
import { EditWalletsSchema, WalletAddressesToUpdate } from "app/containers/DomainProfile/types"
import { useDispatch, useSelector } from "react-redux"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"

export const EditWalletsForm = () => {
  const dispatch = useDispatch()
  const form = useForm(EditWalletsSchema)
  const profileData = useSelector(DomainProfileSelectors.profileData)
  const isUpdating = useSelector(DomainProfileSelectors.isLoading)

  const initialData: WalletAddressesToUpdate = {
    walletBtc: profileData?.walletBtc,
    walletEth: profileData?.walletEth,
    walletEgld: profileData?.walletEgld,
  }

  const canSave = form.canSubmit

  const handleSubmit = (data: WalletAddressesToUpdate) => {
    dispatch(DomainProfileActions.startWalletAddressUpdate({ data, domainName: "" }))
  }

  const handleClose = () => {
    dispatch(DomainProfileActions.setWalletAddressesToUpdate(undefined))
  }

  const fields: Partial<FormFieldProps>[] = [
    { name: "walletEgld", asset: "EGLD", autoComplete: "off" },
    { name: "walletEth", asset: "ETH" },
    { name: "walletBtc", asset: "BTC" },
  ]

  return (
    <Form onSubmit={handleSubmit} form={form} initialData={initialData}>
      {fields.map((field) => (
        <FormField
          key={field.name}
          {...(field as FormFieldProps)}
          control="asset"
          form={form}
          placeholder="enter wallet address here"
          hideLabel
        />
      ))}

      <ButtonGroup>
        <Button btnText="14m20" btnSize="md" btn="secondary" content="Close" onClick={handleClose} />

        <Button
          type="submit"
          btnText="14m20"
          btnSize="md"
          btn="success"
          width="217px"
          content="Save"
          disabled={!canSave}
        />
      </ButtonGroup>

      {isUpdating && (
        <FontAwesomeIcon
          icon="fa-duotone fa-spinner"
          spin
          size="10x"
          color={CssVariables.Green500}
          style={{ position: "absolute" }}
        />
      )}
    </Form>
  )
}

const Form = styled(FormControl)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 400px;

  & > * {
    width: 100%;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block-start: auto;
  margin-block-end: 20px;
`
