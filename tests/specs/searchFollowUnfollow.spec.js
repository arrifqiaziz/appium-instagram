let menuBar = require('../page/menuBar.page')
let searchPage = require('../page/searchPage/search.page')
let accountDetail = require('../page/accountDetail/accountDetail.page')

describe('Search, Follow and Unfollow Account', () => {
  it('Search and Follow Account', async () => {
    await menuBar.clickSearchMenu()
    await searchPage.searchAccount('sanbercode')
    await accountDetail.followAccount()
  })

  it('Search and Unfollow Account', async () => {
    await menuBar.clickSearchMenu()
    await searchPage.searchAccount('sanbercode')
    await accountDetail.unfollowAccount()
  })
})
