import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/src/logger.ts',
    '/src/config.ts',
    '/src/request-logger.ts',
    '/src/app.ts',
    '/src/server.ts',
    '/src/database/*.*',
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}

export default config
