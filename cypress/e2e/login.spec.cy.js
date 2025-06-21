import userData from '../fixtures/userData.json'

const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    
    dashboardLayout: ".orangehrm-upgrade-layout",
    wrongCredentialAlert: "[role='alert']"
}


describe('Orange HRM Tests', () => {
  it('Login - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardLayout)
    
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get('.oxd-alert-content > .oxd-text')

    
  })
})