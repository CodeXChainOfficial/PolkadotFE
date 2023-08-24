import { Button } from "app/components/Button"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { FormControl, FormField, useForm } from "app/components/Form"
import { DomainProfileSelectors } from "app/containers/DomainProfile/selectors"
import { DomainProfileActions } from "app/containers/DomainProfile/slice"
import { SocialAddressSchema, SocialAddressToAdd } from "app/containers/DomainProfile/types"
import { useDispatch, useSelector } from "react-redux"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"

export const AddSocialAddressForm = () => {
  const dispatch = useDispatch()
  const form = useForm(SocialAddressSchema)
  const isUpdating = useSelector(DomainProfileSelectors.isLoading)

  const canSave = form.canSubmit

  const handleSubmit = (data: SocialAddressToAdd) => {
    dispatch(DomainProfileActions.addSocialAddress(data))
  }

  const handleClose = () => {
    dispatch(DomainProfileActions.setSocialAddressToAdd(undefined))
  }

  return (
    <Form onSubmit={handleSubmit} form={form}>
      <FormField name="name" form={form} placeholder="enter social" autoComplete="off" />

      <FormField name="link" form={form} placeholder="your website address" />

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
  gap: 20px;
  gap: 20px;
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
