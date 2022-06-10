import { shallowMount } from '@vue/test-utils'
import ZText from '../../src/components/ZText'
import { textDefaultProps } from '../../src/defaultProps'
describe('ZText.vue', () => {
  const { location } = window
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: '' }
    })
  })
  afterEach(() => {
    window.location = location
  })
  it('default ZText render', () => {
    const msg = 'test'
    const props = {
      ...textDefaultProps,
      text: msg
    }
    const wrapper = shallowMount(ZText, { props })
    expect(wrapper.text()).toBe(msg)
    expect(wrapper.element.tagName).toBe('DIV')
    const style = wrapper.attributes().style
    console.log(style)
    expect(style.includes('font-size')).toBeTruthy()
    expect(style.includes('actionType')).toBeFalsy()
  })
  it('ZText with actionType and URL should trigger location href change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'http://test.url',
      tag: 'h2'
    }
    const wrapper = shallowMount(ZText, { props })
    expect(wrapper.element.tagName).toBe('H2')
    await wrapper.trigger('click')
    expect(window.location.href).toBe('http://test.url')
  })
  it('ZText with isEditing should not trigger location change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'http://test.url',
      tag: 'h2',
      isEditing: true
    }
    const wrapper = shallowMount(ZText, { props })
    await wrapper.trigger('click')
    expect(window.location.href).not.toBe('http://test.url')
  })
})
