import { shallowMount } from '@vue/test-utils'
import clock from '@/components/clock/index.vue'

describe('Clock', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(clock)
    expect(wrapper.text()).toBe('0 : 0');
  })
})
