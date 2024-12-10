export default {
    testEnvironment: 'node',
    collectCoverage: true,
    coverageReporters: ['lcov', 'text'],
    coverageDirectory: 'coverage',
    "roots": [
      "<rootDir>/tests"
    ],
  };