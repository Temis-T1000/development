class BuzzPage {
    selectorList() {
        const selectors = {
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']",
        }
        return selectors;
    }
    accessBuzz() {
        cy.get(this.selectorList().buzzButton).click()
    }
}

export default BuzzPage;