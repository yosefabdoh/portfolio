import { en } from './en'
import { ar } from './ar'
import type { Content } from './types'

export const translations: Record<'en' | 'ar', Content> = { en, ar }

export type Language = keyof typeof translations
