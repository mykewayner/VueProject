import { shallowMount } from '@vue/test-utils'
import textContent from '@/components/textContent'

describe('textContent', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(textContent)
    expect(wrapper.contains('p')).toBe(true);
  })
})
