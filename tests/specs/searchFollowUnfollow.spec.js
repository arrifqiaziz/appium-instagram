let menuBar = require('../pages/menuBar.page')
let searchPage = require('../pages/searchPage/search.page')
let accountDetail = require('../pages/accountDetail/accountDetail.page')

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
