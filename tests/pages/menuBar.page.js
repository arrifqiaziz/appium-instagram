const waitHelper = require('../../helpers/waitHelper')

class menuBar {
  get searchMenu() {
    return $('xpath://*[@content-desc="Search and explore"]')
  }

  get profileMenu() {
    return $('xpath://*[@id="com.instagram.android:id/profile_tab"]')
  }

  async clickSearchMenu() {
    await waitHelper.waitAndClick(this.searchMenu)
  }
}

module.exports = new menuBar()
