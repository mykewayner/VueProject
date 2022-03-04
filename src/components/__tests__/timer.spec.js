import { shallowMount } from '@vue/test-utils'
import timer from '@/components/timer/index.vue'

describe('timer', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(timer)
    expect(wrapper.text()).toBe('600 seconds');
  })
})
