import {Builder} from "selenium-webdriver";
import 'chromedriver';

(async () =>{
    const driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.google.com/')
        .then(_=>driver.sleep(5000));
    await driver.quit();
})();
