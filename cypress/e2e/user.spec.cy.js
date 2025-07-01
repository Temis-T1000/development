
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

import userData from '../fixtures/userData.json'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myinfoPage = new MyInfoPage()


describe('Orange HRM Tests', () => {
  
  const selectorsList = {

  }

  it.only('User info upDate - Sucess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.accessDashboardPage()
    myinfoPage.accessMyInfoPage()       

  })
  
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get('.oxd-alert-content > .oxd-text')

    
  })
})