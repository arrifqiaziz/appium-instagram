const { browser } = require('webdriverio')

function waitUntilElemetExist(element, timeout = 10000) {
  element.waitForExist(timeout)
  element.isDisplayed()
}

async function waitAndClick(element) {
  waitUntilElemetExist(element)
  await element.click()
}

module.exports = {
  waitUntilElemetExist,
  waitAndClick
}
