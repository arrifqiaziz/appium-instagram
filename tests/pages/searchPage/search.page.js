const waitHelper = require('../../../helpers/waitHelper')
const delay = require('../../../helpers/delayHelper')

class search {
  get searchBar() {
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.EditText')
  }

  get searchResult(){
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout[1]/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout')
  }

  async searchAccount(accountName) {
    await waitHelper.waitAndClick(this.searchBar)
    await this.searchBar.setValue(accountName)
    await delay.delay(3000)
    await waitHelper.waitUntilElemetExist(this.searchResult)
    await waitHelper.waitAndClick(this.searchResult)
  }
}

module.exports = new search()
