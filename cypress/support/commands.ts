/// <reference types="cypress" />

import { AssertionEnum } from "../constants/enums"
import { DEVNET_API } from "../constants/globalLinks"
import { login } from "./commands/login"
import { registerDomain } from "./commands/registerDomain"

// Check the url global function
Cypress.Commands.add("checkUrl", (url) => {
  cy.url().should(AssertionEnum.include, url)
})

//Login with keystore global function
Cypress.Commands.add("login", login)

Cypress.Commands.add("registerDomain", registerDomain)

Cypress.Commands.add("getSelector", (selector, ...cypressAction) => {
  return cy.get(`[data-testid=${selector}]`, ...cypressAction)
})

// Add the custom command for api intercepts
Cypress.Commands.add("apiIntercept", (method, param) => {
  cy.intercept(method, `${DEVNET_API}${param}`).as(param)
})

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      checkUrl: (url: string) => void
      login: () => void
      registerDomain: (name: string) => void
      apiIntercept: (method: string, param: string) => void
      getSelector: (selector: string, ...cypressAction: []) => Chainable<JQuery<HTMLElement>>
    }
  }
}

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
