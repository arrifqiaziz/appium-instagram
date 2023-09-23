/**
 * Menambahkan delay dalam milidetik.
 * @param {number} milliseconds - Jumlah milidetik yang diinginkan.
 */
function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds)
  })
}

module.exports = {
  delay
}
