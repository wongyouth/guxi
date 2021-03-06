import { hash } from 'bcryptjs'
import { NODE_ENV } from './env'

export const isProd = NODE_ENV === 'production'
export const isTest = NODE_ENV === 'test'
export const isDev = NODE_ENV === 'development'

export const hashPassword = (password: string) => hash(password, 10)
