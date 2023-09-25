const menuBar = require('../pages/menuBar.page')
const searchPage = require('../pages/searchPage/search.page')
const accountDetail = require('../pages/accountDetail/accountDetail.page')
const dataset = require('../fixtures/data/dataset.json')
const delay = require('../../helpers/delayHelper')

describe('Send Direct Message', () => {
  it('Send text message', async () => {
    await menuBar.clickSearchMenu()
    await searchPage.searchAccount('auliarhohmah03')
    await accountDetail.sendTextMessage('Hello World !')
  })

  it('Send text message with JSON File', async () => {
    await accountDetail.back()
    await menuBar.clickSearchMenu()
    await searchPage.searchAccount(dataset.username)
    await accountDetail.sendTextMessage(dataset.message)
  })
})
