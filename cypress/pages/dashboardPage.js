class DashboardPage {
    selectorsList() {
    const selectors = {
            dashboardButton: "[href='/web/index.php/dashboard/index']",
        }
        return selectors;
    }
 
   
    checkDashboardPage() {
        cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardButton).click()
    }

}

export default DashboardPage;