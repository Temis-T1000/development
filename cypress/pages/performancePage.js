class PerformancePage {
    selectorList() {
        const selectors = {
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
        }
        return selectors;
    }
    accessPerformance() {
        cyan.get(this.selectorList().performanceButton).click()
    }

}

export default PerformancePage;