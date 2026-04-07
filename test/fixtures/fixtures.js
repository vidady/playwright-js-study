// fixtures.js
import { test as base, createBdd } from 'playwright-bdd';
import Homepage from '../pages/Homepage.page';

export const test = base.extend({
    homePage: async ({ page }, use) => {
        await use(new Homepage(page));
    },
});

const bdd = createBdd(test);
export const { BeforeWorker, After, Before, BeforeScenario, AfterStep, AfterWorker, AfterScenario, AfterAll, BeforeAll, BeforeStep } = bdd;
export const { Given, When, Then } = bdd;
