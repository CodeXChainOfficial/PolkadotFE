import { Button } from "app/components/Button"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { FormControl, FormField, useForm } from "app/components/Form"
import { DomainProfileSelectors } from "app/containers/DomainProfile/selectors"
import { DomainProfileActions } from "app/containers/DomainProfile/slice"
import { ProfilePropsSchema, ProfilePropsToUpdate } from "app/containers/DomainProfile/types"
import { useDispatch, useSelector } from "react-redux"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"

export const EditProfileForm = () => {
  const dispatch = useDispatch()
  const form = useForm(ProfilePropsSchema)
  const isUpdating = useSelector(DomainProfileSelectors.isLoading)
  const domainData = useSelector(DomainProfileSelectors.domainData)
  const profileData = useSelector(DomainProfileSelectors.profileData)
  if (!profileData) {
    return <></>
  }
  const initialData: ProfilePropsToUpdate = {
    username: profileData?.username,
    location: profileData?.location,
    website: profileData?.website || undefined,
    shortbio: profileData?.shortbio,
    avatar: profileData?.avatar || undefined,
  }

  const canSave = form.canSubmit

  const handleSubmit = (data: ProfilePropsToUpdate) => {
    if (!domainData) return

    dispatch(
      DomainProfileActions.startProfileUpdate({
        data,
        domainName: domainData.name,
      }),
    )
  }

  const handleClose = () => {
    dispatch(DomainProfileActions.setProfilePropsToUpdate(undefined))
  }

  return (
    <Form onSubmit={handleSubmit} form={form} initialData={initialData}>
      <FormField name="username" form={form} label="Display Name" placeholder="Display name here" autoComplete="off" />

      <FormField name="avatar" form={form} placeholder="Avatar link here" />

      <FormField name="location" form={form} placeholder="Location" />

      <FormField control="website" name="website" form={form} placeholder="your website address" />

      <FormField control="textarea" name="shortbio" form={form} label="Short bio" placeholder="Hello" />

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
  display: grid;
  place-items: center;
  gap: 20px;

  & > * {
    width: 100%;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block-start: 40px;
`
