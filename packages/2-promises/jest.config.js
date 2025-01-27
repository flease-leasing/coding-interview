module.exports = {
    roots: ['<rootDir>/src'],
    testTimeout: 30000,
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: ['src/main/**/*.ts', '!src/test/**/*.ts'],
    coverageReporters: ['text-summary'],
};
