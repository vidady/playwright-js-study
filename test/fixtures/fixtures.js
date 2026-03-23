// fixtures.js
import { test as base, createBdd } from 'playwright-bdd';

const test = base.extend({
  
});

const { Given, When, Then } = createBdd(test);

export default { test, Given, When, Then };