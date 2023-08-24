/// <reference types="cypress" />

describe("Web Wallet Connect", () => {
  it("can connect wallet", () => {
    cy.viewport(1280, 1000)
    cy.visit("/")
    cy.login()
    cy.checkUrl("/")
  })
})
