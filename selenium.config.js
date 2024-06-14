const { Builder } = require('selenium-webdriver');

const buildWebDriver = async () => {
  const driver = await new Builder().forBrowser('chrome').build();
  return driver;
};

module.exports = {
  buildWebDriver,
};
const { buildWebDriver } = require('../selenium.config');

describe('Selenium WebDriver Integration Tests', () => {
  let driver;

  beforeAll(async () => {
    driver = await buildWebDriver();
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('should load the homepage', async () => {
    await driver.get('http://localhost:4200'); // Remplacez l'URL par celle de votre application

    const title = await driver.getTitle();
    expect(title).toBe('Titre de votre application');
  });

  it('should navigate to login page', async () => {
    await driver.get('http://localhost:4200'); // Remplacez l'URL par celle de votre application

    const loginButton = await driver.findElement({ id: 'login-button' });
    await loginButton.click();

    const loginTitle = await driver.getTitle();
    expect(loginTitle).toBe('Page de connexion');
  });

  // Ajoutez d'autres tests selon vos besoins
});
