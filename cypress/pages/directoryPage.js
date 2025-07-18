class DirectoryPage {
    selectorList () {
        const selectors = {
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
        }
        return selectors
    }
    accessDirectory() {
        cy.get(this.selectorList().directoryButton).click()
    }
}

export default DirectoryPage; 