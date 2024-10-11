module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|@testing-library))',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/tests/mocks/svgMock.js',
  },
};
