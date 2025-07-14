import userData from '../fixtures/userData.json'

import LoginPage from '../pages/loginPage'
// import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
// import MyInfoPage from '../pages/myInfoPage'


const loginPage = new LoginPage()
// const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
// const myinfoPage = new MyInfoPage()



describe('Orange HRM Tests', () => {
  
  const selectorsList = {

  }

  it.only('User info upDate - Sucess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    menuPage.accessAdmin()
    // myinfoPage.accessMyInfoPage()
    menuPage.accessMyInfo()
    menuPage.checkDashboardPage()
    // dashboardPage.accessDashboardPage()
         

  })
  
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get('.oxd-alert-content > .oxd-text')

    
  })
})