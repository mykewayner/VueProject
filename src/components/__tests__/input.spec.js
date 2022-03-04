import { shallowMount } from '@vue/test-utils'
import input from '@/components/input/index.vue'

describe('input', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(input)
    expect(wrapper.contains('input')).toBe(true);
  })
})
