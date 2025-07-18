class TimePage {
    selectorList () {
        const selectors = {
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
        }
        return selectors;
    }
    accessTime() {
        cyan.get(this.selectorList().timeButton).click()
    }
}

export default TimePage; // Aqui exporta a classe ExemploPage para ser usada em outros arquivos de teste 