import styled from "@emotion/styled"
import { Text, Title } from "app/components/Typography"
import { CssVariables } from "styles/glob-styles"
import { ModalCTAButton } from "./ModalCTAButton"
import { DomainProfileActions } from "app/containers/DomainProfile/slice"
import { useDispatch, useSelector } from "react-redux"
import { DomainProfileSelectors } from "app/containers/DomainProfile/selectors"
import { WalletItem } from "../WalletItem"
import { Images } from "app/constants"

export const Wallets = () => {
  const dispatch = useDispatch()
  const profileData = useSelector(DomainProfileSelectors.profileData)

  const handleOpenModal = () => {
    dispatch(DomainProfileActions.setWalletAddressesToUpdate({} as any))
  }

  return (
    <Wrapper>
      <TitleStack>
        <Title type="16m28" content="Wallets" mb="10px" />

        <Text type="14m24" content="Add Crypto address to recieve payment" color={CssVariables.Neutral400} />

        <ModalCTAButton content="Edit" onClick={handleOpenModal} />
      </TitleStack>

      <ItemStack>
        <WalletItem image={Images.egld} name="EGLD" address={profileData?.walletEgld} />

        <WalletItem image={Images.btc} name="BTC" address={profileData?.walletBtc} />

        <WalletItem image={Images.eth} name="ETH" address={profileData?.walletEth} />
      </ItemStack>
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

const ItemStack = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 30px;
`
