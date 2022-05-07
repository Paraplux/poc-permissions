export default {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	coverageReporters: ["text", "lcov"],
	collectCoverageFrom: ["src/**/*.ts"],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	testMatch: ["**/*.test.ts", "!**/*.integration.test.ts"],
	transform: {
		".+\\.ts$": "ts-jest",
	},
};
