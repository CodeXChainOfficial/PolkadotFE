import { userData } from "../../assets/globalData"
import { scSelectors } from "../../constants"
import { AssertionEnum } from "../../constants/enums"

export const login = () => {
  cy.get("[data-cy=header]").then((parent) => {
    if (parent.find("[data-cy=auth-button]").length > 0) {
      cy.get("[data-cy=auth-button]").first().should("exist").should("contain.text", "Connect").click()
      cy.checkUrl("/unlock?cbr=/")
      cy.get("button").last().click()
      cy.wait(1000)
      cy.checkUrl("/unlock")
      cy.getSelector("keystoreBtn").click()
      cy.get("input[type=file]").selectFile("./cypress/assets/testKeystore.json", {
        force: true,
      })
      cy.getSelector(scSelectors.accesPass).type(userData.passsword)
      cy.getSelector("submitButton").click()
      cy.getSelector("check_0").click().should(AssertionEnum.beChecked)
      cy.getSelector("confirmBtn").click()
    }
  })
}
