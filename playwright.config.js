import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.TEST_ENV}`, override: true, quiet: true });


const testDir = defineBddConfig({
    features: 'test/features/*.feature',
    steps: ['test/steps/*.{js,mjs,cjs,ts,mts,cts}', 'test/Hooks/*.{js,mjs,cjs,ts,mts,cts}'],
    importTestFrom: 'test/fixtures/fixtures',
    disableWarnings: { importTestFrom: true }


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
