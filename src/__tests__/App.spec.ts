import { describe, it, expect, beforeEach } from 'vitest'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { nextTick } from 'vue'
import App from '../App.vue'
import { translations } from '../locales/translations'

function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape)
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.keys(value)
        .filter((k) => k !== 'dir' && k !== 'theme') // optional per-shot hints differ by language
        .sort()
        .map((k) => [k, shape((value as Record<string, unknown>)[k])]),
    )
  }
  return typeof value
}

describe('portfolio page', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.lang = 'en'
    document.documentElement.dir = 'ltr'
    setActivePinia(createPinia())
  })

  it('renders the name, role and every section', () => {
    const wrapper = mount(App, { global: { plugins: [createPinia()] } })
    expect(wrapper.find('h1').text()).toContain('Yousef Abdo')
    expect(wrapper.find('h1').text()).toContain('Full-stack developer in Cairo')
    for (const id of [
      'top',
      'work',
      'ayma',
      'giftsniper',
      'servicebase',
      'experience',
      'skills',
      'contact',
    ]) {
      expect(wrapper.find(`#${id}`).exists(), id).toBe(true)
    }
  })

  it('switches to Arabic, right to left, and remembers the choice', async () => {
    const wrapper = mount(App, { global: { plugins: [createPinia()] } })
    await wrapper.find('button.lang').trigger('click')
    await nextTick()
    expect(document.documentElement.dir).toBe('rtl')
    expect(document.documentElement.lang).toBe('ar')
    expect(wrapper.find('h1').text()).toContain('يوسف عبده')
    expect(localStorage.getItem('lang')).toBe('ar')
  })

  it('board rows point at sections that exist', () => {
    const wrapper = mount(App, { global: { plugins: [createPinia()] } })
    for (const row of translations.en.board.rows) {
      expect(wrapper.find(row.href).exists(), row.href).toBe(true)
    }
  })
})

describe('content', () => {
  it('Arabic and English have the same structure', () => {
    expect(shape(translations.ar)).toEqual(shape(translations.en))
  })

  it('every screenshot ships in both sizes', () => {
    const work = resolve(process.cwd(), 'public/work') + '/'
    for (const lang of ['en', 'ar'] as const) {
      for (const item of translations[lang].work.cases) {
        for (const shot of item.shots) {
          expect(existsSync(`${work}${shot.file}.webp`), shot.file).toBe(true)
          expect(existsSync(`${work}${shot.file}-1000.webp`), shot.file).toBe(true)
        }
      }
    }
  })

  it('the CV downloads exist', () => {
    const pub = resolve(process.cwd(), 'public') + '/'
    expect(existsSync(`${pub}Yousef-Abdo-CV.pdf`)).toBe(true)
    expect(existsSync(`${pub}Yousef-Abdo-CV-ar.pdf`)).toBe(true)
  })
})
