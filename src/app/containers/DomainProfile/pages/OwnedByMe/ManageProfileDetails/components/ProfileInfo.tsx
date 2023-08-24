import styled from "@emotion/styled"
import { Text, Title } from "app/components/Typography"
import { CssVariables } from "styles/glob-styles"
import { ModalCTAButton } from "./ModalCTAButton"
import { RecordItem } from "./RecordItem"
import { DomainProfileActions } from "app/containers/DomainProfile/slice"
import { useDispatch, useSelector } from "react-redux"
import { DomainProfileSelectors } from "app/containers/DomainProfile/selectors"

export const ProfileInfo = () => {
  const dispatch = useDispatch()

  const profileData = useSelector(DomainProfileSelectors.profileData)

  const handleOpen = () => {
    dispatch(DomainProfileActions.setProfilePropsToUpdate({}))
  }

  return (
    <Wrapper>
      <TitleStack>
        <Title type="16m28" content="Profile Info" mb="10px" />

        <Text type="14m24" content="Add all Personal Information" color={CssVariables.Neutral400} />

        <ModalCTAButton content="Edit" onClick={handleOpen} />
      </TitleStack>

      <RecordItemStack>
        <RecordItem contents={["Name:", profileData?.username || "Not set"]} />
        <RecordItem contents={["Avatar:", profileData?.avatar || "Not set"]} />
        <RecordItem contents={["Location:", profileData?.location || "Not set"]} />
        <RecordItem contents={["Website:", profileData?.website || "Not set"]} />
        <RecordItem contents={["Short Bio:", profileData?.shortbio || "Not set"]} />
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
