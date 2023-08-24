/// <reference types="cypress" />

describe("/domain/:name", () => {
  before(() => {
    cy.viewport(1280, 1000)
  })

  it("can register a domain", () => {
    const domain = "dangerou6"
    cy.registerDomain(domain)
  })
})
