const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });


  test("clicking the Draw btn should display div with id = 'choices'", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    const choicesDspld = await driver.findElement(By.id("choices")).isDisplayed();
    expect(choicesDspld).toBe(true);
  });

  test("clicking an 'Add to Duo' button displays the div with id = 'player-duo'", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.wait(until.elementLocated(By.className("bot-btn")), 1000);
    const addDuoBtn = await driver.findElements(By.className("bot-btn"));
    await addDuoBtn[0].click(); 
    const duoDspld = await driver.findElement(By.id("player-duo")).isDisplayed();
    expect(duoDspld).toBe(true);
  });

  test("when a bot is 'Removed from Duo', it goes back to 'choices'", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.wait(until.elementLocated(By.className("bot-btn")), 1000);
    const addDuoBtn = await driver.findElements(By.className("bot-btn"));
    await addDuoBtn[0].click(); 
    await driver.findElement(By.xpath("//button[contains(text(), 'Remove from Duo')]")).click();
    const choicesDspld = await driver.findElement(By.id("choices")).isDisplayed();
    expect(choicesDspld).toBe(true);
  });

  
});