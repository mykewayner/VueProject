import { shallowMount } from '@vue/test-utils'
import title from '@/components/title/index.vue'

describe('title', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(title)
    expect(wrapper.contains('h1','h2','h3','h4','h5','h6')).toBe(true);
  })
})
