import styled from "@emotion/styled"
import { Text, Title } from "app/components/Typography"
import { CssVariables } from "styles/glob-styles"
import { RecordItem } from "./RecordItem"
import { ModalCTAButton } from "./ModalCTAButton"
import { DomainProfileActions } from "app/containers/DomainProfile/slice"
import { useDispatch, useSelector } from "react-redux"
import { DomainProfileSelectors } from "app/containers/DomainProfile/selectors"

export const SocialMedia = () => {
  const dispatch = useDispatch()
  const profileData = useSelector(DomainProfileSelectors.profileData)

  const records = ["Telegram", "Discord", "Twitter", "Medium", "Facebook"].map((key) => {
    const value = profileData ? profileData[key.toLowerCase()] : undefined
    return [key + ":", value || "Not set"]
  })

  const handleOpenModal = () => {
    dispatch(DomainProfileActions.setSocialAddressToAdd({} as any))
  }

  return (
    <Wrapper>
      <TitleStack>
        <Title type="16m28" content="Social account" mb="10px" />

        <Text type="14m24" content="Add Social address to account." color={CssVariables.Neutral400} />

        <ModalCTAButton content="Edit" onClick={handleOpenModal} />
      </TitleStack>

      <RecordItemStack>
        {records.map((record, idx) => (
          <RecordItem key={idx} contents={record as [string, string]} />
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
