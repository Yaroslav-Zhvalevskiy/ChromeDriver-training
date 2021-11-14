const { Builder, By, Key } = require('selenium-webdriver');
require('chromedriver');
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe('desc', function () {
    it('Test', async function () {
        let driver = await new Builder().forBrowser('chrome').build();
        async function waitTitle() {
            const titles = await driver.findElements(By.css('span.Rn3Z1b'));
            return !!titles.length;
        }
        driver.manage().window().maximize();
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.wait(waitTitle, 5000);
        const title1 = await driver.findElement(By.css('span.Rn3Z1b'));
        let text = await title1.getText();
        expect(text).toBe('ChromeDriver');
        const headerItems = await driver.findElements(By.css('.VLoccc .aJHbb[data-level="1"]'));
        await headerItems[2].click();
        await driver.wait(waitTitle, 5000);
        const title2 = await driver.findElement(By.css('span.Rn3Z1b'));
        await driver.executeScript('arguments[0].style.backgroundColor = "green"', title2);
        text = await title2.getText();
        expect(text).toBe('Chrome Extensions');
        const headerItems2 = await driver.findElements(By.css('.VLoccc .aJHbb[data-level="1"]'));
        await headerItems2[0].click();
        await driver.wait(waitTitle, 5000);
        const title3 = await driver.findElement(By.css('span.Rn3Z1b'));
        text = await title3.getText();
        expect(text).toBe('ChromeDriver');
        const downloadsLink = await driver.findElement(By.css('a strong'));
        await downloadsLink.click();
        await driver.wait(waitTitle, 5000);
        const title4 = await driver.findElement(By.css('span.Rn3Z1b'));
        text = await title4.getText();
        expect(text).toBe('Downloads');
        const searchIcon = await driver.findElement(By.css('[data-tooltip="Открыть поле поиска"]'));
        await searchIcon.click();
        await driver.sleep(500);
        await driver.findElement(By.css('input.whsOnd')).sendKeys('ChromeDriver', Key.ENTER);
        await driver.sleep(500);
        const title5 = await driver.findElement(By.css('a[href="https://chromedriver.chromium.org/home"]>b'));
        text = await title5.getText();
        expect(text).toBe('ChromeDriver');
        await driver.quit();
    });
});