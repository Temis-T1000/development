class PimPage {
    selectorList () {
        const selectors = {
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
        }
        return selectors;
    }
    accessPim () {
        cy.get(this.selectorList().pimButton).click()
    }
}

export default PimPage; 