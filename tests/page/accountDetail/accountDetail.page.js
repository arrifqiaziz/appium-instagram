const waitHelper = require('../../../helpers/waitHelper')

class accountDetail {
  get usernameAccount() {
    return $('xpath://*[@content-desc="sanbercode"]')
  }

  get follow() {
    return $('id:com.instagram.android:id/profile_header_follow_button')
  }

  get unfollow() {
    return $('id:com.instagram.android:id/follow_sheet_unfollow_row')
  }

  async followAccount() {
    await waitHelper.waitUntilElemetExist(this.usernameAccount)
    await expect(this.follow).toHaveText('Follow')
    await waitHelper.waitAndClick(this.follow)
    await expect(this.follow).toHaveText('Following')
  }

  async unfollowAccount() {
    await waitHelper.waitUntilElemetExist(this.usernameAccount)
    await waitHelper.waitUntilElemetExist(this.follow)
    await expect(this.follow).toHaveText('Following')
    await waitHelper.waitAndClick(this.follow)
    await waitHelper.waitAndClick(this.unfollow)
    await expect(this.follow).toHaveText('Follow')
  }
}

module.exports = new accountDetail()
