/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
    coverageProvider: "v8",
    preset: "ts-jest",
    testEnvironment: "jsdom",
    testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
    testPathIgnorePatterns: ["\\\\node_modules\\\\"],
};

export default config;
