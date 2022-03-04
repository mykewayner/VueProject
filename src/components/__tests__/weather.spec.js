import { shallowMount } from '@vue/test-utils'
import weather from '@/components/weather/index.vue'

describe('weather', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(weather)
    expect(wrapper.contains("img")).toBe(true);
  })
})
