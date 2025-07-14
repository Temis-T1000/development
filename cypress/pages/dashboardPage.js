class DashboardPage {
    selectorsList() {
    const selectors = {
            dashboardButton: "[href='/web/index.php/dashboard/index']",
        }
        return selectors;
    }
 
   
    checkDashboardPage() {
        cy.get(this.selectorsList().dashboardButton).click()
        cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    }

}

export default DashboardPage;