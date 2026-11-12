import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '@/components/HeroSection.vue'

// Vue calls console.warn(message, ...componentTrace); match on the message only
const warnMessages = (warn: { mock: { calls: unknown[][] } }) =>
  warn.mock.calls.map((call) => String(call[0]))

const props = {
  title: 'Practice Blocks',
  tagline: 'Greener precast blocks for lower-carbon buildings.',
}

describe('HeroSection', () => {
  describe('normal cases', () => {
    it('renders the title as the main heading', () => {
      const wrapper = mount(HeroSection, { props })
      expect(wrapper.get('h1').text()).toBe('Practice Blocks')
    })

    it('renders the tagline after the heading', () => {
      const wrapper = mount(HeroSection, { props })
      const tagline = wrapper.get('[data-testid="hero-tagline"]')
      expect(tagline.text()).toBe('Greener precast blocks for lower-carbon buildings.')

      const heading = wrapper.get('h1').element
      expect(
        heading.compareDocumentPosition(tagline.element) & Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy()
    })

    it('labels the section with its heading', () => {
      const wrapper = mount(HeroSection, { props })
      const section = wrapper.get('section')
      const headingId = wrapper.get('h1').attributes('id')
      expect(headingId).toBeTruthy()
      expect(section.attributes('aria-labelledby')).toBe(headingId)
    })

    it('renders exactly one heading and one tagline', () => {
      const wrapper = mount(HeroSection, { props })
      expect(wrapper.findAll('h1')).toHaveLength(1)
      expect(wrapper.findAll('[data-testid="hero-tagline"]')).toHaveLength(1)
    })

    it('updates when the props change', async () => {
      const wrapper = mount(HeroSection, { props })
      await wrapper.setProps({ title: 'New Name', tagline: 'New tagline.' })
      expect(wrapper.get('h1').text()).toBe('New Name')
      expect(wrapper.get('[data-testid="hero-tagline"]').text()).toBe('New tagline.')
    })
  })

  describe('edge cases', () => {
    it('renders HTML in the props as plain text, not markup', () => {
      const wrapper = mount(HeroSection, {
        props: { title: '<script>alert(1)</script>', tagline: '<b>bold</b>' },
      })
      expect(wrapper.find('script').exists()).toBe(false)
      expect(wrapper.find('b').exists()).toBe(false)
      expect(wrapper.get('h1').text()).toBe('<script>alert(1)</script>')
      expect(wrapper.get('[data-testid="hero-tagline"]').text()).toBe('<b>bold</b>')
    })

    it('renders accents, symbols and emoji unchanged', () => {
      const wrapper = mount(HeroSection, {
        props: { title: 'Bloques Prácticos & Co.', tagline: 'CO₂ −40 % 🌱' },
      })
      expect(wrapper.get('h1').text()).toBe('Bloques Prácticos & Co.')
      expect(wrapper.get('[data-testid="hero-tagline"]').text()).toBe('CO₂ −40 % 🌱')
    })

    it('renders very long text in full without truncating it', () => {
      const longTitle = 'Practice Blocks '.repeat(20).trim()
      const longTagline = 'Greener precast blocks for lower-carbon buildings. '.repeat(10).trim()
      const wrapper = mount(HeroSection, { props: { title: longTitle, tagline: longTagline } })
      expect(wrapper.get('h1').text()).toBe(longTitle)
      expect(wrapper.get('[data-testid="hero-tagline"]').text()).toBe(longTagline)
    })

    it('still renders the heading when the tagline is an empty string', () => {
      const wrapper = mount(HeroSection, { props: { title: 'Practice Blocks', tagline: '' } })
      expect(wrapper.get('h1').text()).toBe('Practice Blocks')
    })
  })

  describe('expected errors', () => {
    afterEach(() => {
      vi.restoreAllMocks()
    })

    it('warns when the required title prop is missing', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      // @ts-expect-error -- testing a missing required prop
      mount(HeroSection, { props: { tagline: props.tagline } })
      expect(warnMessages(warn)).toContainEqual(
        expect.stringContaining('Missing required prop: "title"'),
      )
    })

    it('warns when the required tagline prop is missing', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      // @ts-expect-error -- testing a missing required prop
      mount(HeroSection, { props: { title: props.title } })
      expect(warnMessages(warn)).toContainEqual(
        expect.stringContaining('Missing required prop: "tagline"'),
      )
    })

    it('warns when a prop has the wrong type', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      // @ts-expect-error -- testing a wrong prop type
      mount(HeroSection, { props: { title: 42, tagline: props.tagline } })
      expect(warnMessages(warn)).toContainEqual(
        expect.stringContaining('Invalid prop: type check failed for prop "title"'),
      )
    })

    it('does not warn when given valid props', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      mount(HeroSection, { props })
      expect(warn).not.toHaveBeenCalled()
    })
  })
})
