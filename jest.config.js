export default {
    testEnvironment: 'node',
    collectCoverage: true,
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
    coverageDirectory: 'coverage',
    "roots": [
      "<rootDir>/tests"
    ],
  };