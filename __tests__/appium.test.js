import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
  platformName: 'Android',
  deviceName: '0030399571',
  app: './android/app/build/outputs/apk/app-debug.apk' // relative to root of project
};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(20000); // wait for app to load - if you keep this too short you may get problems.
})

test('appium renders', async () => {
  expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
  expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
});

test('appium button click', async () => {
  expect(await driver.hasElementByAccessibilityId('button')).toBe(true);
  await driver.elementByAccessibilityId('button')
    .click()
    .click();
  const counter = await driver.elementByAccessibilityId('counter').text();
  expect(counter).toBe('2');
});

