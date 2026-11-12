import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App', () => {
  it('renders the company name as the main heading', () => {
    const wrapper = mount(App)
    expect(wrapper.get('h1').text()).toBe('Practic Blocks')
  })
})
