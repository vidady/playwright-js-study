import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
    features: 'test/features/*.feature',
    steps: 'test/steps/*.{js,mjs,cjs,ts,mts,cts}',

});

export default defineConfig({
    testDir,
    outputDir: 'reports/test-results',
    fullyParallel: false,
    reporter: [
        ['list'], // console output
        ['html', { outputFolder: 'reports/html-report' }], // HTML report
        ['json', { outputFile: 'reports/json-report/results.json' }] // JSON report
    ],

});
