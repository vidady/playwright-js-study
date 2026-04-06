// fixtures.js
import { test as base, createBdd } from 'playwright-bdd';
import Homepage from '../pages/Homepage.page';


export const test = base.extend({
    homePage: async ({ page }, use) => {
        await use(new Homepage(page));
    },


    

});

export const { Given, When, Then } = createBdd(test);