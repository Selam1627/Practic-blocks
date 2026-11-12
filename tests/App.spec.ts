import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import HeroSection from '@/components/HeroSection.vue'

const DEFAULT_TITLE = 'Practice Blocks'
const TAGLINE = 'Greener precast blocks for lower-carbon buildings.'

describe('App', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.restoreAllMocks()
  })

  describe('normal cases', () => {
    it('shows the hero with the default company name and tagline', () => {
      vi.stubEnv('VITE_APP_TITLE', undefined)
      const wrapper = mount(App)
      expect(wrapper.get('h1').text()).toBe(DEFAULT_TITLE)
      expect(wrapper.get('[data-testid="hero-tagline"]').text()).toBe(TAGLINE)
    })

    it('has exactly one main heading', () => {
      const wrapper = mount(App)
      expect(wrapper.findAll('h1')).toHaveLength(1)
    })

    it('places the hero inside the main landmark', () => {
      const wrapper = mount(App)
      expect(wrapper.find('main section[aria-labelledby="hero-title"]').exists()).toBe(true)
    })

    it('uses VITE_APP_TITLE as the company name when it is set', () => {
      vi.stubEnv('VITE_APP_TITLE', 'Custom Blocks Ltd')
      const wrapper = mount(App)
      expect(wrapper.get('h1').text()).toBe('Custom Blocks Ltd')
    })
  })

  describe('edge cases', () => {
    it('falls back to the default name when VITE_APP_TITLE is empty', () => {
      vi.stubEnv('VITE_APP_TITLE', '')
      const wrapper = mount(App)
      expect(wrapper.get('h1').text()).toBe(DEFAULT_TITLE)
    })

    it('falls back to the default name when VITE_APP_TITLE is only whitespace', () => {
      vi.stubEnv('VITE_APP_TITLE', '   ')
      const wrapper = mount(App)
      expect(wrapper.get('h1').text()).toBe(DEFAULT_TITLE)
    })

    it('trims surrounding whitespace from VITE_APP_TITLE', () => {
      vi.stubEnv('VITE_APP_TITLE', '  Custom Blocks Ltd  ')
      const wrapper = mount(App)
      // wrapper.text() trims on its own, so check the exact prop value instead
      expect(wrapper.getComponent(HeroSection).props('title')).toBe('Custom Blocks Ltd')
    })
  })

  describe('expected errors', () => {
    it('renders without Vue warnings or console errors', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const error = vi.spyOn(console, 'error').mockImplementation(() => {})
      mount(App)
      expect(warn).not.toHaveBeenCalled()
      expect(error).not.toHaveBeenCalled()
    })
  })
})
