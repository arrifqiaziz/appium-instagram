const menuBar = require('../page/menuBar.page')
const searchPage = require('../page/searchPage/search.page')
const accountDetail = require('../page/accountDetail/accountDetail.page')

describe('Send Direct Message', () => {
  it('Send text message', async () => {
    await menuBar.clickSearchMenu()
    await searchPage.searchAccount('auliarhohmah03')
    await accountDetail.sendTextMessage('Hello World !')
  })

  // it('Send image message', async () => {
  //   await menuBar.clickSearchMenu()
  //   await searchPage.searchAccount('auliarhohmah03')
  // })
})
