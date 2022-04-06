
describe('Youshop', () => {
  it('should open correct app', () => {
    browser.url('/')
    browser.pause(1000)
    // Page title is defined in ./layouts/default.vue:11
    expect(browser).toHaveTitle('Something Completely Different')
    browser.pause(1000)
  })
})