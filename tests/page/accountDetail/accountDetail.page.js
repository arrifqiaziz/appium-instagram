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

  get message() {
    return $('id:com.instagram.android:id/button_container')
  }

  get typeMessage(){
    return $('id:com.instagram.android:id/row_thread_composer_edittext')
  }

  get sendButton(){
    return $('id:com.instagram.android:id/row_thread_composer_button_send')
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

  async sendTextMessage(message) {
    await waitHelper.waitAndClick(this.message)
    await this.typeMessage.setValue(message)
    await waitHelper.waitAndClick(this.sendButton)
  }
}

module.exports = new accountDetail()
