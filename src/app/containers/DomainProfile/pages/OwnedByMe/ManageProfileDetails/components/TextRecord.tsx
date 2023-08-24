import styled from "@emotion/styled"
import { Text, Title } from "app/components/Typography"
import { CssVariables } from "styles/glob-styles"
import { RecordItem } from "./RecordItem"
import { ModalCTAButton } from "./ModalCTAButton"
import { FontAwesomeIcon } from "app/components/FontAwesomeIcon"
import { useDispatch, useSelector } from "react-redux"
import { DomainProfileActions } from "app/containers/DomainProfile/slice"
import { DomainProfileSelectors } from "app/containers/DomainProfile/selectors"

export const TextRecord = () => {
  const dispatch = useDispatch()
  const profileData = useSelector(DomainProfileSelectors.profileData)

  const textRecords = profileData?.textRecords || []

  const handleOpenAddRecordModal = () => {
    dispatch(DomainProfileActions.setTextRecordToAdd({} as any))
  }

  return (
    <Wrapper>
      <TitleStack>
        <Title type="16m28" content="Text Record" mb="10px" />

        <Text type="14m24" content="Add Custom Link/Text to account." color={CssVariables.Neutral400} />

        <ModalCTAButton startIcon={<FontAwesomeIcon icon="fa-solid fa-plus" />} onClick={handleOpenAddRecordModal} />
      </TitleStack>

      <RecordItemStack>
        {textRecords.map((tr, idx) => (
          <RecordItem key={tr.key + idx} contents={[tr.key + ":", tr.value]} />
        ))}
      </RecordItemStack>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const TitleStack = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const RecordItemStack = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 30px;
`
