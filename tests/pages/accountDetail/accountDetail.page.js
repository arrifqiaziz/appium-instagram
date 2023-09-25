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

  get backButton(){
    return $('id:com.instagram.android:id/action_bar_button_back')
  }

  get imageMessage(){
    return $('id:com.instagram.android:id/row_thread_composer_button_gallery')
  }

  get menu(){
    return $('id:com.instagram.android:id/media_picker_header_title')
  }

  get selectMenu(){
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[5]/android.widget.TextView[1]')
  }

  get selectImage(){
    return $('xpath://*[@content-desc="Photo thumbnail, Added on June 2"]')
  }

  get buttonSendImage(){
    return $('xpath://*[@content-desc="Send"]/android.widget.TextView')
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

  async back(){
    await waitHelper.waitAndClick(this.backButton)
  }

  async sendImage(){
    await waitHelper.waitAndClick(this.message)
    await waitHelper.waitAndClick(this.imageMessage)
    await waitHelper.waitAndClick(this.menu)
    await waitHelper.waitAndClick(this.selectMenu)
    await waitHelper.waitAndClick(this.selectImage)
    await waitHelper.waitAndClick(this.buttonSendImage)
  }
}

module.exports = new accountDetail()
