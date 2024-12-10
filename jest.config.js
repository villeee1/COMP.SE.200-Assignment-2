export default {
    testEnvironment: 'node',
    collectCoverage: true,
    coverageReporters: ['lcov', 'text', 'html'],
    coverageDirectory: 'coverage',
    "roots": [
      "<rootDir>/tests"
    ],
  };