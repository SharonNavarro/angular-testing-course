module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["html", "text-summary"]
};
