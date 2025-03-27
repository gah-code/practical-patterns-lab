// jest.config.mjs
export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test/jest-setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
