import { Button } from "app/components/Button"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { FormControl, FormField, useForm } from "app/components/Form"
import { DomainProfileSelectors } from "app/containers/DomainProfile/selectors"
import { DomainProfileActions } from "app/containers/DomainProfile/slice"
import { TextRecordSchema, TextRecordToAdd } from "app/containers/DomainProfile/types"
import { useDispatch, useSelector } from "react-redux"
import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"

export const AddTextRecordForm = () => {
  const dispatch = useDispatch()
  const form = useForm(TextRecordSchema)
  const isUpdating = useSelector(DomainProfileSelectors.isLoading)
  const textRecords = useSelector(DomainProfileSelectors.profileData)?.textRecords ?? []

  const canSave = form.canSubmit

  const handleSubmit = (data: TextRecordToAdd) => {
    dispatch(DomainProfileActions.setTextRecords([...textRecords, data]))
  }

  const handleClose = () => {
    dispatch(DomainProfileActions.setTextRecordToAdd(undefined))
  }

  return (
    <Form onSubmit={handleSubmit} form={form}>
      <Group>
        <FormField name="key" form={form} placeholder="Project Name" autoComplete="off" />

        <FormField name="value" form={form} control="website" label="Custom Link" placeholder="Custom record here" />
      </Group>

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

const Group = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;

  & > * {
    flex-grow: 1;

    &:first-child {
      max-width: 200px;
    }
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block-start: 40px;
`
