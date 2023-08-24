import { scTransaction } from "../../e2e/SCActions"

export const registerDomain = (name: string) => {
  cy.visit("/")
  cy.get("[data-cy=input]").first().type(`${name}{enter}`)
  cy.checkUrl(`/domains/${name}`)

  cy.login()
  cy.checkUrl(`/domains/${name}`)

  const title = cy.get("[data-cy=title]")

  title.then(($title) => {
    if ($title.text().includes("is available!")) {
      cy.get("[data-cy=register]").click()
      cy.get("[data-cy=initiateTxBtn]").click()
      scTransaction()
      cy.wait(60000)
      title.should("contain.text", `${name}.mvx is Yours!`)
    } else if ($title.text().includes("is Yours!")) {
      title.should("contain.text", `${name}.mvx is Yours!`)
    } else {
      title.should("contain.text", `${name}.mvx is Taken!`)
    }
  })
}
